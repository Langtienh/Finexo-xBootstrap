window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    var scrollPosition = window.scrollY;

    // Kiểm tra xem vị trí cuộn của trang có lớn hơn 46px không
    if (scrollPosition > 40) {
        navbar.classList.add('navbar-bg'); 
    } else {
        navbar.classList.remove('navbar-bg');
    }
});
