$(document).ready(function(){

    $('.sidebar').click(function(){
        $(this).toggleClass("sidebar-show");
    });

    $('.close-btn').click(function(){
        console.log("This was clicked");
        $('.sidebar').removeClass("sidebar-show");
    });
})