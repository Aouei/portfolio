# Portfolio

Static portfolio site. No build step required — pure HTML/CSS/JS.

## Local

Open `index.html` directly in the browser, or serve it with any static server:

```bash
# Python
python -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000).

## Deploy (GitHub Pages)

1. Push the repo to GitHub
2. Go to **Settings → Pages**
3. Source: branch `main`, folder `/ (root)`
4. The site will be live at `https://aouei.github.io/portfolio/`

## Structure

```
├── index.html       Home
├── about.html       About
├── softwares.html   Projects
├── research.html    Research
└── static/
    ├── style.css
    └── main.js
```
