from fastapi import FastAPI
from fastapi.middleware import cors
from langchain_core.prompts import PromptTemplate
from langchain_community.tools import YouTubeSearchTool
from functools import wraps

app = FastAPI(title="Educational Application", version="0.1.0")

app.add_middleware(cors.CORSMiddleware, allow_origins=["*"], allow_methods=["*"], allow_headers=["*"])


 
@app.get("/")
def root():
    return {"message": "Welcome to educational application!"}

# @app.post("/video")