$(document).ready(function(){
    alert("알림창!");
    console.log("콘솔창알림!");

    $("#show-feature").click(function(){
        $("#feature").css("display","inherit");
    });
});