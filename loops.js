for (let i = 1; i <= 10; i++){
    console.log(i);
}
for (let i = 0; i <= 20; i++){
    console.log(i);
}
for (let i = 20; i >= 0; i--){
    console.log(i);
}
for (let i = 50; i <= 100; i+=10){
    console.log(i);
}

const animal = ['lions', 'tigers', 'bears'];
for (let i = 0; i <animal.length; i++){
    console.log(i, animal[i]);
}
// animal at index 0 is lion 
const animals = ['lion', 'tiger', 'bears'];
for (let i = 0; i <animals.length; i++){
    console.log(`animal at index of ${i} : ${animals[i]}`); 
}
// Nested Loops
let str =  'LOL';
for(let i = 0; i <=4; i++){
    console.log(`Outer : ${i}`);
    for(let j = 0; j <str.length; j++){
        console.log(`inner : $(str[j])`);
    }
}

// WHILE LOOPS 
// It containues to run as long as its test condion is TRUE 

let num = 0;
while (num < 10){
    console.log(num);
    num++;
}
// a common Pattern 
// MATH OBJECTS 
// Math.random  generates random Numbers btn 0 and 0.1 
// Math.floor generates OR MAKEs them whole number from 1 onwards 
// Math.ceil takes the silling number 

let targetNum = Math.floor(Math.random() *10);
let guess =  Math.floor(Math.random()*10);

while (guess !== targetNum){
    console.log(`Guessed ${guess}...incorrect!`);
    guess =    Math.floor(Math.random() * 10);
}
console.log(`CORRECT! Guessed: ${guess} & target was: ${targetNum}`);


