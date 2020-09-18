// Recursion Overview

// write a function that logs a greeting N number of times (accept N as a parameter)

// write a function accepting N
// console.log some greeting
// if N is 0
    // break out of the function
    // return true
// else
    // invoke the function, passing in N-1

function recursiveGreeting(N){
    console.log("Hello! Welcome to recursion!")
    if(N == 0 || N<0){
        return true;
    } else {
        recursiveGreeting(N-1);
    }
}
recursiveGreeting(10)


// Flood Fill

// Most graphical paint applications have a paintcan fill function that floods part of an image with a certain color. We change the image as if we painted a canvas: a two-dimensional array of integers, where each integer represents a color for that pixel. The canvas Array.length is the Y dimension of our canvas; each spot in the canvas array is a row in our image, with a length equal to our canvas's X dimension. You are given a canvas (2-dimensional array of integers), starting coordinate (2-element array), and the color to flood (integer value). Build floodFill(canvas2D,startXY,newColor)! Replace a pixel's color value only if it is the same color as the origin coordinate and is directly adjacent via X or Y to another pixel you will change. 

// Note: diagonally related pixels are not considered adjacent.

// we examine the cells that are directly (not diagonally) adjacent to startXY, which is[2,2]. If any have a value of 3 (the original value at startXY), we change its value to 1 (newColor) and repeat the process with its directly-adjacent neighbor cells. We repeat this until the entire zone of similarly-colored cells is changed.

// Given a 2D canvas of: 


// Our 2D Canvas becomes

// canvas = [ [3,2,1,4,3],
//            [2,1,1,4,0],
//            [7,1,1,5,3],
//            [6,5,1,4,1],
//            [1,2,1,1,1] ]

// declare a function, accepting three parameters; canvas, newColor, start
// store originalColor = color at start
// change the pixel at start to newColor
// if pixel to the right is the same as original color && the pixel to the right is in bounds
    // call the function, canvas, newColor, start, pixel to the rights coordinates as start
// if pixel to the left is the same as original color && the pixel to the right is in bounds
    // call the function; canvas, newColor, left as start 
// if pixel to the top is the same as original color && the pixel to the top is in bounds
    //  call the function; canvas, newColor, top as start
// if pixel to the bottom is the same as original color && the pixel to the bottom is in bounds
    //  call the function; canvas, newColor, bottom as start

function floodFill(canvas, newColor, start){
    var originalColor = canvas[start[0]][start[1]];
    canvas[start[0]][start[1]] = newColor;
    // Checking right pixel
    if(canvas[start[0]][start[1]+1] == originalColor && start[1]+1 < canvas[0].length-1){
        return floodFill(canvas, newColor, [start[0], start[1]+1]);
    }
    // Checking left pixel
    if(canvas[start[0]][start[1]-1] == originalColor && start[1]-1 >= 0){
        return floodFill(canvas, newColor, [start[0], start[1]-1]);
    }
    // Checking above pixel
    if(canvas[start[0]-1][start[1]] == originalColor && start[0]-1 > 0){
        return floodFill(canvas, newColor, [start[0]-1, start[1]]);
    }
    // Checking lower pixel
    if(canvas[start[0]+1][start[1]] == originalColor && start[0]+1 < canvas.length-1){
        return floodFill(canvas, newColor, [start[0]+1, start[1]]);
    }
    return canvas
}

canvas = [ [3,2,3,4,3],
           [2,3,3,4,0],
           [7,3,3,1,3],
           [6,5,3,4,1],
           [1,2,3,3,3] ]

// A start point of:

start = [2,2];

// And a new color of:

color = 1;

console.log(floodFill(canvas, color, start))
