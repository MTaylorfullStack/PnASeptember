// Intermediate Sums
// You will be given an array of numbers. After every tenth element, add an additional element containing the sum of those ten values. If the array does not end aligned evenly with ten elements, add one last sum that includes those last elements not yet been included in one of the earlier sums. Given the array [1,2,1,2,1,2,1,2,1,2,1,2,1,2], change it to [1,2,1,2,1,2,1,2,1,2,15,1,2,1,2,6].

// declare our function, accepting an array of numbers
// declare a count
// declare a sum
// loop through the array
// sum += value
// increase count
// if count is 10
    // push in sum
    // for loop starting at end of array, ending at i (decrementing)
        // swap values so that sum works it's way towards i
    // reset sum
    // reset count

function intermediateSums(arr){
    var count=0;
    var sum=0;
    var endCondition = arr.length
    for(let i=0; i<=endCondition; i++){
        console.log(i, "This is my current index")
        console.log(arr[i], "This is the current value")
        sum += arr[i];
        count++;
        if(count == 10){
            arr.push(sum);
            for(let j=arr.length-1; j>i+1; j--){
                var temp=arr[j];
                arr[j] = arr[j-1];
                arr[j-1] = temp;
            }
            sum=0;
            count=0;
            i++;
        }
        if(i == endCondition-1 && count < 10){
            arr.push(sum)
        }
    }
    return arr
}

console.log(intermediateSums([1,2,1,2,1,2,1,2,1,2,1,2,1,2]))