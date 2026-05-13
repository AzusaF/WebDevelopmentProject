function beer() {
    var numOfBottles = 99;
    while (numOfBottles > 0){
        if(numOfBottles === 1){
        console.log(numOfBottles + " bottle of beer on the wall, " + numOfBottles + " bottle of beer.");            
        } else {
        console.log(numOfBottles + " bottles of beer on the wall, " + numOfBottles + " bottles of beer.");
        }
        numOfBottles--;
        if (numOfBottles < 2){
            if (numOfBottles === 1){
                console.log("Take one down and pass it around, " + numOfBottles + " bottle of beer on the wall.")
            } else {
                console.log("Take one down and pass it around, no more bottles of beer on the wall.")
            }
        } else {
        console.log("Take one down and pass it around, " + numOfBottles + " bottles of beer on the wall.")
        }
    }    
    console.log("No more bottles of beer on the wall, no more bottles of beer. \nGo to the store and buy some more, 99 bottles of beer on the wall.")
}
