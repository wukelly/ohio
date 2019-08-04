$(document).ready(function() {
    // create content from nav tabs
    $('.section').each(function(i) {
        var id = $('.section')[i].hash.substr(1);
        $("#content").append('<div id="'+id+'" class="section-page"></div>');
        $("#"+id).load("sections/"+id+".html");
    });
});
