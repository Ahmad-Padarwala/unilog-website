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
            description: "Revolutionary 8-in-1 HydraFacial system with advanced bubble technology for deep pore",
            link: "./machine/medi-facial/Alicesuperbubblemax.html"
        },
        {
            id: 2,
            name: "Hydraluxe Aquastar",
            category: "medi-facial",
            price: "premium",
            image: "./assets/image/product/HydraluxeAquastar/hydralux-1.webp",
            description: "Advanced skin analyzer with real-time imaging and high-precision probes for comprehensive",
            link: "./machine/medi-facial/HydraluxeAquastar.html"
        },
        {
            id: 3,
            name: "Oxyrich PDT+",
            category: "medi-facial",
            price: "premium",
            image: "./assets/image/product/OxyrichPDT/pdt.webp",
            description: "Multifunctional platform combining photodynamic therapy with oxygen infusion",
            link: "./machine/medi-facial/OxyrichPDT.html"
        },
        {
            id: 4,
            name: "LUMA 3000",
            category: "laser-hair",
            price: "mid-range",
            image: "./assets/image/product/luma3000/luma-3000.webp",
            description: "Unleash powerful, permanent results; this is next-level diode laser technology",
            link: "./machine/hair-reduction/luma3000.html"
        },
        {
            id: 5,
            name: "LUMA 2000",
            category: "laser-hair",
            price: "mid-range",
            image: "./assets/image/product/luma2000/luma-2000.webp",
            description: "new verticle hair removal device with economical price safe for all skin and hair type",
            link: "./machine/hair-reduction/luma2000.html"
        },
        {
            id: 6,
            name: "4DTECLASER",
            category: "laser-hair",
            price: "luxury",
            image: "./assets/image/product/4Dteclaserdevice/4dteclaser.webp",
            description: "Revolutionary 4-wavelength diode laser system for comprehensive hair removal across all skin types",
            link: "./machine/hair-reduction/4Dteclaserdevice.html"
        },
        {
            id: 7,
            name: "ICE 1200",
            category: "laser-hair",
            price: "premium",
            image: "./assets/image/product/Ice1200diodelaserdevice/Ice1200diodelaserdevice-1.webp",
            description: "USFDA approved 4-wavelength diode laser with advanced sapphire cooling technology",
            link: "./machine/hair-reduction/Ice1200diodelaserdevice.html"
        },
        {
            id: 8,
            name: "EPILITE HP",
            category: "laser-hair",
            price: "mid-range",
            image: "./assets/image/product/EpiliteHP/epilite.webp",
            description: "High-performance laser hair removal system with superior efficacy and enhanced patient comfort",
            link: "./machine/hair-reduction/EpiliteHP.html"
        },
        {
            id: 9,
            name: "LUMASPOT",
            category: "yag-laser",
            price: "mid-range",
            image: "./assets/image/product/lumaspot/lumaspot.webp",
            description: "LUMASPOT is best Picosecond laser works on 4 operational modes for better results",
            link: "./machine/yag-laser/lumaspot.html"
        },
        {
            id: 10,
            name: "PICOFOCUS",
            category: "yag-laser",
            price: "mid-range",
            image: "./assets/image/product/picofocus/picofocus.webp",
            description: "top powerful technology for pigment and tattoo removal treatment",
            link: "./machine/yag-laser/picofocus.html"
        },
        {
            id: 11,
            name: "RUIKD GENELUX LASER",
            category: "yag-laser",
            price: "mid-range",
            image: "./assets/image/product/ruikd-genelux/ruikd.webp",
            description: "all pigment removal and tattoo removal treatment with 2 wavelengths",
            link: "./machine/yag-laser/ruikd_genelux.html"
        },
        {
            id: 12,
            name: "Epiglow Diode + pico laser",
            category: "laser-platform",
            price: "mid-range",
            image: "./assets/image/product/Epiglow-Diode/epiglow-1.webp",
            description: "most advance combination laser system of diode and picosecond laser",
            link: "./machine/laser-platform/epiglow_diode_pico_laser.html"
        },
        {
            id: 13,
            name: "Elite Diode + pico laser",
            category: "laser-platform",
            price: "mid-range",
            image: "./assets/image/product/elite-diode/Elitediode.webp",
            description: "combination laser system of diode and picosecond laser",
            link: "./machine/laser-platform/elite_diode_pico_laser.html"
        },
        {
            id: 14,
            name: "Epiglow FDA Diode + Pico",
            category: "laser-platform",
            price: "mid-range",
            image: "./assets/image/product/epiglow-fda/epiglow-fda.webp",
            description: "most advance FDA approved multifunctional platform",
            link: "./machine/laser-platform/epiglow_fda_pico_laser.html"
        },
        {
            id: 15,
            name: "IPL Q switch laser system",
            category: "laser-platform",
            price: "mid-range",
            image: "./assets/image/product/ipl-q-switch/ipl-1.webp",
            description: "Unilog 4 in 1 IPL Q switch laser system is economical laser device",
            link: "./machine/laser-platform/ipl_switch_laser_system.html"
        },
        {
            id: 16,
            name: "Ematrix CO2 fractional laser",
            category: "co2-fractional",
            price: "mid-range",
            image: "./assets/image/product/ematrix-co2/ematrix.webp",
            description: "works at 10600 nm wavelength and comes with 60W power",
            link: "./machine/co2-fractional/ematrix_co2.html"
        },
        {
            id: 17,
            name: "UltraFlexe CO2 fractional laser",
            category: "co2-fractional",
            price: "mid-range",
            image: "./assets/image/product/ultraflex-co2/ultraflex.webp",
            description: "USFDA approved laser with 60W power useful to treat",
            link: "./machine/co2-fractional/ultraflexe_co2.html"
        },
        {
            id: 18,
            name: "Super CO2 fractional laser",
            category: "co2-fractional",
            price: "mid-range",
            image: "./assets/image/product/super-co2/super.webp",
            description: "USFDA approved laser with 60W power useful to treat",
            link: "./machine/co2-fractional/super_co2.html"
        },
        {
            id: 19,
            name: "OPT hair removal system",
            category: "intensed-pulse-light",
            price: "mid-range",
            image: "./assets/image/product/opt-hair-removal/opt-hair-removal.webp",
            description: "OPT Intense pulse light is most reliable device with wide range of wavelengths",
            link: "./machine/intensed-pulse-light/opt_hair_removal.html"
        },
        {
            id: 20,
            name: "Doublo New HIFU",
            category: "hifu",
            price: "mid-range",
            image: "./assets/image/product/doublo-new-hifu/doublo-new-hifu.webp",
            description: "Doublo New HIFU utilize stimulating natural collagen production",
            link: "./machine/hifu/doublo-new-hifu.html"
        },
        {
            id: 21,
            name: "Ultralift",
            category: "hifu",
            price: "mid-range",
            image: "./assets/image/product/ultralift/ultralift.webp",
            description: "Ultralift HIFU utilize stimulating natural collagen production and targeting",
            link: "./machine/hifu/ultralift.html"
        },
        {
            id: 22,
            name: "8D HIFU",
            category: "hifu",
            price: "mid-range",
            image: "./assets/image/product/8d-hifu/8d-hifu.webp",
            description: "8D HIFU utilize stimulating natural collagen production and targeting the SMAS layer",
            link: "./machine/hifu/8d-hifu.html"
        },
        {
            id: 23,
            name: "Crystalline Depth 8 MNRF",
            category: "mnrf",
            price: "mid-range",
            image: "./assets/image/product/crystalline-depth/crystalline-depth.webp",
            description: "works on dual action of Micro needling and Radio Frequency technology with advanced depth",
            link: "./machine/mnrf/crystalline-depth.html"
        },
        {
            id: 24,
            name: "Folilase Hair regrowth system",
            category: "low-level-laser-therapy",
            price: "mid-range",
            image: "./assets/image/product/ultralift/ultralift.webp",
            description: "Folilase hair regrowth system utilizes Low-Level Laser Therapy (LLLT) with 650nm",
            link: "./machine/low-level-laser-therapy/folilase-hair-regrowth-system.html"
        },
        {
            id: 25,
            name: "Folilase prime hair regrowth system",
            category: "low-level-laser-therapy",
            price: "mid-range",
            image: "./assets/image/product/ultralift/ultralift.webp",
            description: "Folilase hair regrowth system utilizes Low-Level Laser Therapy (LLLT) with 650nm diode lasers",
            link: "./machine/low-level-laser-therapy/folilase-prime-hair-regrowth-system.html"
        },
        {
            id: 26,
            name: "Laser Helmet",
            category: "low-level-laser-therapy",
            price: "mid-range",
            image: "./assets/image/product/laser-helmet/laser-helmet-1.webp",
            description: "A laser hair growth helmet is a wearable home-use device that uses Low-Level Laser Therapy (LLLT)",
            link: "./machine/low-level-laser-therapy/laser-helmet.html"
        },
        {
            id: 27,
            name: "Dr. Pen A11 ultima",
            category: "micro-needling-portable-devices",
            price: "mid-range",
            image: "./assets/image/product/Dr.pen-A11/Dr.pen-A11-1.webp",
            description: "Dr. Pen Ultima A11 is a professional-grade microneedling device designed to rejuvenate",
            link: "./machine/micro-needling-portable-devices/Dr.Pen-A11-ultima.html"
        },
        {
            id: 28,
            name: "Dr. Pen A6S ultima",
            category: "micro-needling-portable-devices",
            price: "mid-range",
            image: "./assets/image/product/Dr.A6s-pen/Dr.Pen-A6S-ultima-1.webp",
            description: "Dr. Pen Ultima A6S is a professional-grade microneedling device designed to rejuvenate",
            link: "./machine/micro-needling-portable-devices/Dr.Pen-A6S-ultima.html"
        },
        {
            id: 29,
            name: "Dr. Pen M8",
            category: "micro-needling-portable-devices",
            price: "mid-range",
            image: "./assets/image/product/Dr.M8-pen/Dr-pen-M8-1.webp",
            description: "Dr. Pen M8 is a professional-grade microneedling device designed to rejuvenate",
            link: "./machine/micro-needling-portable-devices/Dr.Pen-M8.html"
        },
        {
            id: 30,
            name: "Dr. Pen A6 ultima",
            category: "micro-needling-portable-devices",
            price: "mid-range",
            image: "./assets/image/product/Dr.pen-A6/Dr.pen-A6-1.webp",
            description: "Dr. Pen A6 uses advanced vertical oscillation technology to create controlled micro-channels",
            link: "./machine/micro-needling-portable-devices/Dr.Pen-A6-ultima.html"
        },
        {
            id: 31,
            name: "Meso therapy Injectable device",
            category: "mesotherapy-machine",
            price: "mid-range",
            image: "./assets/image/product/ultralift/ultralift.webp",
            description: "mesotherapy injectable device is an automated system designed to deliver precise micro-injections",
            link: "./machine/mesotherapy-machine/meso-therapy-injectable-device.html"
        },
        {
            id: 32,
            name: "Skin Cool electroporation",
            category: "mesotherapy-machine",
            price: "mid-range",
            image: "./assets/image/product/ultralift/ultralift.webp",
            description: "Skin Cool is a multi-functional skin rejuvenation device that combines thermal therapy",
            link: "./machine/mesotherapy-machine/skin-cool-electroporation-device.html"
        },
        {
            id: 33,
            name: "Electric Derma chair",
            category: "clinical-furnitures",
            price: "mid-range",
            image: "./assets/image/product/ultralift/ultralift.webp",
            description: "Electric Derma Bed offers ultimate precision and comfort, featuring independent motorized",
            link: "./machine/clinical-furnitures/electric-derma-chair.html"
        },
        {
            id: 34,
            name: "Fibered Hydraulic chair",
            category: "clinical-furnitures",
            price: "mid-range",
            image: "./assets/image/product/ultralift/ultralift.webp",
            description: "Fibered hydraulic chair offers ultimate precision and comfort, featuring independent motorized",
            link: "./machine/clinical-furnitures/fibered-hydraulic-chair.html"
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

    document.querySelectorAll('.filter-tabs').forEach((tabs) => {
        tabs.addEventListener('wheel', (e) => {
            if (e.deltaY === 0) return;

            e.preventDefault(); // stop vertical scroll
            tabs.scrollLeft += e.deltaY;
        }, { passive: false });
    });

    // Make selectSuggestion available globally
    window.selectSuggestion = selectSuggestion;
});