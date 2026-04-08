// const menuToggle = document.getElementById('menu-toggle');
// const mobileNav = document.getElementById('mobile-menu');
// const toggleIcon = menuToggle.querySelector("i");

// menuToggle.addEventListener('click', () => {
//     mobileNav.classList.toggle('active');

//     // Toggle icon class
//     if (mobileNav.classList.contains('active')) {
//         toggleIcon.classList.remove("fa-bars");
//         toggleIcon.classList.add("fa-times");
//     } else {
//         toggleIcon.classList.remove("fa-times");
//         toggleIcon.classList.add("fa-bars");
//     }
// });

// // Mobile dropdown functionality
// document.addEventListener('DOMContentLoaded', () => {

//     const mobileDropdowns = document.querySelectorAll('.mobile-dropdown');

//     mobileDropdowns.forEach(dropdown => {
//         const link = dropdown.querySelector('a');
//         const arrow = dropdown.querySelector('.dropdown-arrow');

//         // Arrow click → open dropdown
//         arrow.addEventListener('click', (e) => {
//             e.preventDefault();
//             e.stopPropagation();

//             // close others
//             mobileDropdowns.forEach(other => {
//                 if (other !== dropdown) {
//                     other.classList.remove('active');
//                 }
//             });

//             dropdown.classList.toggle('active');
//         });

//         // Anchor click → allow normal navigation
//         link.addEventListener('click', (e) => {
//             // if arrow was clicked, stop link
//             if (e.target.classList.contains('dropdown-arrow')) {
//                 e.preventDefault();
//             }
//         });
//     });

//     /* Nested category dropdowns (UNCHANGED) */
//     const mobileCategories = document.querySelectorAll('.mobile-category');

//     mobileCategories.forEach(category => {
//         const title = category.querySelector('.mobile-category-title');

//         title.addEventListener('click', (e) => {
//             e.stopPropagation();

//             const parent = category.closest('.mobile-dropdown-content');
//             const siblings = parent.querySelectorAll('.mobile-category');

//             siblings.forEach(other => {
//                 if (other !== category) {
//                     other.classList.remove('active');
//                 }
//             });

//             category.classList.toggle('active');
//         });
//     });

//     /* Close everything on outside click */
//     document.addEventListener('click', (e) => {
//         if (!e.target.closest('.mobile-dropdown')) {
//             mobileDropdowns.forEach(dropdown => {
//                 dropdown.classList.remove('active');
//             });
//         }
//     });

// });


// // navbar mega menu
// // Mega menu logic (scoped per dropdown)
// document.querySelectorAll('.dropdown').forEach(dropdown => {

//     const sidebarCards = dropdown.querySelectorAll('.dropdown-sidebar .sidebar-card');
//     const contents = dropdown.querySelectorAll('.one-content');

//     // ✅ Set default active on load
//     if (sidebarCards.length && contents.length) {
//         sidebarCards.forEach(card => card.classList.remove('active'));
//         contents.forEach(content => content.classList.remove('active'));

//         sidebarCards[0].classList.add('active');
//         contents[0].classList.add('active');
//     }

//     // ✅ Hover functionality (scoped)
//     sidebarCards.forEach(card => {
//         card.addEventListener('mouseenter', () => {

//             // Remove active only inside THIS dropdown
//             sidebarCards.forEach(c => c.classList.remove('active'));
//             contents.forEach(content => content.classList.remove('active'));

//             card.classList.add('active');

//             const target = card.getAttribute('data-target');
//             const targetContent = dropdown.querySelector(`#${target}`);
//             if (targetContent) {
//                 targetContent.classList.add('active');
//             }
//         });
//     });
// });


