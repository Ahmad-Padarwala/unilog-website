// Clean Product Listing JavaScript
document.addEventListener('DOMContentLoaded', function () {
    // Product data
    const products = [
        {
            id: 1,
            name: "Alice super bubble max",
            category: "medi-facial",
            price: "premium",
            image: "./assets/image/product/Alicesuperbubblemax/1.webp",
            description: "Revolutionary 8-in-1 HydraFacial system with advanced bubble technology for deep pore cleansing and skin brightening.",
            link: "./machine/medi-facial/Alicesuperbubblemax.html"
        },
        {
            id: 2,
            name: "Hydraluxe Aquastar",
            category: "medi-facial",
            price: "premium",
            image: "./assets/image/product/HydraluxeAquastar/hydralux-1.webp",
            description: "Advanced skin analyzer with real-time imaging and high-precision probes for comprehensive anti-aging treatments.",
            link: "./machine/medi-facial/HydraluxeAquastar.html"
        },
        {
            id: 3,
            name: "Oxyrich PDT+",
            category: "medi-facial",
            price: "premium",
            image: "./assets/image/product/OxyrichPDT/pdt.webp",
            description: "Multifunctional platform combining photodynamic therapy with oxygen infusion for comprehensive skin treatment.",
            link: "./machine/medi-facial/OxyrichPDT.html"
        },
         {
            id: 4,
            name: "LUMA 3000",
            category: "laser-hair",
            price: "mid-range",
            image: "./assets/image/product/luma3000/luma-3000.webp",
            description: "Unleash powerful, permanent results; this is next-level diode laser technology.",
            link: "./machine/hair-reduction/luma3000.html"
        },
        {
            id: 5,
            name: "LUMA 2000",
            category: "laser-hair",
            price: "mid-range",
            image: "./assets/image/product/luma2000/luma-2000.webp",
            description: "new verticle hair removal device with economical price safe for all skin and hair type.",
            link: "./machine/hair-reduction/luma2000.html"
        },
        {
            id: 6,
            name: "4DTECLASER",
            category: "laser-hair",
            price: "luxury",
            image: "./assets/image/product/4Dteclaserdevice/4dteclaser.webp",
            description: "Revolutionary 4-wavelength diode laser system for comprehensive hair removal across all skin types.",
            link: "./machine/hair-reduction/4Dteclaserdevice.html"
        },
        {
            id: 7,
            name: "ICE 1200",
            category: "laser-hair",
            price: "premium",
            image: "./assets/image/product/Ice1200diodelaserdevice/Ice1200diodelaserdevice-1.webp",
            description: "USFDA approved 4-wavelength diode laser with advanced sapphire cooling technology.",
            link: "./machine/hair-reduction/Ice1200diodelaserdevice.html"
        },
        {
            id: 8,
            name: "EPILITE HP",
            category: "laser-hair",
            price: "mid-range",
            image: "./assets/image/product/EpiliteHP/epilite.webp",
            description: "High-performance laser hair removal system with superior efficacy and enhanced patient comfort.",
            link: "./machine/hair-reduction/EpiliteHP.html"
        },       
        {
            id: 9,
            name: "LUMASPOT",
            category: "yag-laser",
            price: "mid-range",
            image: "./assets/image/product/lumaspot/lumaspot.webp",
            description: "LUMASPOT is best Picosecond laser works on 4 operational modes for better results.",
            link: "./machine/yag-laser/lumaspot.html"
        },
        {
            id: 10,
            name: "PICOFOCUS",
            category: "yag-laser",
            price: "mid-range",
            image: "./assets/image/product/picofocus/picofocus.webp",
            description: "top powerful technology for pigment and tattoo removal treatment.",
            link: "./machine/yag-laser/picofocus.html"
        },
        {
            id: 11,
            name: "RUIKD GENELUX LASER",
            category: "yag-laser",
            price: "mid-range",
            image: "./assets/image/product/picofocus/picofocus.webp",
            description: "all pigment removal and tattoo removal treatment with 2 wavelengths.",
            link: "./machine/yag-laser/ruikd_genelux.html"
        },
    ]

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

        searchInput.addEventListener('input', handleSearchInput);
        searchInput.addEventListener('focus', showSearchSuggestions);
        searchInput.addEventListener('blur', hideSearchSuggestions);
        searchBtn.addEventListener('click', performSearch);

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
        document.getElementById('clearFilters').addEventListener('click', clearAllFilters);

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
            'medi-facial': 'Medi Facial',
            'laser-hair': 'Hair Removal',
            'skin-rejuvenation': 'Skin Rejuvenation',
            'body-contouring': 'Body Contouring',
            'laser-therapy': 'Laser Therapy'
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
        document.getElementById('productSearch').value = '';

        // Reset to "All Products" tab
        document.querySelectorAll('.filter-tab').forEach(tab => {
            tab.classList.remove('active');
        });
        document.querySelector('.filter-tab[data-category="all"]').classList.add('active');

        hideSearchSuggestions();
        renderProducts(products);
        updateResultsCount(products.length);
    }

    function updateResultsCount(count) {
        const previewElement = document.getElementById('resultsPreview');

        let text;
        if (count === 0) {
            text = 'No products found';
        } else if (count === 1) {
            text = 'Showing 1 product';
        } else {
            text = `Showing ${count} products`;
        }

        if (previewElement) {
            previewElement.querySelector('.results-text').textContent = `${count} products found`;
        }
    }

    // Make selectSuggestion available globally
    window.selectSuggestion = selectSuggestion;
});