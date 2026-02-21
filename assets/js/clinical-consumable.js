// Skincare Products Data and Functionality - Matching machine-product.html exactly
document.addEventListener('DOMContentLoaded', function () {
    // Product data
    const products = [
        {
            id: 1,
            name: "PMU Products",
            category: "pmu-products",
            price: "premium",
            image: "./assets/image/consumable/pmu-product/part1.webp",
            link: "./consumable/pmu-product.html"
        },
        {
            id: 2,
            name: "BB Glow Treatments",
            category: "bb-glow-treatments",
            price: "premium",
            image: "./assets/image/consumable/bb-glow/part1.webp",
            link: "./consumable/bb-glow.html"
        },
        {
            id: 3,
            name: "Meso Solutions",
            category: "meso-solutions",
            price: "mid-range",
            image: "./assets/image/consumable/meso-solution/part1.webp",
            link: "./consumable/meso-solution.html"
        },
        {
            id: 4,
            name: "Skin Boosters",
            category: "skin-boosters",
            price: "premium",
            image: "./assets/image/consumable/skin-booster/part1.webp",
            link: "./consumable/skin-booster.html"
        },
        {
            id: 5,
            name: "PRP & GFC",
            category: "prp-gfc",
            price: "premium",
            image: "./assets/image/consumable/prp-gfc/part1.webp",
            link: "./consumable/prp-gfc.html"
        },
        {
            id: 6,
            name: "Surgical Consumable",
            category: "surgical-consumable",
            price: "premium",
            image: "../assets/image/consumable/surgical-consumable/part1.webp",
            link: "./consumable/surgical-consumable.html"
        },
        {
            id: 7,
            name: "Medifacial Products",
            category: "medifacial-products",
            price: "premium",
            image: "./assets/image/consumable/medifacial-products/part1.webp",
            link: "./consumable/medifacial-products.html"
        },
        {
            id: 8,
            name: "Filler Thread Toxins",
            category: "filler-thread-toxins",
            price: "premium",
            image: "./assets/image/consumable/filler-thread-toxins/part1.webp",
            link: "./consumable/filler-thread-toxins.html"
        },
        {
            id: 9,
            name: "Microneedling Therapy",
            category: "microneedling-therapy",
            price: "premium",
            image: "./assets/image/consumable/microneedling-therapy/part1.webp",
            link: "./consumable/microneedling-therapy.html"
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
            if (product.name.toLowerCase().includes(searchTerm)) {
                suggestions.add(product.name);
            }
        });

        displaySearchSuggestions([...suggestions].slice(0, 5));
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
              
                <h3>${product.name}</h3>
              
                <div class="product-footer">
                    <a href="${product.link}" class="view-more-btn">View Details</a>
                </div>
            </div>
        `;

        return card;
    }

    function getCategoryLabel(category) {
        const labels = {
            'pmu-products': 'PMU Products',
            'bb-glow-treatments': 'BB Glow Treatments',
            'meso-solutions': 'Meso Solutions',
            'skin-boosters': 'Skin Boosters',
            'prp-gfc': 'PRP & GFC',
            'surgical-consumable': 'Surgical Consumable',
            'medifacial-products': 'Medifacial Products',
            'filler-thread-toxins': 'Filler Thread Toxins',
            'microneedling-therapy': 'Microneedling Therapy'
        };

        return labels[category] || category;
    }
    function filterProducts() {
        const searchTerm = document.getElementById('productSearch').value.toLowerCase();
        const activeTab = document.querySelector('.filter-tab.active');
        const categoryFilter = activeTab ? activeTab.dataset.category : 'all';

        const filteredProducts = products.filter(product => {

            const matchesSearch =
                searchTerm === '' ||
                product.name.toLowerCase().includes(searchTerm) ||
                getCategoryLabel(product.category).toLowerCase().includes(searchTerm);

            // ✅ IGNORE CATEGORY TAB WHEN SEARCH IS ACTIVE
            const matchesCategory =
                searchTerm !== ''
                    ? true
                    : categoryFilter === 'all' || product.category === categoryFilter;

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