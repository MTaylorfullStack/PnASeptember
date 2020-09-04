// va declaration
var my_var = 20;

// print statements
console.log("Hello World");

// conditionals
if (my_var > 10){
    console.log("My var is pretty big");
}
else if (my_var == 10){
    console.log("Well, now my var is 10");
} else {
    console.log("my var was something else");
}

// loops
for(let i=0; i<200; i++){
    console.log(i);
}
my_arr = [1,2,3,4,5,6,7];
for (num in my_arr){
    console.log(num);
}
var x = "";
while(x !== "iiii"){
    x+='i'
    console.log(x)
}

// functions
function sayHello(name){
    console.log(`Hello, welcome to the fold ${name}`)
}

sayHello("Odion")

// class
class User{
    constructor(name, age){
        this.name = name
        this.age = age
    }
}

var lance = new User("Lance", 23);
console.log(lance.age)