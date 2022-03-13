// BACK TO TOP
$(window).scroll(function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        $('#back2Top').fadeIn();
    } else {
        $('#back2Top').fadeOut();
    }
});

$(document).ready(function() {
    $("#back2Top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, '300');
        return false;
    });
});