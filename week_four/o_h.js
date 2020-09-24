// Alan is good at breaking secret codes. One method is to eliminate values that lie within a specific known range. Given arr and values min and max, retain only the array values between min and max. Work in-place: return the array you are given, with values in original order. No built-in array functions. .pop() is allowed


// declare a function, 3 params; arr, min, max
// loop through array (i)
    // if arr[i] > max || arr[i] < min
        // begin moving arr[i] to the end
        // loop forward beginning at i
            // swap pairs towards the end of the array
        // pop()
// return arr

function filterRange(arr, max, min){
    for(let i=arr.length-1; i>=0; i--){
        if(arr[i] > max || arr[i] < min){
            for(let j=i; j<arr.length-1; j++){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
            arr.pop();
        }
    }
    return arr
}

console.log(filterRange([2,4,6,8,10,12,14,16,18], 13, 5))


// Create strSubsets(str). Return an array with every possible in-order character subset of str. The resultant array itself need not be in any specific order – it is the subset of letters in each string that must be in the same order as they were in the original string. Given "abc", return an array that includes ["", "c", "b", "bc", "a", "ac", "ab", "abc"] (in any order).


// declare a function; given a string, array, number(0), subset
// if subset not in array
    //  push it into array
// begin loop through string (begin at number + 1)
    // if string[number]+str[i] not in array
        // call our function, passing in string[number]+str[i] as subset
    // elif subset + str[i] not in array
        // call our function, passing in subset+str[i] as subset
// if number == string.length-1
    // return array
// else
    // return function all, number++

function strSubsets(str, arr=[""], number=0, subset=str[0]){
    console.log(number, "current number");
    console.log(subset, "current subset");
    if(number==str.length-1){
        return arr
    }
    if(!arr.includes(subset)){
        arr.push(subset);
    }
    for(let i=number+1; i<str.length; i++){
        console.log(arr, "ARRAY SO FAR")
        console.log("Beginning for loop")
        console.log(`***current value${str[number]}***`)
        if(!arr.includes(str[number]+str[i])){
            console.log(`IF***current subset not in array${str[number]+str[i]}***`)
            return strSubsets(str, arr, number, str[number]+str[i]);
        }
        // this statement is our bug
        else if(!arr.includes(subset+str[i++])){
            console.log(`ELSE IF***current subset not in array${subset+str[i]}***`)
            return strSubsets(str, arr, number, subset+str[i]);
        }
    }
    number++;
    return strSubsets(str, arr, number, subset);
}

console.log(strSubsets("abc"))


// test_arr=[1,2,3,4]

// console.log(!test_arr.includes(2))