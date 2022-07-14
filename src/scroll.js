$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 0) {
        $('.top-bar').addClass('active');
    } else {
        $('.top-bar').removeClass('active')
    }
});