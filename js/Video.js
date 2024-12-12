let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// Highlight active link on scroll
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    // Close menu when scrolling (optional)
    if (menuIcon.classList.contains('fa-times')) {
        menuIcon.classList.remove('fa-times');
        navbar.classList.remove('active');
    }
};

// Toggle menu visibility
menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

// Close menu on link click (for mobile screens)
navLinks.forEach(link => {
    link.onclick = () => {
        menuIcon.classList.remove('fa-times');
        navbar.classList.remove('active');
    };
});
