var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPettern = [];

var pressedKeys = [];

var level = 0;
var started = false;

// next level
function nextSequence(){
   userClickedPettern = [];
   level++;
   $("h1").text("Level " +  level);

   var randomNumber = Math.floor(Math.random()*4);
   var randomChosenColour = buttonColours[randomNumber];
   
   gamePattern.push(randomChosenColour);
   
   $("#" + randomChosenColour).animate({opacity: 0}, 100).animate({opacity: 100}, 100);
   playSound(randomChosenColour);
}

// animation and sound
$(".btn").on("click", function(e){
   var userChosenColour = $(this).attr("id");
   userClickedPettern.push(userChosenColour);

   console.log(userClickedPettern);
   
   playSound(userChosenColour);
   animatePress(userChosenColour);
   checkAnswer(userChosenColour.length-1);
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


// initial key down
$(document).on("keydown", function(e){
   console.log(e.key);
   if (!started){
      $("h1").text("Level " +  level);
      nextSequence();
      started = true;
   }
   pressedKeys.push(e.key);
});

function checkAnswer(index){
   if (userClickedPettern[index] === gamePattern[index]){
      console.log("correct");
      if (userClickedPettern.length === gamePattern.length){
         setTimeout(nextSequence(), 1000)
      } 
   } else {
      playSound("wrong");

      $("body").addClass("game-over");
      setTimeout(function(){
         $("body").removeClass("game-over");
      }, 200)

      $("h1").text("Game Over, Press Any Key to Restart");
      startOver();
   }
}

function startOver(){
   level = 0;
   gamePattern = [];
   started = false;
   pressedKeys = [];
}