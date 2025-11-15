// Community page functionality
document.addEventListener('DOMContentLoaded', function() {
    // Category filter click handler
    const categoryFilters = document.querySelectorAll('.category-filter');
    
    categoryFilters.forEach(filter => {
        filter.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all filters
            categoryFilters.forEach(f => f.classList.remove('active'));
            // Add active class to clicked filter
            this.classList.add('active');
            
            const category = this.getAttribute('data-category');
            // 실제 필터링 로직은 여기에 구현
            console.log('Filter category:', category);
        });
    });

    // Post title link click handler (placeholder)
    const postTitleLinks = document.querySelectorAll('.post-title-link');
    postTitleLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            // 실제 게시물 상세 페이지로 이동하는 로직은 여기에 구현
            // window.location.href = 'community-post.html';
            console.log('Post clicked:', this.textContent);
        });
    });

    // Write post button click handler
    const writePostBtn = document.querySelector('.btn-write-post');
    if (writePostBtn) {
        writePostBtn.addEventListener('click', function(e) {
            e.preventDefault();
            // 실제 글쓰기 페이지로 이동하는 로직은 여기에 구현
            // window.location.href = 'community-write.html';
            console.log('Write post clicked');
        });
    }

    // Pagination click handler
    const paginationNumbers = document.querySelectorAll('.pagination-number');
    const paginationBtns = document.querySelectorAll('.pagination-btn');
    
    paginationNumbers.forEach(number => {
        number.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all numbers
            paginationNumbers.forEach(n => n.classList.remove('active'));
            // Add active class to clicked number
            this.classList.add('active');
            
            const page = this.textContent;
            console.log('Page:', page);
        });
    });

    paginationBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const direction = this.classList.contains('prev') ? 'prev' : 'next';
            console.log('Pagination:', direction);
        });
    });
});

