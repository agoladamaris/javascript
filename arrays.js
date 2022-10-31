// CREATING ARRAYS 
let students = [];
console.log(students);
// an array of strings 
let color = ['red','orange','yellow'];
console.log(color);
// an array of numbers 
let lottoNums = [19,22,56,12.51];
console.log(lottoNums);
// a mixed array 
let stuff = [true, 68, 'cat', null];
stuff[3] = 'milk';
stuff.push ('busia');
stuff.push(4);
stuff.push(true);
stuff.pop();
stuff.pop();
stuff.shift();
stuff.unshift('femi');
console.log(stuff.length);
console.log(stuff);


let footballTeams = ['manchestar', 'chelsea', 'arsenal'];
let numOfTeams = [4, 6, 1];

let merged = footballTeams.concat(numOfTeams);
let newlymerged = numOfTeams.concat(footballTeams);
console.log(newlymerged);
console.log(merged);

// uniform arrays
// JOIN  
let items = [1, 2, 'fruits', 'false', 'true'];
console.log(items.join('-'));
let items1 = [1, 2, 'fruits', 'false', 'true'];
console.log(items1.join('#'));
let items2 = [1, 2, 'fruits', 'false', 'true'];
console.log(items2.join('@'));
// includes checks if the item named is in the text to bring results as true or false 
console.log(items2.includes('fruits'));
// reverse : it reverse item from the back inside an array.
let reversed = items2.reverse();
console.log(reversed);
// slice 
let sliced = items.slice(1, 4);
console.log(sliced);

// SPLICE 
let splicer = ['orange', 'mangoes','watermelon', 'avocado', 'apples']
console.log(splicer);
// removing an item using splicer 
splicer.splice(2, 1);
splicer.splice(2, 2);
console.log(splicer);

// add items using splice 
splicer.splice(0, 0, 'grapes', 'lemon',false);
console.log(splicer);
// REPLACE USING SPLICE 
splicer.splice(0, 1, 'bananas',);
console.log(splicer);

// SORTING ARRAYS 
let sorter = ['crocodile', 'lizard', 'chamelons', 'salamander'];
let sorted = sorter.sort();
console.log(sorted);

// NESTING ARRAYS 
const colors = [
    ['red', 'crimson'],
    ['orange', 'dark orange'],
    ['yellow', 'golden rod'],
    ['green', 'olive'],
    ['blue', 'navy blue'],
    ['purple', 'orchid'],
]
console.log(colors[0]);
console.log(colors[0][1]);
console.log(colors[4][1]);
// add a child array inside aparent array 
colors[6] = ['me', 'you'];
colors.splice(6, 0, ['home', 'school']);
colors.push(['damar', 'agola']);
console.log(colors);

// concuatenated 
let concatenated = colors[2].concat(colors[4]).reverse();
console.log(concatenated.join('-').toUpperCase());
