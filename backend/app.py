from pathlib import Path
from flask import Flask, send_from_directory, jsonify

# Project directories
BASE_DIR = Path(__file__).resolve().parent.parent
FRONTEND_DIR = BASE_DIR / "frontend"

# Initialize Flask
app = Flask(
    __name__,
    static_folder=str(FRONTEND_DIR),
    static_url_path=""
)


@app.route("/")
def home():
    return send_from_directory(FRONTEND_DIR, "index.html")


@app.route("/health")
def health():
    return jsonify({
        "status": "success",
        "message": "FGCK Elburgon Town LCA website is running."
    })


if __name__ == "__main__":
    app.run(debug=True)