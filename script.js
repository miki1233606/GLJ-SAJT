// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll to contact
function scrollToContact() {
    const contact = document.getElementById('kontakt');
    contact.scrollIntoView({ behavior: 'smooth' });
}

// Contact Form
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const phone = this.querySelector('input[type="tel"]').value;
        const message = this.querySelector('textarea').value;
        
        // Email via mailto
        const mailtoLink = `mailto:064-299-5541@example.com?subject=Upit od ${name}&body=Ime: ${name}%0AEmail: ${email}%0ATelefon: ${phone}%0A%0APoruka:%0A${message}`;
        
        // Or show success message
        alert('Hvala! Vaša poruka je primljena. Uskoro ćemo vas kontaktirati.');
        
        // Reset form
        this.reset();
    });
}

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
if (menuToggle) {
    menuToggle.addEventListener('click', function() {
        const nav = document.querySelector('nav ul');
        nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    });
}

// Console Welcome
console.log('%c🏗️ GLJ - Profesionalne Građevinske Usluge', 'color: #667eea; font-size: 20px; font-weight: bold;');
console.log('%c📞 Telefon: +381 64 299 5541', 'color: #764ba2; font-size: 14px;');
console.log('%c📍 Inđija, Srbija', 'color: #666; font-size: 12px;');
console.log('%cVebsajt: Profesionalno dizajniran i optimizovan', 'color: #667eea; font-size: 12px;');