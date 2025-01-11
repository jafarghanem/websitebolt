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

function toggleAvailability(availabilityId) {
    // Get all cards
    const allCards = document.querySelectorAll('.feature-card');

    allCards.forEach(card => {
        // Check if the card contains the clicked availability section
        const availabilitySection = card.querySelector(`#${availabilityId}`);
        if (availabilitySection) {
            card.classList.toggle('active'); // Toggle the active class on the clicked card
        } else {
            card.classList.remove('active'); // Ensure other cards are collapsed
        }
    });
}
