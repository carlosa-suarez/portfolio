document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initScrollAnimations();
    initInteractiveGrayscale();
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
            // Toggle icon asset between menu and close if needed
            menuToggle.textContent = nav.classList.contains('active') ? 'close' : 'menu';
        });
    }
}

/**
 * Subtle Scroll Reveal Interaction
 * Uses IntersectionObserver for performant opacity fades as users read down pages.
 */
function initScrollAnimations() {
    const sections = document.querySelectorAll('section, .service, .card');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.05
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Instantly inject smooth presentation transition parameters
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(15px)';
        section.style.transition = 'opacity 0.6s cubic-bezier(0.25, 1, 0.5, 1), transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)';
        revealObserver.observe(section);
    });
}

/**
 * Dynamic Photo Grayscale pop
 * Lets images smoothly saturate when hovering near parent container items
 */
function initInteractiveGrayscale() {
    const structuralCards = document.querySelectorAll('.service, .card, section');

    structuralCards.forEach(card => {
        const targetingImg = card.querySelector('img');
        if (!targetingImg) return;

        card.addEventListener('mouseenter', () => {
            targetingImg.style.filter = 'grayscale(0%)';
        });

        card.addEventListener('mouseleave', () => {
            targetingImg.style.filter = 'grayscale(100%)';
        });
    });
}