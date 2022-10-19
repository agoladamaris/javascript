let animal = "dog";
console.log(animal.length);
// access individual charactors in a string 
console.log(animal[3]);

let msg = "i am queen";
console.log(msg);
let yellmsg = msg.toUpperCase( );
console.log(yellmsg);

let angry = "leaVE Me allOnE";
let lower = angry.toLowerCase();
console.log(lower);

// trimming method 
let greeting = "  leave me alone plz    ";
console.log(greeting);
let newGreetings = greeting.trim();
console.log(newGreetings);

// indexOf 
let tvShow = "catdog";

let firstIndex = tvShow.indexOf("cat");
console.log(firstIndex);
let secIndex = tvShow.indexOf("dog");
console.log(secIndex);
let thirdIndex = tvShow.indexOf("z");
console.log(thirdIndex);

// slice 
let str = "lokichoggio";
console.log(str);

let partOfStr = str.slice(2, 6);
console.log(partOfStr);

// replace 
let annoyingLaugh = "teehee so funny! teehee!";
console.log(annoyingLaugh);

let fAnnoyingLaugh = annoyingLaugh.replaceAll("teehee", "haha");
console.log(fAnnoyingLaugh);
// \n used to place words on different lines 
let myName = 'damaris\nmresh';
console.log(myName);
console.log("hello \'world'");
console.log("hello 'world'");

// template literals 
let total = `i am ${20}`;
console.log(total);

let cohortOne = 15;
let cohortTwo = 20;

let femidevs = `we are ${cohortOne + cohortTwo} in total`;
console.log(femidevs);
let drinks = 'soda';
let quality = 2;
let price =  970;
let coca = `we bought 2 crates of soda at Kshs. ${quality * price} in total`;
console.log(coca);
