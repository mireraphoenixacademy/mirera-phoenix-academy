// You can add interactive features here
document.addEventListener('DOMContentLoaded', () => {
    console.log("Welcome to Mirera Phoenix Academy!");
});

// Example of a simple interactive feature
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});
