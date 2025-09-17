const menuToggle = document.getElementById('menu-toggle');
const mobileNav = document.getElementById('mobile-menu');
const toggleIcon = menuToggle.querySelector("i");

menuToggle.addEventListener('click', () => {
    mobileNav.classList.toggle('active');

    // Toggle icon class
    if (mobileNav.classList.contains('active')) {
        toggleIcon.classList.remove("fa-bars");
        toggleIcon.classList.add("fa-times");
    } else {
        toggleIcon.classList.remove("fa-times");
        toggleIcon.classList.add("fa-bars");
    }
});