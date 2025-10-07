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
            setActiveCard(nextIndex);
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
            <article class="product-card" itemscope itemtype="https://schema.org/Product">
                <div class="product-image">
                <img src="${item.img}" 
                    alt="${item.title} - ${item.desc}" 
                    width="300" height="300"
                    loading="lazy"
                    itemprop="image">
                </div>
                <div class="product-description">
                <p itemprop="description">${item.imageDesc}</p>
                </div>
                <div class="product-info">
                <h3 itemprop="name">${item.title}</h3>
                <p>${item.desc}</p>
                </div>
            </article>
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

// Interactive Product Circle JavaScript
class InteractiveCircle {
  constructor() {
    this.circleContainer = document.querySelector(".circle-container");
    this.descriptionPanel = document.querySelector(".description-panel");
    this.segments = document.querySelectorAll(".segment");
    this.descriptionContents = document.querySelectorAll(
      ".description-content"
    );
    this.isAnimating = false;
    this.currentProduct = null;
    this.isHovering = false;
  }

  init() {
    if (
      !this.circleContainer ||
      !this.descriptionPanel ||
      !this.segments.length
    ) {
      return;
    }
    this.bindEvents();
    this.setupResponsive();
  }

  bindEvents() {
    // Add hover events to SVG segments instead of product items
    const segments = document.querySelectorAll(".segment");
    segments.forEach((segment, index) => {
      segment.addEventListener("mouseenter", () => {
        this.handleHover(index + 1);
      });
    });

    // Add hover events to the entire showcase for better UX
    const showcase = document.querySelector(".circle-showcase");
    if (showcase) {
      showcase.addEventListener("mouseleave", () => {
        this.handleShowcaseLeave();
      });
    }
  }

  handleHover(productId) {
    if (this.isAnimating) {
      return;
    }

    this.isAnimating = true;
    this.isHovering = true;
    this.currentProduct = productId;

    // Product items removed - no need to manage active states

    // Show the corresponding description
    this.showDescription(productId);
    this.circleContainer.classList.add("hovered");
    this.descriptionPanel.classList.add("visible");

    // Reset animation flag after transition
    setTimeout(() => {
      this.isAnimating = false;
    }, 500);
  }

  handleShowcaseLeave() {
    if (!this.isHovering) return;

    this.isHovering = false;
    this.currentProduct = null;

    // Product items removed - no active states to manage

    // Hide description panel
    this.circleContainer.classList.remove("hovered");
    this.descriptionPanel.classList.remove("visible");
  }

  showDescription(productId) {
    // Find current active description
    const currentActive = document.querySelector(".description-content.active");

    // Find target description
    const targetDescription = document.querySelector(
      `.description-content[data-product="${productId}"]`
    );

    if (targetDescription) {
      // If there's a current active description, fade it out first
      if (currentActive && currentActive !== targetDescription) {
        currentActive.classList.add("fade-out");

        // After fade out completes, switch to new description
        setTimeout(() => {
          // Remove active and fade-out from all descriptions
          this.descriptionContents.forEach((content) => {
            content.classList.remove("active", "fade-out");
          });
          targetDescription.classList.add("active");

          // Add a subtle shake animation to draw attention
          targetDescription.style.animation =
            "slideInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1)";

          setTimeout(() => {
            targetDescription.style.animation = "";
          }, 600);
        }, 300);
      } else {
        // No current active, show immediately
        this.descriptionContents.forEach((content) => {
          content.classList.remove("active", "fade-out");
        });
        targetDescription.classList.add("active");
      }
    }
  }

  setupResponsive() {
    // Ensure all descriptions are hidden first
    this.descriptionContents.forEach((content) => {
      content.classList.remove("active");
    });

    // Show first description by default after a small delay
    setTimeout(() => {
      if (this.descriptionContents[0]) {
        this.descriptionContents[0].classList.add("active");
      }
    }, 100);

    // Handle responsive behavior
    const handleResize = () => {
      const isMobile = window.innerWidth <= 1200;
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call once on init
  }

  // Method to programmatically show a product (for future enhancements)
  showProduct(productId) {
    this.showDescription(productId);
    this.currentProduct = productId;
  }
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  const interactiveCircle = new InteractiveCircle();
  interactiveCircle.init();
});

// Export for potential future use
if (typeof module !== "undefined" && module.exports) {
  module.exports = InteractiveCircle;
}
