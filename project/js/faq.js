document.addEventListener('DOMContentLoaded', () => {
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const isExpanded = question.getAttribute('aria-expanded') === 'true';

            // Close all other answers
            document.querySelectorAll('.faq-question').forEach(q => {
                q.setAttribute('aria-expanded', 'false');
                q.nextElementSibling.classList.remove('active');
            });

            // Toggle current question
            if (!isExpanded) {
                question.setAttribute('aria-expanded', 'true');
                answer.classList.add('active');
            } else {
                question.setAttribute('aria-expanded', 'false');
                answer.classList.remove('active');
            }
        });
    });
});
