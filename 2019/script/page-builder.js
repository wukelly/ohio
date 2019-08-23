$(document).ready(function() {
    // create content from nav tabs
    $('.section').each(function(i) {
        var id = $('.section')[i].hash;
        $("#content").append('<div id="'+id.substr(1)+'" class="section-page"></div>');
        $(id).load("sections/"+id.substr(1)+".html");

        var page = window.location.hash.length == 0 ? '#about' : window.location.hash;
        if (id == page) {
            $(id).show();
        } else {
            $(id).hide();
        }
    });
});
