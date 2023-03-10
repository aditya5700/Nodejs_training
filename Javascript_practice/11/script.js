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


//  Coding challenge

const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

let scoreDolphines = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(85, 54, 41);

console.log(scoreDolphines, scoreKoalas);

const checkWinner = function (avgDolphines, avgKoalas)
{
  if (avgKoalas <= avgDolphines){
      console.log(`Dolphines win (${avgDolphines} vs ${scoreKoalas})`);
  }
  else if (avgKoalas >= 2 * avgDolphines){
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphines})`);
  } else {
    console.log('No team wins!');
  }
}

checkWinner(scoreDolphines, scoreKoalas);

checkWinner (576, 111);