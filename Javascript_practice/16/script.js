// function logger (){
//   console.log('My name is Aditya');
// }

// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// function calcAge1(birthYear){
//   return 2023 - birthYear;
// }
// const age1 = calcAge1(1991);

// const calcAge2 = function(birthYear){
//   return 2023 - birthYear;
// }
// const age2 = calcAge2(2000); 

// console.log(age1, age2);


// //Arrow functions 

// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName, lastName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;

//   return `${firstName} ${lastName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1991, 'Aditya', 'Yadav'));
// console.log(yearsUntilRetirement(2000, 'Hritik','Ray'));


// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// }

// const yearsUntilRetirement = function (birthYear, firstName){
// const age = calcAge(birthYear);
// const retirement = 65 - age;

//     if (retirement > 0 ){
//       console.log(`${firstName} retires in ${retirement} years`);
//     return retirement;
// } else {
//   console.log(`${firstName} has already retired`);
//   return -1;
// }
// }

// console.log(yearsUntilRetirement(1991, 'Aditya'));
// console.log(yearsUntilRetirement(2000, 'Hritik'));


// //  Coding challenge

// const calcAverage = (a, b, c) => (a + b + c) / 3;
// console.log(calcAverage(3, 4, 5));

// let scoreDolphines = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(85, 54, 41);

// console.log(scoreDolphines, scoreKoalas);

// const checkWinner = function (avgDolphines, avgKoalas)
// {
//   if (avgKoalas <= avgDolphines){
//       console.log(`Dolphines win (${avgDolphines} vs ${scoreKoalas})`);
//   }
//   else if (avgKoalas >= 2 * avgDolphines){
//     console.log(`Koalas win (${avgKoalas} vs. ${avgDolphines})`);
//   } else {
//     console.log('No team wins!');
//   }
// }

// checkWinner(scoreDolphines, scoreKoalas);

// checkWinner (576, 111);


// Arryas

// const friend1 = 'Aditya';
// const friend2 = 'Hritik';
// const friend3 = 'Prachi';

// const friends = ['Aditya', 'Hritik', 'Prachi'];
// console.log(friends);

// const y = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0], friends[1]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 2]);

// friends[2] = 'Jay';
// console.log(friends);

// const firstName = 'Aditya';
// const aditya = [firstName, 'Yadav', 2037-2000, 'Analyst', friends];

// console.log(aditya);
// console.log(aditya.length);

// const calcAge = function (birthYear){
//   return 2037 - birthYear;
// }

// const years = [1990, 1967, 2000, 2005, 2020];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length -1])];
// console.log(ages);

// const friends = ['Aditya', 'Hritik', 'Prachi'];

// const newLength = friends.push('Jay');
// console.log (friends);
// console.log(newLength);

// friends.unshift('Ria');
// console.log (friends);

// friends.pop();
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift();
// console.log (friends);

// friends.push(23);
// // console.log(friends.indexOf('Hritik'));
// // console.log(friends.indexOf('Prachi'));

// // console.log(friends.includes(23));

// // if (friends.includes('Hritik')){
// //   console.log('You have a friend called Hritik');
// // }


// // // coding challenge

// // const calcTip = function (bill) {
// //   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
// // }

// // const bills = [125, 555, 44];
// // const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// // const totals = [bills[0] + tips [0], bills[1]+ tips [1], bills[2] + tips [2]];

// // console.log(bills, tips, totals);
// // const aditya = {
// //   firstName: 'Aditya',
// //   lastName: 'Yadav',
// //   age: 2023 - 2000,
// //   job: 'Software analyst',
// //   friends: [ 'Hritik','Prachi', 'Ria']
// // }


// // console.log(aditya);


// // const interestedIn = prompt('What do u want to know about Aditya? Choose between firstName, lastName, age, job, and friends.');

// // if(aditya[interestedIn]){
// //   console.log(aditya[interestedIn]);
// // } 
// // else {
// //   console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');

// // }


// // aditya.location = 'India';
// // aditya['instagram'] = '@aditya_0507';
// // console.log(aditya);

// // console.log(`${firstName} has ${aditya.friends.length} friends, and his 
// // best friend is ${aditya.friends[1]} `);


// const aditya = {
//   firstName: 'Aditya',
//     lastName: 'Yadav',
//     age: 2000,
//     job: 'Software analyst',
//     friends: [ 'Hritik','Prachi', 'Ria'],
//     hasDriversLicense: true,

//     calcAge: function(){
//       this.age = 2023 - this.birthYear
//       return this.age;
//     },

 
// // console.log(aditya.calcAge());


// calcAge: function (){
//   this.Age = 2023 - this.birthYear;
//   return this.Age
// },

// getSummary: function () {
//   return `${this.firstName} is a ${this.calcAge()} -year old ${aditya.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license}`;

// }
// }

// console.log(aditya.calcAge());

// console.log(aditya.getSummary());


// // coding challenge

// const john = { 
//   'fullName': 'John Smith',
//   'mass': 92,
//   'height': 1.95,

//   calcBMI : function (){
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   }
// }

// const mark = { 
//   'fullName': 'Mark Miller',
//   'mass': 78,
//   'height': 1.69,

//   calcBMI : function (){
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
// }
// };
//  mark.calcBMI();
//  john.calcBMI();

//  console.log(mark.bmi, john.bmi);


//  if (mark.bmi > john.bmi) {
//   console.log(`${mark.fullName}'s BMI (${mark.bmi})is higher than ${john.fullName}'s BMI (${john.bmi})`
//   )

//  }

//Functions 

filter
const ages = [32, 33, 12, 40];

function checkAge(age) {
  return age > document.getElementById("ageToCheck").value;
}

function myFunction() {
  document.getElementById("demo").innerHTML = ages.filter(checkAge);
}



/// Map

const persons = [
  {firstname : "Malcom", lastname: "Reynolds"},
  {firstname : "Kaylee", lastname: "Frye"},
  {firstname : "Jayne", lastname: "Cobb"}
];

persons.map(getFullName);

function getFullName(item) {
  return [item.firstname,item.lastname].join(" ");

}

 console.log(persons);


push
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");

console.log(fruits);


//sort
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits);

//sorting in ascending order

const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a-b});


const fruits = ["Banana", "Orange", "Apple", "Mango"];
let text = fruits.constructor;

console.log(text);








function Person(){
  this.firstName = 'Aditya';
  this.age = 23;
}

const person1 = new Person();
const person2 = new Person();

Person.prototype.gender = 'male';

console.log(Person.prototype);
console.log(person1.gender);


//prototype

function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.eyeColor = eyecolor;
}

Person.prototype.nationality = "English";



//Keys
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruits.keys();

let text = "";
for (let x of keys) {
  text += x + "<br>";
}