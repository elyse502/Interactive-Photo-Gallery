/**
 * Add touch event listeners to all elements with the class 'card' to enable 
 * toggle hover effect on touch devices.
 * 
 * This script is designed to add a 'hover' class to card elements when they are 
 * touched. This helps simulate hover effects on touch devices like smartphones 
 * and tablets.
 */
document.querySelectorAll('.card').forEach(card => {
    // Add an event listener for the 'touchstart' event on each card
    card.addEventListener('touchstart', () => {
        // Toggle the 'hover' class on the card element when it is touched
        card.classList.toggle('hover');
    });
});
