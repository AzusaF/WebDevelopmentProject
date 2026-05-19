function fibonacciGenerator (n) {
//Do NOT change any of the code above 
    
    //Write your code here:
    var output = [0, 1];
    var length = output.length
    if(n === 1){
        return [0];
    }else if(n === 2){
        return [0, 1];
    } else{
     while(n != length){
         output.push(output[length -1] + output[length -2]);
         length++;
     }
    }
    //Return an array of fibonacci numbers starting from 0.
    return output;
//Do NOT change any of the code below 
}