from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from main import rag_pipeline


app = FastAPI()


class InvokeRequest(BaseModel):
    query: str
    resume: str
    k: int = 5

@app.post("/invoke")
def invoke(request: InvokeRequest) -> dict[str, object]:
    try:
        return rag_pipeline(
            query=request.query,
            resume=request.resume,
            k=request.k
        )
    except FileNotFoundError as exc:
        raise HTTPException(status_code=404, detail=str(exc)) from exc
    except NotADirectoryError as exc:
        raise HTTPException(status_code=400, detail=str(exc)) from exc