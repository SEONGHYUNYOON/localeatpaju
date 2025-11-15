// Authentication pages functionality
document.addEventListener('DOMContentLoaded', function() {
    // Login form handler
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;
            
            if (email && password) {
                // 실제 로그인 처리 로직은 여기에 구현
                alert('로그인 성공! 마이페이지로 이동합니다.');
                window.location.href = 'mypage.html';
            }
        });
    }

    // Signup form handler
    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (validateSignupForm()) {
                // 실제 회원가입 처리 로직은 여기에 구현
                alert('회원가입이 완료되었습니다!\n로그인 페이지로 이동합니다.');
                window.location.href = 'login.html';
            }
        });
    }

    // Password confirmation real-time validation
    const passwordInput = document.getElementById('signup-password');
    const passwordConfirmInput = document.getElementById('signup-password-confirm');
    const passwordMatchText = document.getElementById('password-match-text');

    if (passwordInput && passwordConfirmInput && passwordMatchText) {
        passwordConfirmInput.addEventListener('input', function() {
            checkPasswordMatch();
        });

        passwordInput.addEventListener('input', function() {
            if (passwordConfirmInput.value) {
                checkPasswordMatch();
            }
        });
    }

    // SNS login buttons (placeholder)
    const kakaoBtn = document.querySelector('.btn-kakao');
    const naverBtn = document.querySelector('.btn-naver');

    if (kakaoBtn) {
        kakaoBtn.addEventListener('click', function() {
            alert('카카오 로그인 기능은 추후 구현 예정입니다.');
        });
    }

    if (naverBtn) {
        naverBtn.addEventListener('click', function() {
            alert('네이버 로그인 기능은 추후 구현 예정입니다.');
        });
    }
});

// Check password match
function checkPasswordMatch() {
    const passwordInput = document.getElementById('signup-password');
    const passwordConfirmInput = document.getElementById('signup-password-confirm');
    const passwordMatchText = document.getElementById('password-match-text');

    if (!passwordInput || !passwordConfirmInput || !passwordMatchText) return;

    const password = passwordInput.value;
    const passwordConfirm = passwordConfirmInput.value;

    if (passwordConfirm.length === 0) {
        passwordMatchText.textContent = '';
        passwordMatchText.className = 'form-help-text password-match-text';
        return;
    }

    if (password === passwordConfirm) {
        passwordMatchText.textContent = '✓ 비밀번호가 일치합니다.';
        passwordMatchText.className = 'form-help-text password-match-text match-success';
    } else {
        passwordMatchText.textContent = '✗ 비밀번호가 일치하지 않습니다.';
        passwordMatchText.className = 'form-help-text password-match-text match-error';
    }
}

// Check email duplicate (placeholder)
function checkEmailDuplicate() {
    const emailInput = document.getElementById('signup-email');
    if (!emailInput) return;

    const email = emailInput.value.trim();

    if (!email) {
        alert('이메일을 입력해주세요.');
        emailInput.focus();
        return;
    }

    // 간단한 이메일 형식 검사
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('올바른 이메일 형식을 입력해주세요.');
        emailInput.focus();
        return;
    }

    // 실제 중복 확인 로직은 여기에 구현
    alert('이메일 중복 확인 기능은 추후 구현 예정입니다.\n\n실제 구현 시에는 서버 API를 호출하여 중복 여부를 확인합니다.');
}

// Validate signup form
function validateSignupForm() {
    const email = document.getElementById('signup-email').value.trim();
    const password = document.getElementById('signup-password').value;
    const passwordConfirm = document.getElementById('signup-password-confirm').value;
    const name = document.getElementById('signup-name').value.trim();
    const termsRequired1 = document.getElementById('terms-required-1').checked;
    const termsRequired2 = document.getElementById('terms-required-2').checked;

    let isValid = true;
    let errorMessage = '';

    // 이메일 검사
    if (!email) {
        isValid = false;
        errorMessage += '이메일을 입력해주세요.\n';
    } else {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            isValid = false;
            errorMessage += '올바른 이메일 형식을 입력해주세요.\n';
        }
    }

    // 비밀번호 검사
    if (!password) {
        isValid = false;
        errorMessage += '비밀번호를 입력해주세요.\n';
    } else if (password.length < 8) {
        isValid = false;
        errorMessage += '비밀번호는 8자 이상이어야 합니다.\n';
    } else {
        // 영문/숫자 조합 검사
        const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/;
        if (!passwordPattern.test(password)) {
            isValid = false;
            errorMessage += '비밀번호는 영문과 숫자를 조합해야 합니다.\n';
        }
    }

    // 비밀번호 확인 검사
    if (!passwordConfirm) {
        isValid = false;
        errorMessage += '비밀번호 확인을 입력해주세요.\n';
    } else if (password !== passwordConfirm) {
        isValid = false;
        errorMessage += '비밀번호가 일치하지 않습니다.\n';
    }

    // 이름 검사
    if (!name) {
        isValid = false;
        errorMessage += '이름을 입력해주세요.\n';
    }

    // 필수 약관 동의 검사
    if (!termsRequired1) {
        isValid = false;
        errorMessage += '이용약관에 동의해주세요.\n';
    }

    if (!termsRequired2) {
        isValid = false;
        errorMessage += '개인정보 수집 및 이용에 동의해주세요.\n';
    }

    if (!isValid) {
        alert(errorMessage);
        return false;
    }

    return true;
}

