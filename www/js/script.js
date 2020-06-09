$(document).ready(function() {
    $('#fullpage').fullpage({
        autoScrolling: true,
        css3: true,
        sectionsColor: ['blue', 'orange'],
        navigation: true,
    });

    $.fn.fullpage.setAllowScrolling(false);
});