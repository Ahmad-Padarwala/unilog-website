// Skincare Products Data and Functionality - Matching machine-product.html exactly
document.addEventListener('DOMContentLoaded', function () {
    // Product data
    const products = [
        {
            id: 1,
            name: "AA Complex",
            category: "home-care",
            price: "premium",
            image: "./assets/image/unilog-exclusive/aa-complex/aa-complex-bottel.webp",
            description: "Innovative repairing, brightening & age reversing complex for comprehensive skin care and anti-aging treatments.",
            link: "/unilog-exclusive/aa-complex.html"
        },
        {
            id: 2,
            name: "Epidew",
            category: "home-care",
            price: "mid-range",
            image: "./assets/image/unilog-exclusive/epidew/epidew-tube.webp",
            description: "Intense Hydrating Biomimic Skin Booster for deep hydration and skin rejuvenation with advanced technology.",
            link: "/unilog-exclusive/epidew.html"
        },
        {
            id: 3,
            name: "Scalpon",
            category: "home-care",
            price: "premium",
            image: "./assets/image/unilog-exclusive/scalpon/scalpon-bottel.webp",
            description: "Advanced Liposomal Hair Growth Modulator for effective hair restoration therapy and scalp treatment.",
            link: "/unilog-exclusive/scalpon.html"
        },
        {
            id: 4,
            name: "Liteon 01-02-03",
            category: "liteon",
            price: "premium",
            image: "./assets/image/unilog-exclusive/liteon/liteon-box.webp",
            description: "Advanced Liposomal Hair Growth Modulator for effective hair restoration therapy and scalp treatment.",
            link: "/unilog-exclusive/liteon.html"
        },
        {
            id: 5,
            name: "Retipeel Exo",
            category: "chemical-peels",
            price: "premium",
            image: "./assets/image/unilog-exclusive/retipeel-exo/retipeel-product.webp",
            description: "Advanced Liposomal Hair Growth Modulator for effective hair restoration therapy and scalp treatment.",
            link: "/unilog-exclusive/retipeel-exo.html"
        },
        {
            id: 6,
            name: "Acnepeel Exo",
            category: "chemical-peels",
            price: "premium",
            image: "./assets/image/unilog-exclusive/acnepeel-exo/acnepeel-bottel.webp",
            description: "India's first black peel with triple exosomes in highly stable gel form for Grade I-IV acne management.",
            link: "/unilog-exclusive/acnepeel-exo.html"
        },
        {
            id: 7,
            name: "Dark Circle Peel",
            category: "chemical-peels",
            image: "./assets/image/chemical-peels/dark-circle-peel/dark-circle.webp",
            description: "Reduces under-eye pigmentation, puffiness, and fine lines.",
            link: "./assets/image/chemical-peels/dark-circle-peel/dark-circle.pdf"
        },
        {
            id: 8,
            name: "Glycolic Peel 30%",
            category: "chemical-peels",
            image: "./assets/image/chemical-peels/glycolic-peel-30/glycolic-30.webp",
            description: "Targets mild acne and early signs of pigmentation.",
            link: "./assets/image/chemical-peels/glycolic-peel-30/glycolic-peel-30.pdf"
        },
        {
            id: 9,
            name: "TCA",
            category: "chemical-peels",
            image: "./assets/image/chemical-peels/tca/tca-25.webp",
            description: "Remediation for deep pigmentation and acne scars.",
            link: "./assets/image/chemical-peels/tca/tca.pdf"
        },
        {
            id: 10,
            name: "Glycolic 25% Peel",
            category: "chemical-peels",
            image: "./assets/image/chemical-peels/glycolic-25/glycolic-25.webp",
            description: "Treats dullness and mild pigmentation for dry skin.",
            link: "./assets/image/chemical-peels/glycolic-25/glycolic-25.pdf"
        },
        {
            id: 11,
            name: "Glycolic 35% Peel",
            category: "chemical-peels",
            image: "./assets/image/chemical-peels/glycolic-35/glycolic-35.webp",
            description: "Corrects stubborn pigmentation and mild acne-related scarring.",
            link: "./assets/image/chemical-peels/glycolic-35/glycolic-35.pdf"
        },
        {
            id: 12,
            name: "Salicylic 15% Peel",
            category: "chemical-peels",
            image: "./assets/image/chemical-peels/salicylic-15/salicylic-15.webp",
            description: "Improves rough skin texture and manages oily skin.",
            link: "./assets/image/chemical-peels/salicylic-15/salicylic-15.pdf"
        },
        {
            id: 13,
            name: "Salicylic 25% Peel",
            category: "chemical-peels",
            image: "./assets/image/chemical-peels/salicylic-25/salicylic-25.webp",
            description: "Addresses moderate acne and persistent post-acne marks.",
            link: "./assets/image/chemical-peels/salicylic-25/salicylic-25.pdf"
        },
        {
            id: 14,
            name: "Salicylic 30% Peel",
            category: "chemical-peels",
            image: "./assets/image/chemical-peels/salicylic-30/salicylic-30.webp",
            description: "Designed for severe acne and seborrheic skin conditions.",
            link: "./assets/image/chemical-peels/salicylic-30/salicylic-30.pdf"
        },
        {
            id: 15,
            name: "Salicylic 20% Mandelic 10%",
            category: "chemical-peels",
            image: "./assets/image/chemical-peels/salicylic-20/salicylic-20.webp",
            description: "Combats active acne and post-inflammatory hyperpigmentation concerns.",
            link: "./assets/image/chemical-peels/salicylic-20/salicylic-20.pdf"
        },
        {
            id: 16,
            name: "Pyruvic Green Peel",
            category: "chemical-peels",
            image: "./assets/image/chemical-peels/pyruvic/pyruvic.webp",
            description: "Provides anti-aging support for oily, acne-prone skin.",
            link: "./assets/image/chemical-peels/pyruvic/pyruvic.pdf"
        },
        {
            id: 17,
            name: "Jessner Peel",
            category: "chemical-peels",
            image: "./assets/image/chemical-peels/jessner/jessner.webp",
            description: "Rejuvenates skin by addressing melasma and fine lines.",
            link: "./assets/image/chemical-peels/jessner/jessner.pdf"
        },
        {
            id: 18,
            name: "Party Peel",
            category: "chemical-peels",
            image: "./assets/image/chemical-peels/party/party.webp",
            description: "Delivers instant glow and pre-event skin radiance.",
            link: "./assets/image/chemical-peels/party/party.pdf"
        },
        {
            id: 19,
            name: "Vitamin C Peel",
            category: "chemical-peels",
            image: "./assets/image/chemical-peels/vitamin-c/vitamin-c.webp",
            description: "Enhances skin brightness with potent antioxidant support.",
            link: "./assets/image/chemical-peels/vitamin-c/vitamin-c.pdf"
        },
        {
            id: 20,
            name: "Arginine Peel",
            category: "chemical-peels",
            image: "./assets/image/chemical-peels/arginine/arginine.webp",
            description: "Provides gentle anti-aging care for sensitive skin types.",
            link: "./assets/image/chemical-peels/arginine/arginine.pdf"
        },
        {
            id: 21,
            name: "Ferulic Peel",
            category: "chemical-peels",
            image: "./assets/image/chemical-peels/ferulic/ferulic.webp",
            description: "Protects against photoaging while improving overall brightness.",
            link: "./assets/image/chemical-peels/ferulic/ferulic.pdf"
        },
        {
            id: 22,
            name: "Glycolic/Kojic/Hydroquinone",
            category: "chemical-peels",
            image: "./assets/image/chemical-peels/glycolic-kojic-hydroquinone/glycolic-kojic-hydroquinone.webp",
            description: "Treats melasma and significant hyperpigmentation effectively.",
            link: "./assets/image/chemical-peels/glycolic-kojic-hydroquinone/glycolic-kojic-hydroquinone.pdf"
        },
        {
            id: 23,
            name: "Lactic Cocktail Peel 70%",
            category: "chemical-peels",
            image: "./assets/image/chemical-peels/lactic-cocktail/lactic-cocktail.webp",
            description: "Hydrates dry skin while correcting uneven skin tone.",
            link: "./assets/image/chemical-peels/lactic-cocktail/lactic-cocktail.pdf"
        },
    ];

    // Initialize the page
    init();

    function init() {
        renderProducts(products);
        setupEventListeners();
        updateResultsCount(products.length);
    }

    function setupEventListeners() {
        // Search functionality
        const searchInput = document.getElementById('productSearch');
        const searchBtn = document.getElementById('searchBtn');

        if (searchInput) {
            searchInput.addEventListener('input', handleSearchInput);
            searchInput.addEventListener('focus', showSearchSuggestions);
            searchInput.addEventListener('blur', hideSearchSuggestions);
        }

        if (searchBtn) {
            searchBtn.addEventListener('click', performSearch);
        }

        // Filter tab functionality
        const filterTabs = document.querySelectorAll('.filter-tab');
        filterTabs.forEach(tab => {
            tab.addEventListener('click', function () {
                const category = this.dataset.category;
                setActiveTab(this);
                filterByCategory(category);
            });
        });

        // Clear filters
        const clearFiltersBtn = document.getElementById('clearFilters');
        if (clearFiltersBtn) {
            clearFiltersBtn.addEventListener('click', clearAllFilters);
        }

        // Search suggestions
        document.addEventListener('click', function (e) {
            if (!e.target.closest('.search-container')) {
                hideSearchSuggestions();
            }
        });
    }

    function handleSearchInput(e) {
        const searchTerm = e.target.value.toLowerCase();
        if (searchTerm.length > 0) {
            generateSearchSuggestions(searchTerm);
            showSearchSuggestions();
        } else {
            hideSearchSuggestions();
        }
        filterProducts();
    }

    function generateSearchSuggestions(searchTerm) {
        const suggestions = new Set();

        products.forEach(product => {
            // Add product name if it matches
            if (product.name.toLowerCase().includes(searchTerm)) {
                suggestions.add(product.name);
            }

            // Add category if it matches
            const categoryLabel = getCategoryLabel(product.category);
            if (categoryLabel.toLowerCase().includes(searchTerm)) {
                suggestions.add(categoryLabel);
            }
        });

        displaySearchSuggestions(Array.from(suggestions).slice(0, 5));
    }

    function displaySearchSuggestions(suggestions) {
        const suggestionsContainer = document.getElementById('searchSuggestions');

        if (suggestions.length === 0) {
            suggestionsContainer.innerHTML = '';
            return;
        }

        suggestionsContainer.innerHTML = suggestions.map(suggestion =>
            `<div class="suggestion-item" onclick="selectSuggestion('${suggestion}')">${suggestion}</div>`
        ).join('');
    }

    function selectSuggestion(suggestion) {
        document.getElementById('productSearch').value = suggestion;
        hideSearchSuggestions();
        filterProducts();
    }

    function showSearchSuggestions() {
        const suggestionsContainer = document.getElementById('searchSuggestions');
        if (suggestionsContainer.innerHTML.trim() !== '') {
            suggestionsContainer.classList.add('show');
        }
    }

    function hideSearchSuggestions() {
        setTimeout(() => {
            document.getElementById('searchSuggestions').classList.remove('show');
        }, 200);
    }

    function performSearch() {
        filterProducts();
        hideSearchSuggestions();
    }

    function setActiveTab(activeTab) {
        document.querySelectorAll('.filter-tab').forEach(tab => {
            tab.classList.remove('active');
        });
        activeTab.classList.add('active');
    }

    function filterByCategory(category) {
        const filteredProducts = category === 'all'
            ? products
            : products.filter(product => product.category === category);

        renderProducts(filteredProducts);
        updateResultsCount(filteredProducts.length);
    }

    function renderProducts(productsToRender) {
        const grid = document.getElementById('productsGrid');
        grid.innerHTML = '';

        if (productsToRender.length === 0) {
            showEmptyState();
            return;
        }

        productsToRender.forEach((product, index) => {
            const productCard = createProductCard(product);
            productCard.style.animationDelay = `${index * 0.1}s`;
            grid.appendChild(productCard);
        });
    }

    function showEmptyState() {
        const grid = document.getElementById('productsGrid');
        grid.innerHTML = `
            <div class="empty-state" style="grid-column: 1 / -1;">
                <i class="fas fa-search"></i>
                <h3>No products found</h3>
                <p>Try adjusting your search criteria or browse all categories to find what you're looking for.</p>
            </div>
        `;
    }

    function createProductCard(product) {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.setAttribute('data-category', product.category);
        card.setAttribute('data-name', product.name.toLowerCase());

        card.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
            </div>
            <div class="product-info">
                <div class="product-category">${getCategoryLabel(product.category)}</div>
                <h3>${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-footer">
                    <a href="${product.link}" class="view-more-btn">View Details</a>
                </div>
            </div>
        `;

        return card;
    }

    function getCategoryLabel(category) {
        const labels = {
            'chemical-peels': 'Chemical Peels',
            'skin-boosters': 'Skin Boosters',
            'hair-growth': 'Hair Growth'
        };
        return labels[category] || category;
    }

    function filterProducts() {
        const searchTerm = document.getElementById('productSearch').value.toLowerCase();
        const activeTab = document.querySelector('.filter-tab.active');
        const categoryFilter = activeTab ? activeTab.dataset.category : 'all';

        const filteredProducts = products.filter(product => {
            const matchesSearch = searchTerm === '' ||
                product.name.toLowerCase().includes(searchTerm) ||
                product.description.toLowerCase().includes(searchTerm) ||
                getCategoryLabel(product.category).toLowerCase().includes(searchTerm);

            const matchesCategory = categoryFilter === 'all' || product.category === categoryFilter;

            return matchesSearch && matchesCategory;
        });

        renderProducts(filteredProducts);
        updateResultsCount(filteredProducts.length);
    }

    function clearAllFilters() {
        // Reset search input
        const searchInput = document.getElementById('productSearch');
        if (searchInput) {
            searchInput.value = '';
        }

        // Reset to "All Products" tab
        document.querySelectorAll('.filter-tab').forEach(tab => {
            tab.classList.remove('active');
        });
        const allTab = document.querySelector('.filter-tab[data-category="all"]');
        if (allTab) {
            allTab.classList.add('active');
        }

        // Hide search suggestions
        hideSearchSuggestions();

        // Render all products
        renderProducts(products);
        updateResultsCount(products.length);
    }

    function updateResultsCount(count) {
        const resultsText = document.querySelector('.results-text');
        if (resultsText) {
            resultsText.textContent = `${count} products found`;
        }
    }

    // Make selectSuggestion available globally
    window.selectSuggestion = selectSuggestion;
});