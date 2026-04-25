var yourName = prompt("What is your name?");
var theirName = prompt("What is their name?");

var rodomNumber = Math.random()*100;
rodomNumber = Math.floor(rodomNumber) + 1;
if (rodomNumber < 30){
   alert("Your match: " + rodomNumber + " %. You may have a better match!");
}else if (rodomNumber < 80) {
   alert("Your match: " + rodomNumber + " %");
}else {
   alert("Your match: " + rodomNumber + " %. You two are great together!");
}
