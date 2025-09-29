// only hovered hero section
// document.addEventListener("DOMContentLoaded", () => {
//     const cards = document.querySelectorAll(".hero-card");
//     cards.forEach((card, index) => {
//         if (index === 0) {
//             card.classList.add("active");
//         } else {
//             card.classList.remove("active");
//         }

//         card.addEventListener("mouseenter", () => {
//             cards.forEach(c => c.classList.remove("active"));
//             card.classList.add("active");
//         });

//         // Handle click
//         card.addEventListener("click", () => {
//             cards.forEach(c => c.classList.remove("active"));
//             card.classList.add("active");
//         });
//     });
// });

// slider hero section
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".hero-card");
    let activeIndex = 0;
    let slideInterval;

    function setActiveCard(index) {
        cards.forEach(c => c.classList.remove("active"));
        cards[index].classList.add("active");
        activeIndex = index;
    }

    function startAutoSlide() {
        slideInterval = setInterval(() => {
            let nextIndex = (activeIndex + 1) % cards.length;
            // setActiveCard(nextIndex);
        }, 5000); // 5 seconds
    }

    function resetAutoSlide() {
        clearInterval(slideInterval);
        startAutoSlide();
    }

    // Initialize
    setActiveCard(0);
    startAutoSlide();

    // Handle manual hover/click
    cards.forEach((card, index) => {
        card.addEventListener("mouseenter", () => {
            if (index === activeIndex) {
                return;
            }
            setActiveCard(index);
            resetAutoSlide();
        });

        card.addEventListener("click", () => {
            setActiveCard(index);
            resetAutoSlide();
        });
    });
});


// product section
const tabs = document.querySelectorAll(".tab");
const productWrapper = document.querySelector(".product-swiper .swiper-wrapper");
const indicator = document.querySelector(".tab-indicator");
const productsData = {
    machine: [
        {
            img: "./image/hero-machine-1.webp",
            title: "Hydraluxe Aquastar",
            desc: "Premium Hydrafacial device",
            imageDesc: "Best premium HydraFacial device. Ultimate anti-aging treatment, superior exfoliation, and advanced skin brightening. Experience a truly results-oriented facial machine."
        },
        {
            img: "./image/hero-machine-2.webp",
            title: "Epiglow",
            desc: "Premium Diode & Pico combination laser platform",
            imageDesc: "Best Pico + diode laser, Pico + diode supplier, best combination laser device, pico + diode machine with best results, best tattoo removal, carbon facial, hair removal device."
        },
        {
            img: "./image/hero-machine-3.webp",
            title: "Revive",
            desc: "True Q switch Nd:Yag laser device",
            imageDesc: "Best Q switch Nd:Yag laser, best FDA approved Q switch Nd:Yag, premium Q switch Nd:Yag laser for pigmentation removal, best laser for tattoo removal."
        },
        {
            img: "./image/hero-machine-4.webp",
            title: "Ice1200",
            desc: "Painless, comfortable four wavelength diode laser",
            imageDesc: "Best 4 wavelength diode laser device, best FDA approved laser device, best 1200W diode laser, best laser for hair removal treatment, painless device for hair removal treatment."
        },
        {
            img: "./image/hero-machine-4.webp",
            title: "Cool 360",
            desc: "Freeze away stubborn fat",
            imageDesc: "Best Cryolipolysis device, safest cryolipolysis device, fastest cryolipolysis device, best cooling cryolipolysis device, premium result oriented cryolipolysis device, best fat reduction device."
        },
        {
            img: "./image/hero-machine-4.webp",
            title: "Ultraflaxe",
            desc: "Fast and effective CO2 laser device",
            imageDesc: "Best 60W CO2 fractional laser, best laser for acne scars, best laser for vaginal tightening, best CO2 fractional laser, high quality CO2 fractional laser."
        }
    ],
    product: [
        { img: "./image/hero-machine-1.webp", title: "Product 1", desc: "Best selling product 1.", imageDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
        { img: "./image/hero-machine-2.webp", title: "Product 2", desc: "Best selling product 2.", imageDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
        { img: "./image/hero-machine-3.webp", title: "Product 3", desc: "Best selling product 3.", imageDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
        { img: "./image/hero-machine-4.webp", title: "Product 4", desc: "Best selling product 4.", imageDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." }
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
    slidesPerView: "auto",
    spaceBetween: 10,
    centeredSlides: true,
    loop: false,
    grabCursor: true,
    loopedSlides: 3
});

// faq section
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
    const btn = item.querySelector(".faq-question");

    btn.addEventListener("click", () => {
        // close other items
        faqItems.forEach(i => {
            if (i !== item) {
                i.classList.remove("active");
                i.querySelector(".icon").textContent = "+";
            }
        });

        // toggle current item
        item.classList.toggle("active");

        const icon = item.querySelector(".icon");
        icon.textContent = item.classList.contains("active") ? "–" : "+";
    });
});
