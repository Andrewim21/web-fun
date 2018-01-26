$(document).ready(function(){
    $('.form').submit(function(){
        console.log($(this).serialize());
        return false
    });
    $('.button').click(function(){
        $('.form').submit();
        $('.table').append('<tr><td>' + $('input[name="First Name"]').val() + '</td><td>'
        + $('input[name="Last Name"]').val() + '</td><td>'
        + $('input[name="Email Address"]').val() + '</td><td>'
        + $('input[name="Phone #"]').val() + '</td></tr>');
    });
});