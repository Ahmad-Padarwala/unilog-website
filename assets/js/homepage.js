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
      img: "./assets/image/product/Alicesuperbubblemax/1.webp",
      title: "Alice super bubble max",
      desc: "Get deep into the pores and take away dirt with shiny and beautiful results.",
      imageDesc: "Best premium HydraFacial device. Ultimate anti-aging treatment, superior exfoliation, and advanced skin brightening. Experience a truly results-oriented facial machine.",
      link: "machine/medi-facial/Alicesuperbubblemax.html"
    },
    {
      img: "./assets/image/product/HydraluxeAquastar/hydralux-1.webp",
      title: "Hydraluxe Aquastar",
      desc: "Advanced analyzer and probes for a radiant, healthy glow.",
      imageDesc: "Best Pico + diode laser, Pico + diode supplier, best combination laser device, pico + diode machine with best results, best tattoo removal, carbon facial, hair removal device.",
      link: "machine/medi-facial/HydraluxeAquastar.html"
    },
    {
      img: "./assets/image/product/OxyrichPDT/pdt.webp",
      title: "Oxyrich PDT+",
      desc: "Premium hydra facial device with analyzer and oxygen dome.",
      imageDesc: "Best Q switch Nd:Yag laser, best FDA approved Q switch Nd:Yag, premium Q switch Nd:Yag laser for pigmentation removal, best laser for tattoo removal.",
      link: "machine/medi-facial/OxyrichPDT.html"
    },
    {
      img: "./assets/image/product/luma3000/luma-3000.webp",
      title: "LUMA 3000",
      desc: "Unleash powerful, permanent results; this is next-level diode laser technology.",
      imageDesc: "LUMA 3000 is powerful 3000W diode laser system which works 40% more faster for hair reduction system. LUMA 3000 helps in achieving skin confidence with its advance 4 wavelength technology.",
      link: "machine/hair-reduction/luma3000.html"
    },
    {
      img: "./assets/image/product/luma2000/luma-2000.webp",
      title: "LUMA 2000",
      desc: "LUMA 2000- High quality android-based Diode laser system.",
      imageDesc: "LUMA 2000 has 4 wavelengths (755nm+810nm+ 980nm+ 1064nm ) that works together for safe & comfortable hair reduction system. LUMA 2000 has multiple attachement, perfect choice for full body hair reduction treatment.",
      link: "machine/hair-reduction/luma2000.html"
    },
    {
      img: "./assets/image/product/4Dteclaserdevice/4dteclaser.webp",
      title: "4DTECLASER",
      desc: "Advanced 4-wavelength diode laser for all skin and hair types.",
      imageDesc: "Best 4 wavelength diode laser device, best FDA approved laser device, best 1200W diode laser, best laser for hair removal treatment, painless device for hair removal treatment.",
      link: "machine/hair-reduction/4Dteclaserdevice.html"
    },
    {
      img: "./assets/image/product/Ice1200diodelaserdevice/Ice1200diodelaserdevice-1.webp",
      title: "ICE 1200",
      desc: "USFDA-approved 4-wavelength diode laser for safe, effective hair reduction.",
      imageDesc: "Best Cryolipolysis device, safest cryolipolysis device, fastest cryolipolysis device, best cooling cryolipolysis device, premium result oriented cryolipolysis device, best fat reduction device.",
      link: "machine/hair-reduction/Ice1200diodelaserdevice.html"
    },
    {
      img: "./assets/image/product/EpiliteHP/epilite.webp",
      title: "Epilite HP",
      desc: "Premium USFDA-approved 4-wavelength diode laser.",
      imageDesc: "Best 60W CO2 fractional laser, best laser for acne scars, best laser for vaginal tightening, best CO2 fractional laser, high quality CO2 fractional laser.",
      link: "machine/hair-reduction/EpiliteHP.html"
    },
    {
      img: "./assets/image/product/lumaspot/lumaspot.webp",
      title: "LUMASPOT",
      desc: "Picosecond laser works on 4 operational modes for better results.",
      imageDesc: " LUMASPOT is active Q switch Nd:Yag laser system with most advance technology with very short pulse width and high power. LUMASPOT is best Picosecond laser works on 4 operational modes for better results.",
      link: "machine/yag-laser/lumaspot.html"
    },
    {
      img: "./assets/image/product/picofocus/picofocus.webp",
      title: "PICOFOCUS",
      desc: "Top powerful technology for pigment and tattoo removal treatment.",
      imageDesc: " Picofocus laser works on picosecond technology that works 100 times faster than traditional nanosecond technology, as a result, the Picofocus laser system breaks up tattoos faster than traditional laser. Picofocus laser will shatter even tiny ink particles making it easier for the body to clear the tattoo ink.",
      link: "machine/yag-laser/picofocus.html"
    },
    {
      img: "./assets/image/product/picofocus/picofocus.webp",
      title: "RUIKD GENELUX LASER",
      desc: "all pigment removal and tattoo removal treatment with 2 wavelengths.",
      imageDesc: "Ruikd Genelux Pico Laser is a cutting-edge aesthetic machine designed to provide a wide range of skin treatments with enhanced precision and minimal discomfort. Utilizing advanced Q-switched ND:YAG Laser technology.",
      link: "machine/yag-laser/ruikd_genelux.html"
    },
  ],
  product: [
    {
      img: "./assets/image/skincare-product/aa-complex.webp",
      title: "AA Complex",
      desc: "Exosomes powered black peel for the management of Grade I-IV Acne.",
      imageDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      link: "product.html"
    },
    {
      img: "./assets/image/skincare-product/acnepeel.webp",
      title: "Acnepeel Exo",
      desc: "Exosomes powered black peel for the management of Grade I-IV Acne.",
      imageDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      link: "product2.html"
    },
    {
      img: "./assets/image/skincare-product/epidew.webp",
      title: "Epidew",
      desc: "Intense Hydrating Biomimic Skin Booster.",
      imageDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      link: "product.html"
    },
    {
      img: "./assets/image/skincare-product/scalpon.webp",
      title: "Scalpon",
      desc: "Advanced Liposomal Hair Growth Modulator.",
      imageDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      link: "product2.html"
    }
  ]
};
function renderProducts(items) {
  productWrapper.innerHTML = "";
  items.forEach(item => {
    const slide = document.createElement("div");
    slide.className = "swiper-slide";
    slide.innerHTML = `
            <article class="product-card" itemscope itemtype="https://schema.org/Product">
                <a href="${item.link}" class="product-link" aria-label="View ${item.title} details">
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
                </a>
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

const particlesContainer = document.getElementById('particles-container');
const particleCount = 80;

for (let i = 0; i < particleCount; i++) {
  createParticle();
}

function createParticle() {
  const particle = document.createElement('div');
  particle.className = 'particle';
  const size = Math.random() * 3 + 1;
  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;
  resetParticle(particle);
  particlesContainer.appendChild(particle);
  animateParticle(particle);
}

function resetParticle(particle) {
  const posX = Math.random() * 100;
  const posY = Math.random() * 100;
  particle.style.left = `${posX}%`;
  particle.style.top = `${posY}%`;
  particle.style.opacity = '0';
  return { x: posX, y: posY };
}

function animateParticle(particle) {
  const pos = resetParticle(particle);
  const duration = Math.random() * 10 + 10;
  const delay = Math.random() * 5;
  setTimeout(() => {
    particle.style.transition = `all ${duration}s linear`;
    particle.style.opacity = Math.random() * 0.3 + 0.1;
    const moveX = pos.x + (Math.random() * 20 - 10);
    const moveY = pos.y - Math.random() * 30;
    particle.style.left = `${moveX}%`;
    particle.style.top = `${moveY}%`;
    setTimeout(() => animateParticle(particle), duration * 1000);
  }, delay * 1000);
}

document.addEventListener('mousemove', (e) => {
  const mouseX = (e.clientX / window.innerWidth) * 100;
  const mouseY = (e.clientY / window.innerHeight) * 100;
  const particle = document.createElement('div');
  particle.className = 'particle';
  const size = Math.random() * 4 + 2;
  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;
  particle.style.left = `${mouseX}%`;
  particle.style.top = `${mouseY}%`;
  particle.style.opacity = '0.6';
  particlesContainer.appendChild(particle);
  setTimeout(() => {
    particle.style.transition = 'all 2s ease-out';
    particle.style.left = `${mouseX + (Math.random() * 10 - 5)}%`;
    particle.style.top = `${mouseY + (Math.random() * 10 - 5)}%`;
    particle.style.opacity = '0';
    setTimeout(() => particle.remove(), 2000);
  }, 10);
});


class InteractiveCircle {
  constructor() {
    this.circleContainer = document.querySelector(".circle-container");
    this.descriptionPanel = document.querySelector(".description-panel");
    this.segments = document.querySelectorAll(".segment");
    this.shapes = document.querySelectorAll(".shape");
    this.descriptionContents = document.querySelectorAll(".description-content");
    this.isAnimating = false;
    this.currentProduct = null;
    this.isHovering = false;
    this.hoverTimeout = null;
    this.leaveTimeout = null;
  }

  init() {
    if (!this.circleContainer || !this.descriptionPanel || !this.segments.length) {
      return;
    }
    this.bindEvents();
    this.setupResponsive();
    this.createHoverAreas();
  }

  createHoverAreas() {
    // Create invisible hover areas that are larger than the segments for better UX
    this.segments.forEach((segment, index) => {
      const hoverArea = document.createElement('div');
      hoverArea.className = `hover-area hover-area-${index + 1}`;
      hoverArea.style.cssText = `
        position: absolute;
        width: 120px;
        height: 120px;
        border-radius: 50%;
        z-index: 10;
        cursor: pointer;
        transition: all 0.3s ease;
      `;
      
      // Position hover areas based on segment positions
      const positions = [
        { top: '15%', left: '65%' }, // segment-1
        { top: '45%', right: '15%' }, // segment-2  
        { top: '70%', left: '40%' },  // segment-3
        { top: '45%', left: '15%' },  // segment-4
        { top: '15%', left: '25%' }   // segment-5
      ];
      
      const pos = positions[index];
      Object.assign(hoverArea.style, pos);
      hoverArea.style.transform = 'translate(-50%, -50%)';
      
      this.circleContainer.appendChild(hoverArea);
      
      // Add hover events to the larger areas
      hoverArea.addEventListener('mouseenter', (e) => {
        e.stopPropagation();
        this.handleHover(index + 1);
      });
      
      hoverArea.addEventListener('mouseleave', (e) => {
        e.stopPropagation();
        this.handleHoverLeave();
      });
    });
  }

  bindEvents() {
    // Enhanced hover events for SVG segments
    this.segments.forEach((segment, index) => {
      segment.style.cursor = 'pointer';
      
      segment.addEventListener("mouseenter", (e) => {
        e.stopPropagation();
        this.handleHover(index + 1);
      });
      
      segment.addEventListener("mouseleave", (e) => {
        e.stopPropagation();
        this.handleHoverLeave();
      });
    });

    // Add hover events to shape labels as well
    this.shapes.forEach((shape, index) => {
      shape.style.cursor = 'pointer';
      shape.style.zIndex = '15';
      
      shape.addEventListener("mouseenter", (e) => {
        e.stopPropagation();
        this.handleHover(index + 1);
      });
      
      shape.addEventListener("mouseleave", (e) => {
        e.stopPropagation();
        this.handleHoverLeave();
      });
    });

    // Add hover events to the entire circle container
    this.circleContainer.addEventListener("mouseleave", () => {
      this.handleShowcaseLeave();
    });

    // Add hover events to description panel to keep it visible
    this.descriptionPanel.addEventListener("mouseenter", () => {
      this.clearTimeouts();
      this.isHovering = true;
    });

    this.descriptionPanel.addEventListener("mouseleave", () => {
      this.handleShowcaseLeave();
    });

    // Add click events for mobile/touch devices
    this.segments.forEach((segment, index) => {
      segment.addEventListener("click", (e) => {
        e.preventDefault();
        this.handleHover(index + 1);
      });
    });

    this.shapes.forEach((shape, index) => {
      shape.addEventListener("click", (e) => {
        e.preventDefault();
        this.handleHover(index + 1);
      });
    });
  }

  clearTimeouts() {
    if (this.hoverTimeout) {
      clearTimeout(this.hoverTimeout);
      this.hoverTimeout = null;
    }
    if (this.leaveTimeout) {
      clearTimeout(this.leaveTimeout);
      this.leaveTimeout = null;
    }
  }

  handleHover(productId) {
    this.clearTimeouts();
    
    // Debounce rapid hover events
    this.hoverTimeout = setTimeout(() => {
      if (this.currentProduct === productId && this.isHovering) {
        return; // Already showing this product
      }

      this.isHovering = true;
      this.currentProduct = productId;

      // Add visual feedback to the hovered segment
      this.segments.forEach((segment, index) => {
        segment.classList.toggle('segment-hovered', index + 1 === productId);
      });

      this.shapes.forEach((shape, index) => {
        shape.classList.toggle('shape-hovered', index + 1 === productId);
      });

      // Show the corresponding description
      this.showDescription(productId);
      this.circleContainer.classList.add("hovered");
      this.descriptionPanel.classList.add("visible");
    }, 50); // Small debounce delay
  }

  handleHoverLeave() {
    this.clearTimeouts();
    
    // Add a small delay before hiding to prevent flickering
    this.leaveTimeout = setTimeout(() => {
      if (!this.isHovering) return;
      this.handleShowcaseLeave();
    }, 100);
  }

  handleShowcaseLeave() {
    this.clearTimeouts();
    
    this.isHovering = false;
    this.currentProduct = null;

    // Remove visual feedback from all segments
    this.segments.forEach(segment => {
      segment.classList.remove('segment-hovered');
    });

    this.shapes.forEach(shape => {
      shape.classList.remove('shape-hovered');
    });

    // Hide description panel with delay
    this.leaveTimeout = setTimeout(() => {
      this.circleContainer.classList.remove("hovered");
      this.descriptionPanel.classList.remove("visible");
      
      // Reset to first description after hiding
      setTimeout(() => {
        if (!this.isHovering) {
          this.showDescription(1);
        }
      }, 300);
    }, 200);
  }

  showDescription(productId) {
    if (this.isAnimating) return;
    
    this.isAnimating = true;
    
    // Find current active description
    const currentActive = document.querySelector(".description-content.active");
    
    // Find target description
    const targetDescription = document.querySelector(
      `.description-content[data-product="${productId}"]`
    );

    if (targetDescription && targetDescription !== currentActive) {
      // If there's a current active description, fade it out first
      if (currentActive) {
        currentActive.classList.add("fade-out");

        // After fade out completes, switch to new description
        setTimeout(() => {
          // Remove active and fade-out from all descriptions
          this.descriptionContents.forEach((content) => {
            content.classList.remove("active", "fade-out");
          });
          
          targetDescription.classList.add("active");

          // Reset animation flag
          setTimeout(() => {
            this.isAnimating = false;
          }, 100);
        }, 200);
      } else {
        // No current active, show immediately
        this.descriptionContents.forEach((content) => {
          content.classList.remove("active", "fade-out");
        });
        targetDescription.classList.add("active");
        
        setTimeout(() => {
          this.isAnimating = false;
        }, 100);
      }
    } else {
      this.isAnimating = false;
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

    // Handle responsive behavior with throttling
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        const isMobile = window.innerWidth <= 1200;
        
        // On mobile, always show description panel
        if (isMobile) {
          this.descriptionPanel.classList.add("visible");
        } else {
          // Reset hover state on desktop
          if (!this.isHovering) {
            this.descriptionPanel.classList.remove("visible");
          }
        }
      }, 100);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call once on init
  }

  // Method to programmatically show a product (for future enhancements)
  showProduct(productId) {
    this.handleHover(productId);
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
