$(document).keydown(function(e){
   $("h1").text(e.key);
});

$("h1").attr("class", "initial");

$("h1").on("click", function(){
   $("h1").attr("class", "pressed");
   setTimeout(function(){
      $("h1").attr("class", "already-pressed");
   }, 500)
});

$("button").on("click", function(){
   $("h1").slideToggle();
   });

$("h1").on("mouseover", function(){
   $("h1").animate({opacity: 0.5});
   setTimeout(function(){
       $("h1").animate({opacity: 1});
   }, 700)
});