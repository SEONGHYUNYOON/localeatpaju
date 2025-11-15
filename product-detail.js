// Product detail page functionality
document.addEventListener('DOMContentLoaded', function() {
    // Thumbnail image click handler
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.getElementById('main-product-image');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            // Remove active class from all thumbnails
            thumbnails.forEach(thumb => thumb.classList.remove('active'));
            // Add active class to clicked thumbnail
            this.classList.add('active');
            // Update main image
            const imageUrl = this.getAttribute('data-image');
            mainImage.src = imageUrl;
        });
    });

    // Quantity selector
    const quantityInput = document.getElementById('quantity');
    const quantityMinus = document.getElementById('quantity-minus');
    const quantityPlus = document.getElementById('quantity-plus');
    const weightSelect = document.getElementById('weight-select');
    const totalAmount = document.getElementById('total-amount');

    // Price mapping
    const priceMap = {
        '1kg': 15000,
        '3kg': 40000,
        '5kg': 65000
    };

    function updateTotalPrice() {
        const weight = weightSelect.value;
        const quantity = parseInt(quantityInput.value) || 1;
        const price = priceMap[weight] || priceMap['1kg'];
        const total = price * quantity;
        totalAmount.textContent = total.toLocaleString() + '원';
    }

    quantityMinus.addEventListener('click', function() {
        const currentValue = parseInt(quantityInput.value) || 1;
        if (currentValue > 1) {
            quantityInput.value = currentValue - 1;
            updateTotalPrice();
        }
    });

    quantityPlus.addEventListener('click', function() {
        const currentValue = parseInt(quantityInput.value) || 1;
        if (currentValue < 99) {
            quantityInput.value = currentValue + 1;
            updateTotalPrice();
        }
    });

    quantityInput.addEventListener('change', function() {
        let value = parseInt(this.value) || 1;
        if (value < 1) value = 1;
        if (value > 99) value = 99;
        this.value = value;
        updateTotalPrice();
    });

    weightSelect.addEventListener('change', function() {
        updateTotalPrice();
    });

    // Tab functionality
    const productTabButtons = document.querySelectorAll('.product-tab-btn');
    const productTabContents = document.querySelectorAll('.product-tab-content');

    productTabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');

            // Remove active class from all buttons and contents
            productTabButtons.forEach(btn => btn.classList.remove('active'));
            productTabContents.forEach(content => content.classList.remove('active'));

            // Add active class to clicked button and corresponding content
            this.classList.add('active');
            const targetContent = document.getElementById(targetTab);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });

    // Purchase button handlers
    const cartButton = document.querySelector('.btn-cart');
    const buyNowButton = document.querySelector('.btn-buy-now');

    if (cartButton) {
        cartButton.addEventListener('click', function(e) {
            e.preventDefault();
            const weight = weightSelect.value;
            const quantity = quantityInput.value;
            // 장바구니에 담고 cart.html로 이동
            window.location.href = 'cart.html';
        });
    }

    if (buyNowButton) {
        buyNowButton.addEventListener('click', function(e) {
            e.preventDefault();
            const weight = weightSelect.value;
            const quantity = quantityInput.value;
            // 바로 구매하기 - checkout.html로 이동
            window.location.href = 'checkout.html';
        });
    }

    // Initialize total price
    updateTotalPrice();
});

