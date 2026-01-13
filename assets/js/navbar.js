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
        const dropdownLink = dropdown.querySelector('a');
        const dropdownContent = dropdown.querySelector('.mobile-dropdown-content');

        dropdownLink.addEventListener('click', (e) => {
            // Only prevent default if clicking on the arrow area or if we want to toggle
            const clickedOnArrow = e.target.classList.contains('dropdown-arrow') ||
                e.target.closest('.dropdown-arrow');

            if (clickedOnArrow || dropdown.classList.contains('active')) {
                e.preventDefault();

                // Close other dropdowns
                mobileDropdowns.forEach(otherDropdown => {
                    if (otherDropdown !== dropdown) {
                        otherDropdown.classList.remove('active');
                    }
                });

                // Toggle current dropdown
                dropdown.classList.toggle('active');
            }
            // If dropdown is not active and not clicking on arrow, allow normal navigation
        });
    });

    // Nested category dropdown functionality
    const mobileCategories = document.querySelectorAll('.mobile-category');

    mobileCategories.forEach(category => {
        const categoryTitle = category.querySelector('.mobile-category-title');

        if (categoryTitle) {
            categoryTitle.addEventListener('click', (e) => {
                e.stopPropagation();

                // Get parent dropdown to find sibling categories
                const parentDropdown = category.closest('.mobile-dropdown-content');
                const siblingCategories = parentDropdown.querySelectorAll('.mobile-category');

                // Close other categories in the same dropdown
                siblingCategories.forEach(otherCategory => {
                    if (otherCategory !== category) {
                        otherCategory.classList.remove('active');
                    }
                });

                // Toggle current category
                category.classList.toggle('active');
            });
        }
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.mobile-dropdown')) {
            mobileDropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    });
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
