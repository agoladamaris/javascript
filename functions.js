// FUNCTIONS 
// .Reusable Procedure 
//  functions allow us to write reusable, modular code 
//  we define a "chunk" of code that we can then execute at a later Point 
// we use them ALL THE TIME 

// DEFINING A FUNCTION
function grumpus(){
    console.log('ugh...you again...');
    console.log('for the last time...');
    console.log('LEAVE ME ALONE!!!');
}
grumpus(); //calling/executing functions to give results
grumpus();

// INPUT (without argument.)
// function greet(){
// console.log('Hi');
// };
// greet();

// ARGUMENTS 
function greet(name){
    console.log(`hello, ${name}`);
    };
    greet('mike');

    // multiply two numbers 
    function multiply(x,y){
        console.log(x * y);
    } 
multiply (2 ,3);

// find the average of numbers using function 
// function avg(arr){
//     let total = 0;
//     console.log('');
// }
// avg()

// division 
function divide(x,y){
    console.log(x / y);  
}
divide(10,2);

// add two numbers 
function add(x,y,z){
    console.log(x + y + z);  
}
add(10, 4, 12);
// square a number 
function square(x){
    console.log(x*x); 
}
square(10 );


//REASONS WHY WE STORE FUNCTIONS IN VARIABLES
// 1. Functions Are Objects :
//>We can store alot of them in an array.
//>we can put them in a variable
//>we can even pass them around as an argument 
// use console.dir in the browser to prove that function are objects.

//hoisting
function add(x,y){
    return x+ y;
    
};

function multiply(x, y){
    return x* y;
};
function divide(x, y){
    return x/ y;
};
function subtract(x, y){
    return x- y;
};
const studnt = {
science: add
};
console.log(studnt.science(40,45));
const divided ={
    math: divide
};
console.log(divided.math(30,4));

const arry2=[add,subtract,multiply,divide];
for (let calc of arry2){
    let array3=calc(40,6)
console.log(array3);
};
