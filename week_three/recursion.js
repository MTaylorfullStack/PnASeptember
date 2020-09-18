// Recursion Overview



// Flood Fill

// Most graphical paint applications have a paintcan fill function that floods part of an image with a certain color. We change the image as if we painted a canvas: a two-dimensional array of integers, where each integer represents a color for that pixel. The canvas Array.length is the Y dimension of our canvas; each spot in the canvas array is a row in our image, with a length equal to our canvas's X dimension. You are given a canvas (2-dimensional array of integers), starting coordinate (2-element array), and the color to flood (integer value). Build floodFill(canvas2D,startXY,newColor)! Replace a pixel's color value only if it is the same color as the origin coordinate and is directly adjacent via X or Y to another pixel you will change. 

// Note: diagonally related pixels are not considered adjacent.

// we examine the cells that are directly (not diagonally) adjacent to startXY, which is[2,2]. If any have a value of 3 (the original value at startXY), we change its value to 1 (newColor) and repeat the process with its directly-adjacent neighbor cells. We repeat this until the entire zone of similarly-colored cells is changed.

// Given a 2D canvas of: 

canvas = [ [3,2,3,4,3],
           [2,3,3,4,0],
           [7,3,3,5,3],
           [6,5,3,4,1],
           [1,2,3,3,3] ]

// A start point of:

start = [2,2];

// And a new color of:

color = 1;

// Our 2D Canvas becomes

canvas = [ [3,2,1,4,3],
           [2,1,1,4,0],
           [7,1,1,5,3],
           [6,5,1,4,1],
           [1,2,1,1,1] ]