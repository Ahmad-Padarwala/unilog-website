// hero section
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".hero-card");
    cards.forEach((card, index) => {
        if (index === 0) {
            card.classList.add("active");
        } else {
            card.classList.remove("active");
        }

        card.addEventListener("mouseenter", () => {
            cards.forEach(c => c.classList.remove("active"));
            card.classList.add("active");
        });

        // Handle click
        card.addEventListener("click", () => {
            cards.forEach(c => c.classList.remove("active"));
            card.classList.add("active");
        });
    });
});

// product section
const tabs = document.querySelectorAll(".tab");
const productWrapper = document.querySelector(".product-swiper .swiper-wrapper");
const indicator = document.querySelector(".tab-indicator");
const productsData = {
    machine: [
        { img: "./image/hero-machine-1.png", title: "Machine 1", desc: "High quality machine 1.", imageDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
        { img: "./image/hero-machine-2.png", title: "Machine 2", desc: "High quality machine 2.", imageDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
        { img: "./image/hero-machine-3.png", title: "Machine 3", desc: "High quality machine 3.", imageDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
        { img: "./image/hero-machine-4.png", title: "Machine 4", desc: "High quality machine 4.", imageDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
        { img: "./image/hero-machine-4.png", title: "Machine 5", desc: "High quality machine 5.", imageDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." }
    ],
    product: [
        { img: "./image/hero-machine-1.png", title: "Product 1", desc: "Best selling product 1.", imageDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
        { img: "./image/hero-machine-2.png", title: "Product 2", desc: "Best selling product 2.", imageDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
        { img: "./image/hero-machine-3.png", title: "Product 3", desc: "Best selling product 3.", imageDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
        { img: "./image/hero-machine-4.png", title: "Product 4", desc: "Best selling product 4.", imageDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." }
    ]
};
function renderProducts(items) {
    productWrapper.innerHTML = "";
    items.forEach(item => {
        const slide = document.createElement("div");
        slide.className = "swiper-slide";
        slide.innerHTML = `
        <div class="product-card">
            <div class="product-image">
                <img src="${item.img}" alt="${item.title}">
            </div>
            <div class="product-description">
                <p>${item.imageDesc}</p>
            </div>
            <div class="product-info">
                <h3>${item.title}</h3>
                <p>${item.desc}</p>
            </div>
        </div>
        `;
        productWrapper.appendChild(slide);
    });

    swiper.update();
}

const swiper = new Swiper(".product-swiper", {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: false,
    grabCursor: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        320: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 4 }
    }
});
renderProducts(productsData.machine);

tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
        document.querySelector(".tab.active")?.classList.remove("active");
        tab.classList.add("active");
        indicator.style.transform = `translateX(${index * 100}%)`;
        if (index === 0) {
            renderProducts(productsData.machine);
        } else {
            renderProducts(productsData.product);
        }
    });
});


//reels section
// document.querySelectorAll(".video-item video").forEach(video => {
//     video.addEventListener("mouseenter", () => video.play());
//     video.addEventListener("mouseleave", () => {
//         video.pause();
//         video.currentTime = 0;
//     });
// });


const Contactswiper = new Swiper(".testimonial-swiper", {
    slidesPerView: "auto",     // let CSS width decide (400px fixed)
    spaceBetween: 10,
    centeredSlides: true,      // keeps active centered
    loop: true,
    grabCursor: true,
    pagination: false,
});