// Mark active nav link based on current page
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav ul a');
    const current = location.pathname.split('/').pop() || 'index.html';
    links.forEach(link => {
        const href = link.getAttribute('href').split('/').pop();
        if (href === current) link.classList.add('active');
    });
});
