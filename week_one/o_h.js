// Swap Pairs
// Swap positions of successive pairs of values of given array. If length is odd, do not change the final element. For [1,2,3,4], return [2,1,4,3]. For example, change input ["Brendan",true,42] to [true,"Brendan",42]. As with all array challenges, do this without using any built-in array methods.

// write a function, given an array (parameter)
    // if arr.length is odd
        // loop is arr.length-1
    // else 
        // loop is arr.length
    // write for loop, increment by 2
        // do the swap
    // return changed arr

function swapPairs(arr){
    // if(arr.length%2==1){
    //     var loop=arr.length-1;
    // } else {
    //     var loop=arr.length;
    // }
    for(let i=0; i<arr.length-1; i+=2){
        console.log("Swapping Pair", arr[i], arr[i+1])
        var temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
        console.log("Current Arr:", arr);
    }
    return arr
}

console.log(swapPairs([2,1,4,3]));

// var arr = [1,2]
// swap, [2,1]
// console.log(arr, "before any swapping")
// var temp = arr[0]
// arr[0] = arr[1]
// console.log(arr, "after changing first value")
// arr[1] = temp
// console.log(arr, "completed the swap")


// -   Reverse Word Order
// Create a function that, given a string of words (with spaces), returns new string with words in reverse sequence. 
// Given "This is a test", return "test a is This".
