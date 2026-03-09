// ── Language toggle ──
const toggle = document.getElementById('lang-toggle');
const saved = localStorage.getItem('lang') || 'en';

if (saved === 'es') {
    document.body.classList.add('es');
    if (toggle) toggle.textContent = 'EN';
}

if (toggle) {
    toggle.addEventListener('click', () => {
        const isEs = document.body.classList.toggle('es');
        toggle.textContent = isEs ? 'EN' : 'ES';
        localStorage.setItem('lang', isEs ? 'es' : 'en');
    });
}

// ── Active nav link ──
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav ul a');
    const current = location.pathname.split('/').pop() || 'index.html';
    links.forEach(link => {
        const href = link.getAttribute('href').split('/').pop();
        if (href === current) link.classList.add('active');
    });
});
