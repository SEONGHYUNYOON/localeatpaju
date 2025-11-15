// Cart page functionality
document.addEventListener('DOMContentLoaded', function() {
    updateOrderSummary();
});

// Update quantity for a product
function updateQuantity(productId, change) {
    const quantityInput = document.querySelector(`input[data-product-id="${productId}"]`);
    if (!quantityInput) return;

    let currentValue = parseInt(quantityInput.value) || 1;
    let newValue = currentValue + change;

    if (newValue < 1) newValue = 1;
    if (newValue > 99) newValue = 99;

    quantityInput.value = newValue;
    updateItemPrice(productId);
    updateOrderSummary();
}

// Update quantity from input field
function updateQuantityFromInput(productId, value) {
    let numValue = parseInt(value) || 1;
    if (numValue < 1) numValue = 1;
    if (numValue > 99) numValue = 99;

    const quantityInput = document.querySelector(`input[data-product-id="${productId}"]`);
    if (quantityInput) {
        quantityInput.value = numValue;
    }
    
    updateItemPrice(productId);
    updateOrderSummary();
}

// Update individual item price
function updateItemPrice(productId) {
    const cartItem = document.querySelector(`.cart-item[data-product-id="${productId}"]`);
    if (!cartItem) return;

    const unitPrice = parseInt(cartItem.getAttribute('data-unit-price')) || 0;
    const quantityInput = cartItem.querySelector(`input[data-product-id="${productId}"]`);
    const quantity = parseInt(quantityInput.value) || 1;
    const totalPrice = unitPrice * quantity;

    const priceElement = cartItem.querySelector('.item-total-price');
    if (priceElement) {
        priceElement.textContent = totalPrice.toLocaleString() + '원';
    }
}

// Remove cart item
function removeCartItem(productId) {
    const cartItem = document.querySelector(`.cart-item[data-product-id="${productId}"]`);
    if (cartItem) {
        cartItem.remove();
        checkEmptyCart();
        updateOrderSummary();
    }
}

// Check if cart is empty
function checkEmptyCart() {
    const cartItemsList = document.getElementById('cart-items-list');
    const emptyCartMessage = document.getElementById('empty-cart-message');
    const orderSummaryColumn = document.querySelector('.order-summary-column');

    if (!cartItemsList || !emptyCartMessage) return;

    const cartItems = cartItemsList.querySelectorAll('.cart-item');
    
    if (cartItems.length === 0) {
        cartItemsList.style.display = 'none';
        emptyCartMessage.style.display = 'block';
        if (orderSummaryColumn) {
            orderSummaryColumn.style.display = 'none';
        }
    } else {
        cartItemsList.style.display = 'block';
        emptyCartMessage.style.display = 'none';
        if (orderSummaryColumn) {
            orderSummaryColumn.style.display = 'block';
        }
    }
}

// Update order summary
function updateOrderSummary() {
    const cartItems = document.querySelectorAll('.cart-item');
    let subtotal = 0;
    const shippingThreshold = 30000; // 배송비 무료 기준: 30,000원
    const shippingFee = 3000; // 배송비: 3,000원

    cartItems.forEach(item => {
        const unitPrice = parseInt(item.getAttribute('data-unit-price')) || 0;
        const quantityInput = item.querySelector('.quantity-input');
        const quantity = parseInt(quantityInput.value) || 1;
        subtotal += unitPrice * quantity;
    });

    // Update subtotal
    const subtotalElement = document.getElementById('subtotal');
    if (subtotalElement) {
        subtotalElement.textContent = subtotal.toLocaleString() + '원';
    }

    // Calculate shipping fee
    const shippingFeeElement = document.getElementById('shipping-fee');
    let finalShippingFee = 0;
    
    if (subtotal >= shippingThreshold) {
        if (shippingFeeElement) {
            shippingFeeElement.textContent = '무료';
        }
        finalShippingFee = 0;
    } else {
        if (shippingFeeElement) {
            shippingFeeElement.textContent = shippingFee.toLocaleString() + '원';
        }
        finalShippingFee = shippingFee;
    }

    // Calculate total
    const total = subtotal + finalShippingFee;
    const totalElement = document.getElementById('total-amount');
    if (totalElement) {
        totalElement.textContent = total.toLocaleString() + '원';
    }
}

