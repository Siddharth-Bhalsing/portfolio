// Smooth Scroll for navigation links
const navLinks = document.querySelectorAll('header nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - 50,
            behavior: 'smooth'
        });
    });
});

// Form submission (Optional feature)
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Message Sent!');
});