// // smooth scrolling effect
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener("click", function (e) {
//         e.preventDefault();
//         const target = document.querySelector(this.getAttribute("href"));
//         if (target) {
//             target.scrollIntoView({
//                 behavior: "smooth",
//                 block: "start"
//             });
//         }
//     });
// });

// document.addEventListener("DOMContentLoaded", () => {
//     const companyToggle = document.querySelector(".company-toggle");
//     const companyDropdown = document.querySelector(".company-dropdown");

//     companyToggle.addEventListener("click", (e) => {
//         e.preventDefault();
//         companyDropdown.classList.toggle("open");
//     });

//     // Optional: close when clicking outside
//     document.addEventListener("click", (e) => {
//         if (!companyDropdown.contains(e.target)) {
//             companyDropdown.classList.remove("open");
//         }
//     });
// });


// //dropdown content swiper
// document.addEventListener("DOMContentLoaded", () => {
//     const dropdowns = document.querySelectorAll(".one-content");

//     dropdowns.forEach((dropdown, index) => {
//         new Swiper(dropdown, {
//             slidesPerView: 3,
//             spaceBetween: 20,
//             loop: false,
//             navigation: {
//                 nextEl: dropdown.querySelector(".swiper-button-next"),
//                 prevEl: dropdown.querySelector(".swiper-button-prev"),
//             },
//             breakpoints: {
//                 0: { slidesPerView: 1 },
//                 768: { slidesPerView: 2 },
//                 1024: { slidesPerView: 3 },
//             },
//         });
//     });
// });



// // Machine Product dropdown swiper
// document.addEventListener("DOMContentLoaded", () => {
//     const machineProductSlider = document.querySelector("#machine-product-slider");
//     if (machineProductSlider) {
//         new Swiper(machineProductSlider, {
//             slidesPerView: 3,
//             spaceBetween: 20,
//             loop: false,
//             navigation: {
//                 nextEl: machineProductSlider.querySelector(".swiper-button-next"),
//                 prevEl: machineProductSlider.querySelector(".swiper-button-prev"),
//             },
//             breakpoints: {
//                 0: { slidesPerView: 1 },
//                 768: { slidesPerView: 2 },
//                 1024: { slidesPerView: 3 },
//             },
//         });
//     }
// });

/* ===============================
   MOBILE MENU TOGGLE
================================ */
const menuToggle = document.getElementById('menu-toggle');
const mobileNav = document.getElementById('mobile-menu');
const toggleIcon = menuToggle.querySelector("i");

menuToggle.addEventListener('click', () => {
    mobileNav.classList.toggle('active');

    if (mobileNav.classList.contains('active')) {
        toggleIcon.classList.remove("fa-bars");
        toggleIcon.classList.add("fa-times");
    } else {
        toggleIcon.classList.remove("fa-times");
        toggleIcon.classList.add("fa-bars");
    }
});

/* ===============================
   MOBILE DROPDOWN LOGIC
================================ */
document.addEventListener('DOMContentLoaded', () => {

    const mobileDropdowns = document.querySelectorAll('.mobile-dropdown');

    mobileDropdowns.forEach(dropdown => {
        const link = dropdown.querySelector('a');
        const arrow = dropdown.querySelector('.dropdown-arrow');

        arrow.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();

            mobileDropdowns.forEach(other => {
                if (other !== dropdown) other.classList.remove('active');
            });

            dropdown.classList.toggle('active');
        });

        link.addEventListener('click', (e) => {
            if (e.target.classList.contains('dropdown-arrow')) {
                e.preventDefault();
            }
        });
    });

    const mobileCategories = document.querySelectorAll('.mobile-category');

    mobileCategories.forEach(category => {
        const title = category.querySelector('.mobile-category-title');

        title.addEventListener('click', (e) => {
            e.stopPropagation();

            const parent = category.closest('.mobile-dropdown-content');
            const siblings = parent.querySelectorAll('.mobile-category');

            siblings.forEach(other => {
                if (other !== category) other.classList.remove('active');
            });

            category.classList.toggle('active');
        });
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.mobile-dropdown')) {
            mobileDropdowns.forEach(dropdown => dropdown.classList.remove('active'));
        }
    });
});

/* ===============================
   MEGA MENU (DESKTOP)
================================ */
document.querySelectorAll('.dropdown').forEach(dropdown => {

    const sidebarCards = dropdown.querySelectorAll('.dropdown-sidebar .sidebar-card');
    const contents = dropdown.querySelectorAll('.one-content');

    // Default active
    if (sidebarCards.length && contents.length) {
        sidebarCards.forEach(c => c.classList.remove('active'));
        contents.forEach(c => c.classList.remove('active'));
        sidebarCards[0].classList.add('active');
        contents[0].classList.add('active');
    }

    // Sidebar hover
    sidebarCards.forEach(card => {
        card.addEventListener('mouseenter', () => {

            sidebarCards.forEach(c => c.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));

            card.classList.add('active');

            const target = card.dataset.target;
            const targetContent = dropdown.querySelector(`#${target}`);

            if (targetContent) {
                targetContent.classList.add('active');

                const swiperEl = targetContent.querySelector('.swiper');
                if (swiperEl && swiperEl.swiper) {
                    setTimeout(() => swiperEl.swiper.update(), 50);
                }
            }
        });
    });

    dropdown.addEventListener('mouseenter', () => {
        setTimeout(() => {
            dropdown.querySelectorAll('.swiper').forEach(swiperEl => {
                if (swiperEl.swiper) swiperEl.swiper.update();
            });
        }, 100);
    });
});

/* ===============================
   SMOOTH SCROLL
================================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    });
});

/* ===============================
   COMPANY DROPDOWN
================================ */
document.addEventListener("DOMContentLoaded", () => {
    const companyToggle = document.querySelector(".company-toggle");
    const companyDropdown = document.querySelector(".company-dropdown");

    if (!companyToggle || !companyDropdown) return;

    companyToggle.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        companyDropdown.classList.toggle("open");
    });

    document.addEventListener("click", (e) => {
        if (!companyDropdown.contains(e.target)) {
            companyDropdown.classList.remove("open");
        }
    });
});

/* ===============================
   MEGA MENU SWIPERS (FIXED)
================================ */
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".dropdown .swiper").forEach(swiperEl => {
        new Swiper(swiperEl, {
            slidesPerView: 3,
            spaceBetween: 20,
            loop: false,
            observer: true,
            observeParents: true,
            navigation: {
                nextEl: swiperEl.querySelector(".swiper-button-next"),
                prevEl: swiperEl.querySelector(".swiper-button-prev"),
            },
            breakpoints: {
                0: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
            },
        });
    });
});

/* ===============================
   MACHINE PRODUCT PAGE SWIPER
================================ */
document.addEventListener("DOMContentLoaded", () => {
    const machineProductSlider = document.querySelector("#machine-product-slider");
    if (!machineProductSlider) return;

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
}); 