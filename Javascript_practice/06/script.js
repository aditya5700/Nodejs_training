// let js = 'amazing';
// console.log(20+30+10);

// console.log("Aditya");
// console.log (23);

// let firstName = "Aditya";
// console.log(firstName);

// let myFirstjob ="Programmer";
// console.log(myFirstjob);

// let country = "India";
// let continent = "Asia";
// let population = 1500000000;

// console.log(country);
// console.log(continent);
// console.log(population);

// const now = 2040;
// const ageAditya = now - 2000;
// const agePrachi = now - 1990;
// console.log(ageAditya, agePrachi);

// console.log(ageAditya * 2, agePrachi / 2, agePrachi + ageAditya, 2**3);

// const firstName = 'Aditya';
// const lastName = 'Yadav';
// console.log( firstName + ' ' + lastName);


// let x = 10+ 5;
// x += 10;
// x *= 4;
// x ++;
// x --;
// x --;
// console.log(x);

// console.log(ageAditya > agePrachi);
// console.log(agePrachi >= 80);

// const isFullAge = agePrachi >= 80;

// console.log (now - 1991 > now - 2022);

// const now = 2040;
// const ageAditya = now - 2000;
// const agePrachi = now - 1990;

// console.log (now - 1991 > now - 2010);
// let x, y;
// x = y = 25-10-5;
// console.log(x, y);

// const averageAge = (ageAditya + agePrachi) / 2
// console.log (ageAditya, agePrachi, averageAge);


//First Condition
// let weightMark = 78;
// let weightJohn = 92;
// let heightMark = 1.69;
// let heightJohn = 1.95;

// const BMI = weightMark / (heightMark * heightMark);
// console.log( BMI);

// //second condition

// let weightMark = 95;
// let weightJohn = 85;
// let heightMark = 1.88;
// let heightJohn = 1.76;

// const bmiMark = weightMark / (heightMark * heightMark);
// console.log( bmiMark);
// const bmiJohn = weightJohn / (heightJohn * heightJohn);
// console.log( bmiJohn);

// console.log( bmiMark > bmiJohn);



//Template Literals
// const firstName = 'Aditya';
// const year = 2037;
// const birthYear = 2000;
// const job = 'Developer';

// const aditya = "I'm " + firstName + ', a ' + (year -
//      birthYear) + ' year old ' + job + '!';
//      console.log(aditya);

//      const adityaNew = `I'm ${firstName}, a ${year - 
//     birthYear} year old ${job}!`;
//     console.log(adityaNew);

//     console.log (`Just a regular string`);

//     console.log (`String with \n\
//     multiple \n\
//     lines`);
    
//     console.log (`String 
//     multiple 
//     lines`);



//IF..else statements

// const age = 25;

// if (age >= 18){
//     console.log('Sarah can start driving');
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
// }

// const birthYear = 2000;
// let century;

// if(birthYear <= 2000){
//     century = 20;
// } else {
//     century = 21;
// }

// console.log(century);


// COding challenge #2

// let weightMark = 95;
// let weightJohn = 85;
// let heightMark = 1.88;
// let heightJohn = 1.76;

// const bmiMark = weightMark / (heightMark * heightMark);
// console.log( bmiMark);
// const bmiJohn = weightJohn / (heightJohn * heightJohn);
// console.log( bmiJohn);

// if (bmiMark > bmiJohn){
//     console.log(`Mark's BMI (${bmiMark}) is higher than John's ${bmiJohn} !`);
// } else
//  { console.log(`John's BMI (${bmiJohn}) is higher than Mark's (${bmiMark}) !`);

// }


//Truthy & Falsy Values

// const money = 0;
// if (money){
//     console.log("Don't Spend it All!");
// } else {
//     console.log ("Get a Job!");
// }


// let height = 10;
// if (height) {
//      console.log('Height is defined');
// } else{
//     console.log('Height is not defined');
// }


// == vs ===

// const age = 18;
// if ( age === 18) console.log('Adult');

// if (age == 18) console.log('Adult(loose)');

// const favourite = prompt("Fav no?");
// console.log(favourite);

// if (favourite === 18) 
// {console.log ('cool!');
// } else if (favourite === 7 ){
//     console.log ('7 coool!');
// }
// else if (favourite === '9'){
//     console.log(' coolcoolcool')
// } else {
//     console.log('Nooooo!')
// }

// if (favourite !== 23) console.log('Why not 23');



// Logical Operators

const hasDriversLicense = true;
const hasGoodVision = true;

console.log (hasDriversLicense && hasGoodVision);
console.log (hasDriversLicense || hasGoodVision);
console.log (!hasDriversLicense);

const isTired = true;
console.log (hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log ('Sarah can drive');
} else {
    console.log('Someone else should drive...');
}