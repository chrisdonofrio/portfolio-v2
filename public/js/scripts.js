$(document).ready(function() {
    $(".panel").css({
        "height": $(window).height()
    });
    $.scrollify({
        section: ".panel",
        sectionName: "data-section-name"
    });


    $(".scroll").click(function (e) {
        e.preventDefault();
        $.scrollify("move", $(this).attr("href"));
    });
});