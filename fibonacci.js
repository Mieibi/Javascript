function fibonacciGenerator (n) {
    //Do NOT change any of the code above 👆
        
        //Write your code here:
    
        var output;
        if (n === 1){
            output = [0];
        } else if (n === 2){
            output = [0 , 1];
        } else{
            output = [0,1];
            while (n !== output.length){
               var newNum = output[(output.length - 1)] + output[(output.length - 2)];
               output.push(newNum);
            }
        }
        return output;
        
        //Return an array of fibonacci numbers starting from 0.
        
    //Do NOT change any of the code below 👇
    }
    