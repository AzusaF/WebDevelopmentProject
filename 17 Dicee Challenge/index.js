// var randomNumber1 = Math.floor(Math.random()*6+1);

function random() {
     return Math.floor(Math.random()*6+1);
}
// var random = Math.floor(Math.random()*6);

var num1;
var num2;

function img1(){
     num1 = random();
     string = "./images/dice" + num1 +".png"; 
     document.querySelectorAll("img")[0].setAttribute("src", string);
}

function img2(){
     num2 = random();
     string = "./images/dice" + num2 +".png"; 
     document.querySelectorAll("img")[1].setAttribute("src", string);
}

function text(){
     if (num1 === num2){
          document.querySelector("h1").innerHTML = "Draw!";
     } else if (num1 > num2){
          document.querySelector("h1").innerHTML = "Player1 Wins!";
     } else {
          document.querySelector("h1").innerHTML = "Player2 Wins!";
     }          
}


function onLoad(){
     img1();
     img2();
     text();
}

document.querySelector("body").addEventListener("load", onLoad);