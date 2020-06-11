$(document).ready(function() {
    $('#fullpage').fullpage({
        autoScrolling: true,
        css3: true,
        sectionsColor: ['#003333', ' #006633', '#cc99ff', '#336666'],
        navigation: true,
    });

    $.fn.fullpage.setAllowScrolling(false);
});