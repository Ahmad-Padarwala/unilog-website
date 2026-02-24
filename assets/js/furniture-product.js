// Skincare Products Data and Functionality - Matching machine-product.html exactly
document.addEventListener('DOMContentLoaded', function () {
    // Product data
    const products = [
        {
            id: 1,
            name: "Electric Derma Chair",
            category: "electric-derma-chair",
            price: "mid-range",
            image: "./assets/image/product/electric-derma-chair/electric-derma-chair-1.webp",
            description: "Electric Derma Bed offers ultimate precision and comfort, featuring independent motorized",
            link: "./machine/electric-derma-chair/electric-derma-chair.html"
        },
        {
            id: 2,
            name: "Electric Derma Chair With Pillow",
            category: "electric-derma-chair",
            price: "mid-range",
            image: "./assets/image/product/electric-derma-chair-with-pillow/electric-derma-chair-with-pillow-1.webp",
            description: "Electric Derma Bed With Pillow offers ultimate precision and comfort, featuring independent motorized",
            link: "./machine/electric-derma-chair/electric-derma-chair-with-pillow.html"
        },
        {
            id: 3,
            name: "Derma Chair Rest",
            category: "premium-electric-derma-chair",
            price: "mid-range",
            image: "./assets/image/product/derma-rest-chair/derma-rest-chair-1.webp",
            description: "Derma chair rest is designed with a variety of adjustable functions, including height, tilt angle, and the position of the legs & head.",
            link: "./machine/premium-derma-chair/derma-chair-rest.html"
        },
        {
            id: 4,
            name: "Derma Chair Elite",
            category: "premium-electric-derma-chair",
            price: "mid-range",
            image: "./assets/image/product/derma-elite-chair/derma-elite-chair-1.webp",
            description: "Derma chair rest is designed with a variety of adjustable functions, including height, tilt angle, and the position of the legs & head.",
            link: "./machine/premium-derma-chair/derma-chair-elite.html"
        },
        {
            id: 5,
            name: "Fibered Hydraulic chair",
            category: "hydraulic-chair",
            price: "mid-range",
            image: "./assets/image/product/fibered-hydraulic-chair/fibered-hydraulic-chair-1.webp",
            description: "Fibered hydraulic chair offers ultimate precision and comfort, featuring independent motorized",
            link: "./machine/hydraulic-chair/fibered-hydraulic-chair.html"
        },
        {
            id: 6,
            name: "Non Fibered Hydraulic chair",
            category: "hydraulic-chair",
            price: "mid-range",
            image: "./assets/image/product/non-fibered-hydraulic-chair/non-fibered-hydraulic-chair-1.webp",
            description: "Non Fibered hydraulic chair offers ultimate precision and comfort, featuring independent motorized",
            link: "./machine/hydraulic-chair/non-fibered-hydraulic-chair.html"
        },
        {
            id: 7,
            name: "Single Dome OT Light",
            category: "ot-light",
            price: "mid-range",
            image: "./assets/image/product/single-dome-ot-light/ot-light-1.webp",
            description: "High powered light used for hair transplant with white and yellow light for precised work for accuracy.",
            link: "./machine/ot-light/single-dome-ot-light.html"
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