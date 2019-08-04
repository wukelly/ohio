$(document).ready(function() {
    var nav = $("#nav")[0],
    navContainer = $("#nav-container")[0],
    content = $("#content")[0];

    var currentPos = 0, previousPos = 0, top;
    $(document).scroll(function() { stickNavbar(); });

    $("#nav-spacer").css("height", window.innerHeight - nav.offsetHeight);
    $(".section-page").css("padding-top", nav.offsetHeight);
    $(window).resize(function() {
        $("#nav-spacer").css("height", window.innerHeight - nav.offsetHeight);
        $(".section-page").css("padding-top", nav.offsetHeight);
    });

    // stick nav bar to the bottom on render
    function stickNavbar() {
        currentPos = $(document).scrollTop();
        if (!top && currentPos > previousPos && currentPos >= window.innerHeight - nav.offsetHeight) {
            stickTop();
        } else if (top && currentPos < previousPos && currentPos <= window.innerHeight - nav.offsetHeight) {
            stickBottom();
        }
        previousPos = currentPos;
    }

    function stickTop() {
        document.body.prepend(nav);
        nav.style.position = "fixed";
        nav.style.top = 0;
        nav.style.bottom = "auto";
        content.style.position = "relative";
        top = true;
    }

    function stickBottom() {
        navContainer.prepend(nav);
        nav.style.position = "absolute";
        nav.style.top = "auto";
        nav.style.bottom = 0;
        top = false;
    }
});