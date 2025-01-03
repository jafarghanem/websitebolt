document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slides img');
    if (slides.length === 0) return;

    let currentSlide = 0;
    slides[0].classList.add('active');

    const showSlide = (index) => {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index].classList.add('active');
    };

    const nextSlide = () => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    };

    const prevSlide = () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    };

    // Auto-advance slides every 5 seconds
    setInterval(nextSlide, 5000);

    // Manual navigation
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);
});