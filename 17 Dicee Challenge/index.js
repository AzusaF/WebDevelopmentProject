// var randomNumber1 = Math.floor(Math.random()*6+1);


function random() {
     return Math.floor(Math.random()*6+1);
}
// var random = Math.floor(Math.random()*6);

function img(index, num){
     num = random();
     string = "./images/dice" + num +".png"; 
     document.querySelectorAll("img")[index].setAttribute("src", string);
     return num;
}

function text(n1, n2){
     if (n1 === n2){
          document.querySelector("h1").innerHTML = "Draw!";
     } else if (n1 > n2){
          document.querySelector("h1").innerHTML = "Player1 Wins!";
     } else {
          document.querySelector("h1").innerHTML = "Player2 Wins!";
     }          
}


function onLoad(){
      var num1, num2;
      num1 = img(0, num1);
      num2 = img(1, num2);
      text(num1, num2);
}

document.querySelector("body").addEventListener("load", onLoad);