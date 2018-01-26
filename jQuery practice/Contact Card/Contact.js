$(document).ready(function(){
    $('.btn').click(function(){
        var first_name = $('.firstname').val();
        var last_name = $('.lastname').val();
        var description = $('.description').val();
        var sidecontent = ("<tr><td>" + first_name + "</td><td>" + last_name + "</td><td>" + description + "</td></tr>");
        $(".table_content table").append(sidecontent);
        return false;
    });
});