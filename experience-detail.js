// Experience Detail Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Set minimum date to today
    const dateInput = document.getElementById('date-select');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.setAttribute('min', today);
    }

    // Quantity controls
    const quantityInput = document.getElementById('experience-quantity');
    const quantityMinus = document.getElementById('experience-quantity-minus');
    const quantityPlus = document.getElementById('experience-quantity-plus');
    const totalAmount = document.getElementById('experience-total-amount');
    const basePrice = 20000; // Base price per person

    if (quantityMinus) {
        quantityMinus.addEventListener('click', function() {
            let currentValue = parseInt(quantityInput.value);
            if (currentValue > 1) {
                quantityInput.value = currentValue - 1;
                updateTotalPrice();
            }
        });
    }

    if (quantityPlus) {
        quantityPlus.addEventListener('click', function() {
            let currentValue = parseInt(quantityInput.value);
            if (currentValue < 10) {
                quantityInput.value = currentValue + 1;
                updateTotalPrice();
            }
        });
    }

    if (quantityInput) {
        quantityInput.addEventListener('change', function() {
            let value = parseInt(this.value);
            if (value < 1) this.value = 1;
            if (value > 10) this.value = 10;
            updateTotalPrice();
        });
    }

    function updateTotalPrice() {
        if (totalAmount && quantityInput) {
            const quantity = parseInt(quantityInput.value);
            const total = basePrice * quantity;
            totalAmount.textContent = total.toLocaleString('ko-KR') + '원';
        }
    }

    // Apply button handler
    const applyBtn = document.getElementById('experience-apply-btn');
    if (applyBtn) {
        applyBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const dateInput = document.getElementById('date-select');
            if (!dateInput || !dateInput.value) {
                alert('날짜를 선택해주세요.');
                return;
            }
            alert('체험 신청이 완료되었습니다! 확인 메일을 발송해드렸습니다.');
        });
    }
});

