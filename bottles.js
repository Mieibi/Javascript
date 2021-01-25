function bottleSong(){
    var n = 99;
    var count = 0;
    while (count < 100){
        var subtract = n - 1;
        if (n === 1){
            console.log (n + " bottle of beer on the wall, " + n + " bottle of beer." + "\n" + "Take one down and pass it around, no more bottles of beer on the wall");
        } else if (n === 0){
            console.log ( "No more bottles of beer on the wall bottles of beer on the wall, no more bottles of beer." + "\n" + "Go to the store and buy some more, " + count + " bottles of beer on the wall");
        } else {
            console.log (n + " bottles of beer on the wall, " + n + " bottles of beer." + "\n" + "Take one down and pass it around," + subtract + " bottles of beer on the wall");
        }
        count++;
        n--;
    }
}

bottleSong();