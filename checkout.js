// Checkout page functionality
document.addEventListener('DOMContentLoaded', function() {
    const checkoutForm = document.getElementById('checkout-form');
    const deliveryMemoSelect = document.getElementById('delivery-memo');
    const deliveryMemoCustom = document.getElementById('delivery-memo-custom');

    // 배송 메모 선택에 따른 직접 입력 필드 표시/숨김
    if (deliveryMemoSelect) {
        deliveryMemoSelect.addEventListener('change', function() {
            if (this.value === 'custom') {
                deliveryMemoCustom.style.display = 'block';
                deliveryMemoCustom.setAttribute('required', 'required');
            } else {
                deliveryMemoCustom.style.display = 'none';
                deliveryMemoCustom.removeAttribute('required');
                deliveryMemoCustom.value = '';
            }
        });
    }

    // 폼 제출 처리
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (validateForm()) {
                // 폼 유효성 검사 통과 시 결제 처리
                processPayment();
            }
        });
    }
});

// 주소 찾기 함수 (플레이스홀더)
function findAddress() {
    // 실제 구현 시에는 주소 API (예: 다음 주소 API, 카카오 주소 API)를 연동
    alert('주소 찾기 기능은 추후 구현 예정입니다.\n실제 구현 시에는 주소 API를 연동합니다.');
    
    // 예시: 임시로 주소 입력
    document.getElementById('postal-code').value = '10840';
    document.getElementById('address-base').value = '경기도 파주시 교하로 123';
}

// 폼 유효성 검사
function validateForm() {
    const ordererName = document.getElementById('orderer-name');
    const ordererPhone = document.getElementById('orderer-phone');
    const postalCode = document.getElementById('postal-code');
    const addressBase = document.getElementById('address-base');
    const addressDetail = document.getElementById('address-detail');
    const termsAgreement = document.getElementById('terms-agreement');
    
    let isValid = true;
    let errorMessage = '';

    // 주문자 이름 검사
    if (!ordererName.value.trim()) {
        isValid = false;
        errorMessage += '주문자 이름을 입력해주세요.\n';
        ordererName.focus();
    }

    // 연락처 검사
    if (!ordererPhone.value.trim()) {
        isValid = false;
        errorMessage += '연락처를 입력해주세요.\n';
        if (isValid) ordererPhone.focus();
    } else {
        // 간단한 전화번호 형식 검사
        const phonePattern = /^[0-9-]+$/;
        if (!phonePattern.test(ordererPhone.value)) {
            isValid = false;
            errorMessage += '올바른 연락처 형식을 입력해주세요.\n';
            if (isValid) ordererPhone.focus();
        }
    }

    // 주소 검사
    if (!postalCode.value.trim() || !addressBase.value.trim()) {
        isValid = false;
        errorMessage += '주소를 입력해주세요. (우편번호 찾기를 이용해주세요)\n';
        if (isValid) {
            if (!postalCode.value.trim()) {
                postalCode.focus();
            } else {
                addressBase.focus();
            }
        }
    }

    if (!addressDetail.value.trim()) {
        isValid = false;
        errorMessage += '상세주소를 입력해주세요.\n';
        if (isValid) addressDetail.focus();
    }

    // 이용약관 동의 검사
    if (!termsAgreement.checked) {
        isValid = false;
        errorMessage += '이용약관에 동의해주세요.\n';
        if (isValid) termsAgreement.focus();
    }

    if (!isValid) {
        alert(errorMessage);
        return false;
    }

    return true;
}

// 결제 처리 함수
function processPayment() {
    const ordererName = document.getElementById('orderer-name').value;
    const paymentMethod = document.querySelector('input[name="payment-method"]:checked').value;
    
    // 결제 수단에 따른 처리
    let paymentMethodName = '';
    switch(paymentMethod) {
        case 'card':
            paymentMethodName = '신용카드';
            break;
        case 'bank':
            paymentMethodName = '무통장 입금';
            break;
        case 'kakao':
            paymentMethodName = '간편 결제(카카오페이)';
            break;
    }

    // 실제 결제 처리 로직은 여기에 구현
    alert(`결제가 완료되었습니다!\n\n주문자: ${ordererName}\n결제 수단: ${paymentMethodName}\n\n실제 결제 처리는 추후 구현 예정입니다.`);
    
    // 결제 완료 후 주문 완료 페이지로 이동 (추후 구현)
    // window.location.href = 'order-complete.html';
}

