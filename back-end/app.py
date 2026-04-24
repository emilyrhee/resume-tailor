
# A very simple Flask Hello World app for you to get started with...

# from flask import Flask

# app = Flask(__name__)

# @app.route('/')
# def hello_world():
#     return 'Hello from Flask!'


from flask import Flask, request, jsonify
from pydantic import BaseModel, ValidationError
from main import rag_pipeline


app = Flask(__name__)


class InvokeRequest(BaseModel):
    query: str
    resume: str
    k: int = 5

@app.route("/invoke", methods=["POST"])
def invoke():
    try:
        data = request.get_json()
        if data is None:
            return jsonify({"detail": "Invalid JSON body"}), 400

        validated_request = InvokeRequest(**data)

        result = rag_pipeline(
            query=validated_request.query,
            resume=validated_request.resume,
            k=validated_request.k
        )
        return jsonify(result), 200
    except ValidationError as exc:
        return jsonify({"detail": exc.errors()}), 422
    except FileNotFoundError as exc:
        return jsonify({"detail": str(exc)}), 404
    except NotADirectoryError as exc:
        return jsonify({"detail": str(exc)}), 400