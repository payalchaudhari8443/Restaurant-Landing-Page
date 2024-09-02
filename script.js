// Script for smooth scrolling on menu links
document.addEventListener('DOMContentLoaded', () => {
    const menuLinks = document.querySelectorAll('nav a[href^="#"]');

    menuLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Script to handle form submission (dummy implementation)
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const message = this.querySelector('textarea').value;

    // Basic validation
    if (name && email && message) {
        alert('Thank you for your message, ' + name + '!');
        this.reset(); // Reset the form fields
    } else {
        alert('Please fill out all fields.');
    }
});
