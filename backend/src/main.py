from fastapi import FastAPI
from src.api.health import router as health_router
from src.api.tasks import router as task_router
from src.api.auth import router as auth_router
app = FastAPI(title="TaskFlow Lite API")

app.include_router(health_router)
app.include_router(auth_router, prefix="/auth")
app.include_router(task_router, prefix="/tasks")

from fastapi.responses import HTMLResponse

@app.get("/")
def frontend():
    return HTMLResponse("""
    <h1>TaskFlow Lite</h1>
    <p>Frontend served via FastAPI</p>
    <a href="/docs">API Docs</a>
    """)