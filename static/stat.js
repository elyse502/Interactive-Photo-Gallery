document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('touchstart', () => {
        card.classList.toggle('hover');
    });
});