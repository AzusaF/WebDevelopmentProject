var output = [];
var count;
function fizzBuzz(){
   count = output.length+1
   if (count%15 === 0){
      output.push("FizzBuzz"); 
   } else if (count%5 === 0){
      output.push("Buzz");
   } else if (count%3 === 0){
      output.push("Fizz");
   } else {
      output.push(count); 
   }
   console.log(output);
}