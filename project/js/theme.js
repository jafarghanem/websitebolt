// Theme toggle functionality
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Load saved theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    body.className = `${savedTheme}-theme`;

    themeToggle.addEventListener('click', () => {
        const currentTheme = body.className.includes('light') ? 'dark' : 'light';
        body.className = `${currentTheme}-theme`;
        localStorage.setItem('theme', currentTheme);
    });
});