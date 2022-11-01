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
// or for numbers from 0-9
for(let f=0; f<10; f++){
    console.log(f);
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
// when an outer loop makes one alteration the inner loop makes a complete alteration  
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

let targetNum = Math.floor(Math.random() *10); //GENERATE NUMBERS BETWEEN 0 AND 10 AND CUT OFF THE DECIMAL PART
let guess =  Math.floor(Math.random()*10); //GENERATE NUMBERS BETWEEN 0 AND 10 AND CUT OFF THE DECIMAL PART

while (guess !== targetNum){
    console.log(`Guessed ${guess}...incorrect!`);
    guess = Math.floor(Math.random() * 10);
}
console.log(`CORRECT! Guessed: ${guess} & target was: ${targetNum}`);
// a common pattern 
// let targetNun = Math.floor(Math.random() *8);
// let guess = Math.floor(Math.random() * 10);
// while (true{

// })
// For...OF (variables in loop)
for (let s of 'yell'){
    console.log(s);
}  
let subreddits = ['soccer', 'popheads', 'cringe', 'books'];
for (let sub of subreddits){
    // do this for every item in subreddits arrays 
    console.log(`${sub} - www.reddit.com/r/${sub}`);
}

// nested for of 
const magicSquare = [
    [2,7,6],
    [9,6,1],
    [4,3,8]
];
// accessing the first elements within a nested array only 
// console.log(magicSquare[0]);
// console.log(magicSquare[0][1]);

for (let row of magicSquare){
    // console.log(row);
    let sum = 0;
    for (let num of row){
        // console.log(num);
        sum += num;
    }
    console.log(`row of ${row} sum to ${sum}`);
}

// OBJECTS IN LOOPS 
const moviereviews ={
    amadeus: 10,
    Arrival: 9.5,
    Alien: 9,
    Amelie: 8
};
for (let movies of Object.keys(moviereviews)){
    console.log(movies);
    let score = moviereviews[movies];
    console.log(`i rated ${movies} ${score}/10`);
};
const footballTeams ={
    manU: 6,
    liverpool: 9,
    tortenham: 7,
    lestarcity:3,
    FCleopard: 8

};
for (let football of Object.keys(footballTeams)){
    // console.log(football);
    let score = footballTeams[football];
    console.log( ` ${football} is position ${score} in the champions legue`);
};

// FOR...IN(variable in objects )
// Loop over the key in objects 
const jeopardywinnings = {
    regularPlay : 2522700,
    watsonChallange : 3000000,
    tournameofchampions : 500000,
    battleOfTheDecades : 100000
};
let total = 0;
for (let key in jeopardywinnings){ //to assess keys only
    total += jeopardywinnings[key]; // to assess values of every key
    
}
// console.log(`ken jennings Total winnings :$${total}`);
console.log(total);

// 