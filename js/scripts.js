$(document).ready(function(){
    $('.mobile-button').on('click', function () {
        $('.flex-container-end').slideDown();
        $(this).togglClass('opened');
    })
});