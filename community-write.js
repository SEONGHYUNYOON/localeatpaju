// Community write page functionality
document.addEventListener('DOMContentLoaded', function() {
    const writePostForm = document.getElementById('write-post-form');
    const fileAttachBtn = document.querySelector('.btn-file-attach');

    // File attach button click handler (placeholder)
    if (fileAttachBtn) {
        fileAttachBtn.addEventListener('click', function() {
            alert('파일 첨부 기능은 추후 구현 예정입니다.');
        });
    }

    // Form submit handler
    if (writePostForm) {
        writePostForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (validateForm()) {
                // 폼 유효성 검사 통과 시 게시물 등록 처리
                submitPost();
            }
        });
    }
});

// Form validation
function validateForm() {
    const category = document.getElementById('post-category').value;
    const title = document.getElementById('post-title').value.trim();
    const content = document.getElementById('post-content').value.trim();
    
    let isValid = true;
    let errorMessage = '';

    // 카테고리 검사
    if (!category) {
        isValid = false;
        errorMessage += '카테고리를 선택해주세요.\n';
        document.getElementById('post-category').focus();
    }

    // 제목 검사
    if (!title) {
        isValid = false;
        errorMessage += '제목을 입력해주세요.\n';
        if (isValid) document.getElementById('post-title').focus();
    }

    // 내용 검사
    if (!content) {
        isValid = false;
        errorMessage += '내용을 입력해주세요.\n';
        if (isValid) document.getElementById('post-content').focus();
    }

    if (!isValid) {
        alert(errorMessage);
        return false;
    }

    return true;
}

// Submit post
function submitPost() {
    const category = document.getElementById('post-category').value;
    const title = document.getElementById('post-title').value.trim();
    const content = document.getElementById('post-content').value.trim();
    
    // 실제 게시물 등록 로직은 여기에 구현
    alert('게시물이 등록되었습니다!\n\n실제 게시물 등록 기능은 추후 구현 예정입니다.');
    
    // 게시물 등록 후 커뮤니티 목록 페이지로 이동
    // window.location.href = 'community.html';
}

