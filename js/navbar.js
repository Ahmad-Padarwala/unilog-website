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


// navbar mega menu
document.querySelectorAll('.dropdown-sidebar .sidebar-card').forEach(item => {
    item.addEventListener('mouseenter', () => {
        // Remove active class from all sidebar items
        document.querySelectorAll('.dropdown-sidebar .sidebar-card').forEach(card => card.classList.remove('active'));
        item.classList.add('active');

        // Hide all contents
        document.querySelectorAll('.dropdown-content').forEach(content => content.classList.remove('active'));

        // Show the matched one
        const target = item.getAttribute('data-target');
        document.getElementById(target).classList.add('active');
    });
});