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
