from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates

app = FastAPI()

app.mount("/static", StaticFiles(directory="static"), name="static")
templates = Jinja2Templates(directory="templates")


@app.get("/", response_class=HTMLResponse)
async def home(request: Request):
    return templates.TemplateResponse("home.html", {"request": request})


@app.get("/about", response_class=HTMLResponse)
async def about(request: Request):
    return templates.TemplateResponse("about.html", {"request": request})


@app.get("/softwares", response_class=HTMLResponse)
async def softwares(request: Request):
    return templates.TemplateResponse("softwares.html", {"request": request})


@app.get("/research", response_class=HTMLResponse)
async def research(request: Request):
    return templates.TemplateResponse("research.html", {"request": request})
