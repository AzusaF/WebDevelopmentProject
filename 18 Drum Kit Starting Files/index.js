var length = document.querySelectorAll(".drum").length

for(i = 0; i < length; i++){
      document.querySelectorAll(".drum")[i].addEventListener("click", function(){
      alert("I was clicked!")
   })};