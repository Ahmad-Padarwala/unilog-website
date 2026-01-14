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

// Mobile dropdown functionality
document.addEventListener('DOMContentLoaded', () => {

    const mobileDropdowns = document.querySelectorAll('.mobile-dropdown');

    mobileDropdowns.forEach(dropdown => {
        const trigger = dropdown.querySelector('a');

        trigger.addEventListener('click', (e) => {
            e.preventDefault();

            // Close other dropdowns
            mobileDropdowns.forEach(other => {
                if (other !== dropdown) {
                    other.classList.remove('active');
                }
            });

            // Toggle current
            dropdown.classList.toggle('active');
        });
    });

    /* Nested category dropdowns */
    const mobileCategories = document.querySelectorAll('.mobile-category');

    mobileCategories.forEach(category => {
        const title = category.querySelector('.mobile-category-title');

        title.addEventListener('click', (e) => {
            e.stopPropagation();

            const parent = category.closest('.mobile-dropdown-content');
            const siblings = parent.querySelectorAll('.mobile-category');

            siblings.forEach(other => {
                if (other !== category) {
                    other.classList.remove('active');
                }
            });

            category.classList.toggle('active');
        });
    });

    /* Close everything on outside click */
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.mobile-dropdown')) {
            mobileDropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    });

});



// navbar mega menu
// Mega menu logic (scoped per dropdown)
document.querySelectorAll('.dropdown').forEach(dropdown => {

    const sidebarCards = dropdown.querySelectorAll('.dropdown-sidebar .sidebar-card');
    const contents = dropdown.querySelectorAll('.one-content');

    // ✅ Set default active on load
    if (sidebarCards.length && contents.length) {
        sidebarCards.forEach(card => card.classList.remove('active'));
        contents.forEach(content => content.classList.remove('active'));

        sidebarCards[0].classList.add('active');
        contents[0].classList.add('active');
    }

    // ✅ Hover functionality (scoped)
    sidebarCards.forEach(card => {
        card.addEventListener('mouseenter', () => {

            // Remove active only inside THIS dropdown
            sidebarCards.forEach(c => c.classList.remove('active'));
            contents.forEach(content => content.classList.remove('active'));

            card.classList.add('active');

            const target = card.getAttribute('data-target');
            const targetContent = dropdown.querySelector(`#${target}`);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
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

document.addEventListener("DOMContentLoaded", () => {
    const companyToggle = document.querySelector(".company-toggle");
    const companyDropdown = document.querySelector(".company-dropdown");

    companyToggle.addEventListener("click", (e) => {
        e.preventDefault();
        companyDropdown.classList.toggle("open");
    });

    // Optional: close when clicking outside
    document.addEventListener("click", (e) => {
        if (!companyDropdown.contains(e.target)) {
            companyDropdown.classList.remove("open");
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
