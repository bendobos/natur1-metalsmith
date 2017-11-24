$(document).ready(function() {
    $('.mobile-menu-button, .mobile-menu-close-button, .fade-screen').on('click touchstart', function(e) {
        $('nav.mobile, .fade-screen').toggleClass('is-visible');
        e.preventDefault();
    })
})