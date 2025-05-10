from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from agent.base import CampusCopilot
import uvicorn

app = FastAPI(
    title="Campus Copilot API",
    description="An AI agent for college students",
    version="1.0.0"
)

# Initialize the agent
agent = CampusCopilot()

class ChatRequest(BaseModel):
    message: str

class ChatResponse(BaseModel):
    response: str

@app.post("/chat", response_model=ChatResponse)
async def chat(request: ChatRequest):
    try:
        response = agent.chat(request.message)
        return ChatResponse(response=response)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/")
async def root():
    return {
        "message": "Welcome to Campus Copilot API",
        "endpoints": {
            "/chat": "POST - Chat with the AI agent",
            "/docs": "GET - API documentation"
        }
    }

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True) 