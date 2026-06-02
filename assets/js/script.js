document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
});

/**
 * Clean Mobile Navigation Toggle
 */
function initMobileMenu() {
    const menuToggle = document.querySelector('.mobile-menu');
    const nav = document.getElementById('main-nav');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
            menuToggle.textContent = nav.classList.contains('active') ? 'close' : 'menu';
        });
    }
}