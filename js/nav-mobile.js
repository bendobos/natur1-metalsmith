$(document).ready(function() {
    $('.mobile-menu-button, .fade-screen').on('click touchstart', function(e) {
        $('nav.mobile, .fade-screen').toggleClass('is-visible');
        e.preventDefault();
    })
})