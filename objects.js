// CREATING OBJECTS 
// NOTE:ALL KEYS ARE CONVERTED TO STRINGS BEHIND THE SCENES 

const fitBitData = {
    totalSteps: 308743, 
    totalMiles: 211.3,
    avgCaloriemBurn: '5 of 7',
    avgGoodSleep: '2:13',
    800:'one hundred',
    bestPet: 'dog'
};
fitBitData['bestPet']= 'cat';
fitBitData.totalMiles = 300;
console.log(fitBitData);
console.log(fitBitData.bestPet);
 console.log(fitBitData['avgGoodSleep']);
 fitBitData.totalsteps += 1000;
 fitBitData.totalMiles--;
 console.log(fitBitData);

 const learners ={
    firstName:'darisma',
    lastName:'Agola',
    strengths:['music','cooking'],
    exams:{
        midterm: 90,
        final: 88
    }
 } 
 console.log(learners.strengths[1]);
 console.log(learners.strengths[2]='GBV');
 const finalResults = `the total examination marks is: ${learners.exams.midterm + learners.exams.final}`;
 console.log(finalResults);
 console.log(learners);

//  The total examination marks is 100 


console.log();
const person = {
    age: 45,
cohorts : {
    cohortOne : 15,
    cohortTwo : 19
}
}
// the total number of the two cohorts is : 34 
const person1 = `the total number of the two cohorts is : ${person.cohorts.cohortOne + person.cohorts.cohortTwo}`;
console.log(`${person1}`);
console.log(person);

const firstNum ={
    one : 1,
    two : 2,
    three : 3
}
const secondNum ={
    one : 1,
    two : 2,
    three : 3
}
console.log(typeof firstNum);
console.log(typeof secondNum);
console.log(firstNum === secondNum);
