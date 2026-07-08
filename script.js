// Smooth scrolling za navigacijske linkove
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// CTA Button - Pozovi nas
const ctaButtons = document.querySelectorAll('.cta-btn');
ctaButtons.forEach(button => {
    button.addEventListener('click', function() {
        const phone = '+381642995541';
        window.location.href = `tel:${phone}`;
    });
});

// Console log - Welcome message
console.log('%cGLJ - Profesionalne Građevinske Usluge', 'color: #667eea; font-size: 20px; font-weight: bold;');
console.log('%cTelefon: +381 64 299 5541', 'color: #764ba2; font-size: 14px;');
console.log('%cInđija, Srbija', 'color: #666; font-size: 12px;');