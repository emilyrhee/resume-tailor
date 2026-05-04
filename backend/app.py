import subprocess
import tempfile
import os
from flask import Flask, request, jsonify, send_file
from flask_cors import CORS
from pydantic import BaseModel, ValidationError
from main import rag_pipeline


app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})


class InvokeRequest(BaseModel):
    query: str
    resume: str
    k: int = 5

class CompileRequest(BaseModel):
    latex: str

@app.route("/")
def index():
    return "<h1>Resume Tailor API is Live!</h1><p>The backend is running successfully.</p>"

@app.route("/invoke", methods=["POST", "OPTIONS"])
def invoke():
    try:
        if request.method == "OPTIONS":
            return jsonify({"detail": "CORS preflight response"}), 200

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

@app.route("/compile", methods=["POST", "OPTIONS"])
def compile_latex():
    try:
        if request.method == "OPTIONS":
            return jsonify({"detail": "CORS preflight response"}), 200

        data = request.get_json()
        if data is None or "latex" not in data:
            return jsonify({"detail": "Invalid JSON body"}), 400
        
        latex_str = data["latex"]

        # Create a temporary directory to avoid cluttering PythonAnywhere files
        with tempfile.TemporaryDirectory() as tempdir:
            tex_file_path = os.path.join(tempdir, "resume.tex")
            with open(tex_file_path, "w", encoding="utf-8") as f:
                f.write(latex_str)
            
            # Run pdflatex safely
            result = subprocess.run(
                ["pdflatex", "-interaction=nonstopmode", "-halt-on-error", f"-output-directory={tempdir}", tex_file_path],
                stdout=subprocess.PIPE,
                stderr=subprocess.PIPE
            )
            
            pdf_file_path = os.path.join(tempdir, "resume.pdf")
            if not os.path.exists(pdf_file_path):
                return jsonify({
                    "detail": "Failed to compile LaTeX.",
                    "logs": result.stdout.decode() + "\n" + result.stderr.decode()
                }), 400
            
            # Read the PDF before the tempdir gets destroyed
            with open(pdf_file_path, "rb") as f:
                pdf_data = f.read()

        # Send back as a response directly
        return pdf_data, 200, {
            'Content-Type': 'application/pdf',
            'Content-Disposition': 'inline; filename="resume.pdf"'
        }
    except Exception as e:
        return jsonify({"detail": str(e)}), 500
