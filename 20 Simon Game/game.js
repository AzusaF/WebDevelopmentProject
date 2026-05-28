// 1. Inside game.js create a new function called nextSequence()
// 2. Inside the new function generate a new random number between 0 and 3, and store it in a variable called randomNumber
// You can use the Chrome console to verify that your code creates random numbers between the correct range.
// 3. At the top of the game.js file, create a new array called buttonColours and set it to hold the sequence "red", "blue", "green", "yellow" .
// 4. Create a new variable called randomChosenColour and use the randomNumber from step 2 to select a random colour from the buttonColours array.
// 5. At the top of the game.js file, create a new empty array called gamePattern.
// 6. Add the new randomChosenColour generated in step 4 to the end of the gamePattern.

var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPettern = [];

function nextSequence(){
   var randomNumber = Math.floor(Math.random()*4);
   var randomChosenColour = buttonColours[randomNumber];
   gamePattern.push(randomChosenColour);
   $("#" + randomChosenColour).animate({opacity: 0}, 100).animate({opacity: 100}, 100);
   playSound(randomChosenColour);
}

$(".btn").on("click", function(e){
   var userChosenColour = $(this).attr("id");
   userClickedPettern.push(userChosenColour);
   console.log(userClickedPettern);
   playSound(userChosenColour);
   animatePress(userChosenColour);
});

function playSound(name){
var audio = new Audio('sounds/' + name + '.mp3');
   audio.play();
}

function animatePress(currentColour){
   $("#" + currentColour).addClass("pressed");
   setTimeout(function(){
      $("#" + currentColour).removeClass("pressed");
   }, 100);
}