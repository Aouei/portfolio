# Portfolio

Static web portfolio built with FastAPI.

## Setup

```bash
conda env create -f environment.yml
conda activate portfolio
```

## Run

```bash
uvicorn main:app --reload
```

Open [http://localhost:8000](http://localhost:8000) in your browser.

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home |
| `/about` | About |
| `/softwares` | Softwares |
| `/research` | Research |
