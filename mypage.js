// MyPage functionality
document.addEventListener('DOMContentLoaded', function() {
    const sidebarLinks = document.querySelectorAll('.sidebar-link');
    const contentPanels = document.querySelectorAll('.content-panel');
    const logoutLink = document.querySelector('.sidebar-link.logout');

    // Sidebar menu click handler
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Don't process logout link here
            if (this.classList.contains('logout')) {
                return;
            }

            const targetContent = this.getAttribute('data-content');
            
            if (!targetContent) return;

            // Remove active class from all links and panels
            sidebarLinks.forEach(l => l.classList.remove('active'));
            contentPanels.forEach(p => p.classList.remove('active'));

            // Add active class to clicked link and corresponding panel
            this.classList.add('active');
            const targetPanel = document.getElementById(targetContent);
            if (targetPanel) {
                targetPanel.classList.add('active');
            }
        });
    });

    // Logout handler
    if (logoutLink) {
        logoutLink.addEventListener('click', function(e) {
            e.preventDefault();
            if (confirm('로그아웃 하시겠습니까?')) {
                // 실제 로그아웃 로직은 여기에 구현
                alert('로그아웃되었습니다.');
                window.location.href = 'index.html';
            }
        });
    }

    // Profile form submit handler
    const profileForm = document.getElementById('profile-form');
    if (profileForm) {
        profileForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const newPassword = document.getElementById('profile-new-password').value;
            const newPasswordConfirm = document.getElementById('profile-new-password-confirm').value;
            
            // 비밀번호 변경 시 확인
            if (newPassword || newPasswordConfirm) {
                if (newPassword !== newPasswordConfirm) {
                    alert('새 비밀번호가 일치하지 않습니다.');
                    return;
                }
                
                if (newPassword.length > 0 && newPassword.length < 8) {
                    alert('비밀번호는 8자 이상이어야 합니다.');
                    return;
                }
            }
            
            // 실제 회원 정보 수정 로직은 여기에 구현
            alert('회원 정보가 수정되었습니다!\n\n실제 회원 정보 수정 기능은 추후 구현 예정입니다.');
        });
    }

    // Address find function (placeholder)
    if (typeof findAddress === 'undefined') {
        window.findAddress = function() {
            alert('주소 찾기 기능은 추후 구현 예정입니다.\n\n실제 구현 시에는 주소 API를 연동합니다.');
            // 예시: 임시로 주소 입력
            document.getElementById('profile-postal-code').value = '10840';
            document.getElementById('profile-address-base').value = '경기도 파주시 교하로 123';
        };
    }
});

