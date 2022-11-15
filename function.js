function factorial(n){
    if (n == 0){
        return 1;
    }
    else{
        return factorial(n - 1)*n;
    }
}
console.log(factorial(5));

// even numbers 
function even(){
//     let numbs = [1, 3, 4, 6, 7, 9];
   
    let numbs = 11;

    if (numbs % 2===0 ){
        console.log('is even');
    }
    else{
        console.log('is odd');
    }
}
even();

// CONVERTER CURRENCY
function currency(){
    let usDollar = 145;
    let kenyaShillings = 1000;

    let toKenyaShilling = usDollar * kenyaShillings
    console.log(`the conversion is ${toKenyaShilling} usd`);
}
currency()

// RETURN VALUES 

function ispurple(color){
    if (color.toUpperCase() === 'purple'){
        return true;
    }
    else{
        return false
    }
}
const newC = ispurple('red');
console.log(newC);

// REFACTORING METHODS
//METHOD 1 

//WRITE a isValidPassword
//it accepts 2 paramenters:password and username
//password must:
//  be atleast 8 charactures
//  can not contain space
//  can not contain username
//if all requirements are met return true
// otherwise false.

function isValidPassword( password, username){
if(password.length < 8){
    return false;
}
if(password.indexOf(" ")!== -1){
    return false;
}
if(password.indexOf(username) !== -1){
    return false;
}
else{
    return true;
}

}
const npassword = isValidPassword('897snsvsvsjs', 'supperate')
console.log(npassword);

// METHOD 2:

function isValidPassword(password, username){
    if (password.length < 8||
    password.indexOf(' ') !== -1 ||
    password.indexOf(username) !== -1){
        return false;
    }
    return true ;
}
const validator = isValidPassword('hjkalskjsj', 'hhsksgdk8')
console.log(validator);

// METHOD 3 
function isValidPassword(password, username){
    const tooShort = password.length< 8;
    const hasSpace = password.indexOf(' ') !== -1;
    const containsUsername = password.indexOf(username) !== -1;
    //apply condition
    if (tooShort || hasSpace || containsUsername) return false;
    return true;
    // or use a simpler method: 
    // if(!tooShort && !hasSpace && !containsUsername)return true;
    // return false
    // or 
    // return  !tooShort && !hasSpace && !containsUsername; 
}
const checker = isValidPassword('gdjshe83meje', 'jdjdsjsdjdey')
console.log(checker);

// PANGRAM : 
// a panngram is a sentence that contains every letter of the alphabet, like:
// "The quick brown fox jumps over the lazy dog"
//Wright a function called ispangram, which checkss to see if a given sentence contains every letter of the alphabet,
// Make sure you ignore string casing 

// SOLUTION 1 
// function ispangram(sentence){
//     let lowerCased = sentence.toLowerCase();
//     for (let char of 'agskduddsksjdgyuee'){
//         if(lowerCased.indexOf(char) === -1){
//             return false;
//         }
//     }
// }
// const pangram = ispangram('the quick brown fox jump over the lazy dog')
// console.log(pangram);
// SOLUTION TWO 

function isPangram(sentence){
    let lowerCased = sentence.toLowerCase();
    for (let char of 'abcdefghijklmnopqrstuvwxyz'){
        if(!lowerCased.includes(char) === -1){
            return false;
        }
    }
    return true;
}
const pangram = isPangram('how quickly daft jumping zebras vex')
console.log(pangram);

// FUNCTION SCOPE 
let bird = 'mandarin duck';
function birdwatch(){
    let bird = 'golden pheasant';
    console.log(bird);
};
// console.log(bird);
birdwatch();

// BLOCK SCOPE 
// PI and circ are scoped to the block 
let radius = 8;
if (radius > 0){
    const PI = 3.14;
    let circ = 2 * PI * radius;
};
console.log(radius);

// FUNCTION OUTER 
function outer(){ //available across all the functions
    let movie = 'accident man';
    console.log(movie);
    function inner(){
    let movie = ' shoot em up';
    console.log(movie.toUpperCase());//available only inside the nested function
    // more nesting 
    function extras(){
        console.log(movie.toUpperCase());//looks for the nearest
    }
    extras();
    }
inner();
}
outer();

// EXPRESSIONS 
const sqquare = function (num) {
    return num * num;
}
sqquare(7);
console.log(sqquare(7));

// FUNCTION CALL TWICE 
function makeBetweenFunc(min,max){
    return function (val){
        return val >= min && val<= max;
    }
}
const inAgeRange = makeBetweenFunc(18, 100);
inAgeRange(17);
inAgeRange(68);
console.log(inAgeRange(17));
console.log(inAgeRange(68));

// CALLBACK FUNCTION 
//ITS a function passed into another function as an argument, which is then invoked inside the outer function .
function catName(name) {
    console.log("My cat's name is " + name);
  }
  
  catName("Tiger");


// FUNCTION SCOOPE 
  // The following variables are defined in the global scope
const num1 = 20;
const num2 = 3;
const name = 'Chamakh';

// This function is defined in the global scope
function multiply() {
  return num1 * num2;
}

multiply(); // Returns 60
console.log(multiply());

// A nested function example
function getScore() {
  const num1 = 2;
  const num2 = 3;

  function add() {
    return `${name} scored ${num1 + num2}`;
  }

  return add();
}

getScore(); // Returns "Chamakh scored 5"
console.log(getScore());


//call function and pass in another function of an argument
//callThrice(cry);
function rage(){
    console.log("I HAVE EVERYTHING");
};
//automatically repeat function a certain number of times 
function repeatNTimes(action, num){
    for (let i=0; i<num; i++){
        action();
    }
}
repeatNTimes(rage,13);
