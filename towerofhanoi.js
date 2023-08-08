//provided is an implementation of the Tower of Hanoi problem using a recursive approach. The Tower of Hanoi is a classic problem in computer science and mathematics that involves moving a tower of discs from one peg to another, subject to the constraint that a larger disc cannot be placed on top of a smaller disc.
function toh(n,source,destionation,helper){
    if(n == 0){
        return; 
    }
    toh(n-1,source,helper,destionation);
    console.log("Moved Disc "+n+" from "+source + " to " +destionation);
    toh(n-1,helper,destionation,source);
    } 
    toh(3,"a","b","c");




    