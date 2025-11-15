// Products page functionality
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const sortSelect = document.getElementById('sort-select');
    const productCards = document.querySelectorAll('.product-card');

    // Filter functionality
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');

            const category = this.getAttribute('data-category');
            filterProducts(category);
        });
    });

    // Sort functionality
    if (sortSelect) {
        sortSelect.addEventListener('change', function() {
            const sortValue = this.value;
            sortProducts(sortValue);
        });
    }

    // Filter products by category
    function filterProducts(category) {
        productCards.forEach(card => {
            if (category === 'all') {
                card.style.display = 'block';
            } else {
                const cardCategory = card.getAttribute('data-category');
                if (cardCategory === category) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            }
        });
    }

    // Sort products
    function sortProducts(sortValue) {
        const container = document.querySelector('.products-grid');
        const cards = Array.from(productCards);
        
        // Filter out hidden cards
        const visibleCards = cards.filter(card => card.style.display !== 'none');
        const hiddenCards = cards.filter(card => card.style.display === 'none');

        // Sort visible cards
        visibleCards.sort((a, b) => {
            if (sortValue === 'latest') {
                // For now, just maintain current order
                return 0;
            } else if (sortValue === 'popular') {
                // Placeholder: could use data attribute for popularity
                return 0;
            } else if (sortValue === 'price-low') {
                const priceA = parseInt(a.querySelector('.product-price').textContent.replace(/[^0-9]/g, ''));
                const priceB = parseInt(b.querySelector('.product-price').textContent.replace(/[^0-9]/g, ''));
                return priceA - priceB;
            } else if (sortValue === 'price-high') {
                const priceA = parseInt(a.querySelector('.product-price').textContent.replace(/[^0-9]/g, ''));
                const priceB = parseInt(b.querySelector('.product-price').textContent.replace(/[^0-9]/g, ''));
                return priceB - priceA;
            }
            return 0;
        });

        // Clear container
        container.innerHTML = '';

        // Append sorted visible cards
        visibleCards.forEach(card => {
            container.appendChild(card);
        });

        // Append hidden cards at the end
        hiddenCards.forEach(card => {
            container.appendChild(card);
        });
    }

    // Product card click handler (placeholder)
    productCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Don't trigger if clicking on farmer link
            if (e.target.closest('.farmer-link')) {
                return;
            }
            
            const productName = this.querySelector('.product-name').textContent;
            alert(`${productName} 상세 페이지는 추후 구현 예정입니다.`);
        });
    });
});

