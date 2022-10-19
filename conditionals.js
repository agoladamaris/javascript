// CONDITIONAL AND LOGICS 
let rating = 3;
if (rating === 4) {
    console.log('wrong');
}
else if (rating === 3) {
    console.log('right');
};

// Days in a week 
let days = 8;
if (days === 1) {
    console.log('sunday');
}
else if (days === 2) {
    console.log('monday');
}
else if (days === 3) {
    console.log('tuesday');
}
else if (days === 4) {
    console.log('wednesday');
}
else if (days === 5) {
    console.log('thursday');
}
else if (days === 6) {
    console.log('friday');
}
else if (days === 7) {
    console.log('saturday');
}
else {
    console.log('not a valid day found');
}

// Declare password variable and give it a value 
// use if ststement to : 
// check if the password has space 
// ensure that your password has more or 6 charactors 
// console.log if the condition is true  

let password = 'd0123 456';
if (password.length >= 6) {
    if (password.indexOf(' ') === -1) {
        console.log('VALID PASSWORD');
    }
    else {
        console.log('INVALID PASSWORD');
    }
}

if (password.lenth >=6 && password.indexOf(' ') === -1){
    console.log('VALID PASSWORD')
}


// logical operationrs 
let age = 76;
if (age < 6 || age >= 65){
    console.log('you get in for free!');
}
else{
    console.log(`you need to pay ksh. ${50} to eat`);
}
//  Ternary oparator 
let javascript = 'easy';
javascript === 'easy'? 'okay' : 'not true'; 
console.log(javascript);

