var yourName = prompt("What is your name?");
var theirName = prompt("What is their name?");

var radomNumber = Math.random()*100;
radomNumber = Math.floor(radomNumber) + 1;
if (radomNumber < 30){
   alert("Your match: " + radomNumber + " %. You may have a better match!");
}else if (radomNumber < 80) {
   alert("Your match: " + radomNumber + " %");
}else {
   alert("Your match: " + radomNumber + " %. You two are great together!");
}
