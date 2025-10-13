// Product Listing Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    
    // ===== CATEGORY FILTERING ===== //
    const filterButtons = document.querySelectorAll('.filter-btn');
    const categorySection = document.querySelectorAll('.category-section');
    
    // Filter functionality
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter categories
            categorySection.forEach(section => {
                const sectionCategory = section.getAttribute('data-category');
                
                if (category === 'all' || category === sectionCategory) {
                    section.classList.remove('hidden');
                    section.classList.add('visible');
                } else {
                    section.classList.add('hidden');
                    section.classList.remove('visible');
                }
            });
            
            // Smooth scroll to products grid
            document.querySelector('.products-grid').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
    
    // ===== SCROLL ANIMATIONS ===== //
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.product-card, .category-title, .hero-content, .cta-content');
    animatedElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
    
    // ===== PRODUCT CARD INTERACTIONS ===== //
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        // Add hover sound effect (optional)
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
        
        // Add click tracking (for analytics)
        card.addEventListener('click', function(e) {
            const productName = this.querySelector('h3').textContent;
            console.log(`Product clicked: ${productName}`);
            
            // You can add analytics tracking here
            // gtag('event', 'product_click', {
            //     'product_name': productName,
            //     'category': this.closest('.category-section').getAttribute('data-category')
            // });
        });
    });
    

    // ===== LAZY LOADING FOR IMAGES ===== //
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            }
        });
    });
    
    // Observe all product images
    const productImages = document.querySelectorAll('.product-image img');
    productImages.forEach(img => {
        imageObserver.observe(img);
    });
    
    // ===== RESPONSIVE NAVIGATION ===== //
    function handleResponsiveNavigation() {
        const screenWidth = window.innerWidth;
        const filterButtons = document.querySelector('.filter-buttons');
        
        if (screenWidth <= 768) {
            // Mobile: Stack filter buttons
            filterButtons.style.flexDirection = 'column';
            filterButtons.style.alignItems = 'center';
        } else {
            // Desktop: Horizontal layout
            filterButtons.style.flexDirection = 'row';
            filterButtons.style.alignItems = 'center';
        }
    }
    
    // Initialize responsive navigation
    handleResponsiveNavigation();
    window.addEventListener('resize', handleResponsiveNavigation);
    
    // ===== SMOOTH SCROLLING FOR ANCHOR LINKS ===== //
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // ===== PERFORMANCE OPTIMIZATIONS ===== //
    
    // Debounce function for resize events
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    // Optimized resize handler
    const optimizedResize = debounce(handleResponsiveNavigation, 250);
    window.addEventListener('resize', optimizedResize);
    
    // ===== ACCESSIBILITY ENHANCEMENTS ===== //
    
    // Add keyboard navigation for filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
    
    // Add ARIA labels for better screen reader support
    productCards.forEach((card, index) => {
        card.setAttribute('role', 'article');
        card.setAttribute('aria-label', `Product ${index + 1}`);
        
        const productLink = card.querySelector('.product-btn');
        if (productLink) {
            productLink.setAttribute('aria-describedby', `product-desc-${index}`);
            card.querySelector('p').setAttribute('id', `product-desc-${index}`);
        }
    });
    
    // ===== LOADING STATES ===== //
    
    // Add loading animation for filter transitions
    function showLoadingState() {
        const productsGrid = document.querySelector('.products-grid');
        productsGrid.style.opacity = '0.5';
        productsGrid.style.pointerEvents = 'none';
        
        setTimeout(() => {
            productsGrid.style.opacity = '1';
            productsGrid.style.pointerEvents = 'auto';
        }, 300);
    }
    
    // Apply loading state to filter buttons
    filterButtons.forEach(button => {
        const originalClickHandler = button.onclick;
        button.addEventListener('click', function() {
            showLoadingState();
        });
    });
    
    // ===== ANALYTICS TRACKING ===== //
    
    // Track page view
    console.log('Product listing page loaded');
    
    // Track filter usage
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            console.log(`Filter applied: ${category}`);
            
            // You can add Google Analytics or other tracking here
            // gtag('event', 'filter_products', {
            //     'category': category
            // });
        });
    });
    
    // ===== INITIALIZATION COMPLETE ===== //
    console.log('Product listing functionality initialized');
});

// ===== UTILITY FUNCTIONS ===== //

// Function to get product data (for future API integration)
function getProductData() {
    return {
        'medi-facial': [
            {
                name: 'Alice Super Bubble Max',
                description: 'Deep cleansing skin system with advanced bubble technology',
                features: ['8 Technologies', 'Painless', 'No Downtime'],
                image: './image/hero-machine-1.webp',
                link: './Alicesuperbubblemax.html'
            },
            // Add more products...
        ],
        'laser-hair': [
            {
                name: '4Dtec Laser Device',
                description: 'Advanced diode laser hair reduction system',
                features: ['4 Wavelengths', 'All Skin Types', 'Advanced'],
                image: './image/hero-machine-2.webp',
                link: './4Dteclaserdevice.html'
            },
            // Add more products...
        ]
        // Add more categories...
    };
}

// Function to dynamically generate product cards (for future use)
function generateProductCard(product) {
    return `
        <div class="product-card fade-in">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
                <div class="product-overlay">
                    <a href="${product.link}" class="view-product">View Details</a>
                </div>
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <div class="product-features">
                    ${product.features.map(feature => `<span class="feature-tag">${feature}</span>`).join('')}
                </div>
                <a href="${product.link}" class="product-btn">Learn More</a>
            </div>
        </div>
    `;
}

// Export functions for potential module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        getProductData,
        generateProductCard
    };
}