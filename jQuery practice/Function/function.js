$(document). ready(function(){
    $('.button1').click(function(){
        $(".top p").css("color", "red");      
    });
    $('.button2').click(function(){
        $(".middle p").slideToggle();
    });
    $('.button3').click(function(){
        $(".bottom p").append("I'M PICKLE RICK!");
    });
    $('.button4').click(function(){
        $(".container").slideUp("slow");
    });
    $('.button5').click(function(){
        $(".container").slideDown("slow");
    });
    $('.button6').click(function(){
        $(".Pic").hide();
    });
    $('.button7').click(function(){
        $(".Pic").show();
    });
    $('.button9').click(function(){
        $(".Pic").fadeIn();
    });
    $('.button8').click(function(){
        $(".Pic").fadeOut();
    });
    $('.button10').click(function(){
        $(".Pic").attr("width","500");
    });
    $(".button11").click(function(){
        $(".container").toggle();
    });
    $(".button12").click(function(){
        $("p").before("<p>Over Here!</p>");
    });
    $(".button13").click(function(){
        $("p").after("<p>LOOK AT ME!!!</p>");
    });
    $(".button14").click(function(){
        $("p").html("IM PICKLE <b>RICK!</b>");
    });
    $(".button15").click(function(){
        $("p").text("Hello world!");
    });
    $("#btn1").click(function(){
        $("div").data("greeting", "Hello World");
    });
    $("#btn2").click(function(){
        alert($("div").data("greeting"));
    });
});