from flask import Flask, request, jsonify
from flask_cors import CORS
from pydantic import BaseModel, ValidationError
from main import rag_pipeline


app = Flask(__name__)
CORS(app)


class InvokeRequest(BaseModel):
    query: str
    resume: str
    k: int = 5

@app.route("/")
def index():
    return "<h1>Resume Tailor API is Live!</h1><p>The backend is running successfully.</p>"

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
    except ValueError as exc:
        return jsonify({"detail": str(exc)}), 400