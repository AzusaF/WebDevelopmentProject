var guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];

var guestName = prompt("May I have your name, please?");

if (guestList.includes(guestName)){
   alert("Welcome, " + guestName);
}else {
   alert("Sorry, I will see you next time!");
}