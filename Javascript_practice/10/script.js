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

function calcAge1(birthYear){
  return 2023 - birthYear;
}
const age1 = calcAge1(1991);

const calcAge2 = function(birthYear){
  return 2023 - birthYear;
}
const age2 = calcAge2(2000); 

console.log(age1, age2);


//Arrow functions 

const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName, lastName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;

  return `${firstName} ${lastName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Aditya', 'Yadav'));
console.log(yearsUntilRetirement(2000, 'Hritik','Ray'));