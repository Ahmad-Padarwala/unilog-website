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
        document.querySelectorAll('.one-content').forEach(content => content.classList.remove('active'));

        // Show the matched one
        const target = item.getAttribute('data-target');
        document.getElementById(target).classList.add('active');
    });
});

// smooth scrolling effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});


//dropdown content swiper
document.addEventListener("DOMContentLoaded", () => {
    const dropdowns = document.querySelectorAll(".one-content");

    dropdowns.forEach((dropdown, index) => {
        new Swiper(dropdown, {
            slidesPerView: 3,
            spaceBetween: 20,
            loop: false,
            navigation: {
                nextEl: dropdown.querySelector(".swiper-button-next"),
                prevEl: dropdown.querySelector(".swiper-button-prev"),
            },
            breakpoints: {
                0: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
            },
        });
    });
});



// Machine Product dropdown swiper
document.addEventListener("DOMContentLoaded", () => {
    const machineProductSlider = document.querySelector("#machine-product-slider");
    if (machineProductSlider) {
        new Swiper(machineProductSlider, {
            slidesPerView: 3,
            spaceBetween: 20,
            loop: false,
            navigation: {
                nextEl: machineProductSlider.querySelector(".swiper-button-next"),
                prevEl: machineProductSlider.querySelector(".swiper-button-prev"),
            },
            breakpoints: {
                0: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
            },
        });
    }
});
