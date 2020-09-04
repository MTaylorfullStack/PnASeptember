// Arrays

var arr = [3, 4, 5, 6, 7, 8, 9]

console.log(arr[0])
arr[0] = "Hello";
console.log(arr[0]);

arr.pop();
arr.push("hi");

arr.shift();
arr.unshift("new hello");

console.log(arr);
console.log(arr[arr.length - 1])

// Strings

var str = "Hello, this is my wonderful string"
console.log(str[0]);
str += '!';
console.log(str);
console.log(str.length);

str_arr = str.split(' ')

console.log(str_arr)

str_arr[2] = "IS!"

console.log(str_arr.join(' '))

// -   Nth-to-Last
// Return the element that is N-from-array’s-end. Given ([5,2,3,6,4,9,7],3), return 4. If the array is too short, return null.

// declare my function, two parameters; arr, N
// if my array is shorter than N
// return null
// return arr[arr.length-N]

function nthToLast(arr, N) {
    if (arr.length < N) {
        return null
    }
    return arr[arr.length - N]
}

console.log(nthToLast([5, 2, 3, 6, 4, 9, 7, 4, 5, 6, 7, 1], 3))



// -   Zip It
// Create a standalone function that accepts two arrays and combines their values sequentially into a new array, at alternating indices starting with first array. Extra values from either array should be included afterward. Given [1,2] and [10,20,30,40], return new array containing [1,10,2,20,30,40].


// declare a function; arrOne arrTwo
// create a new array
// which array is longer?
// if arrOne is longer
// iterate arrOne length times
// else
// iterate arrTwo length times
// for loop
// if in bounds of smaller array
// push value from array one
// push value from array two
// else
// push value from larger array
// return new array

function zipArrays(arrA, arrB) {
    var zip = [];
    if (arrA.length > arrB.length) {
        var loop = arrA.length;
        // var small = arrB.length - 1;
        // var big = arrA;
    } else {
        var loop = arrB.length;
        // var small = arrA.length - 1;
        // var big = arrB;
    }
    for (i = 0; i < loop; i++) {    
        if (i < arrA.length){        
            zip.push(arrA[i])    
        }    
        if (i < arrB.length){        
            zip.push(arrB[i])    
        }
        
    }
    return zip
}

console.log(zipArrays([1, 2], [10, 20, 30, 40]))

// -   Reverse Word Order
// Create a function that, given a string of words (with spaces), returns new string with words in reverse sequence. 
// Given "This is a test", return "test a is This".

// create a function, given a string
    // create return string
    // loop from the end
        // concatenate values
    // return reversed string

function reverseWordOrderLoop(str){
    var reverse = "";
    var str_arr = str.split(" ");
    for(let i=str_arr.length-1; i>=0; i--){
        reverse += str_arr[i] + " ";
    }
    return reverse
}

console.log(reverseWordOrderLoop("a b c d e f g h i "))