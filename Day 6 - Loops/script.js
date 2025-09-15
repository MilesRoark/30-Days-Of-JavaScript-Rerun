//======================== Level 1 ==============================

//########################  Question 1 ############################
// Iterate from 0 to 10 using a for loop, a whileloop and a do whileloop.

//for Loop
let arr1 = [];
for (let i = 0; i < 11; i++) {
  arr1.push(i);
}
console.log(arr1);

//whileLoop method
let arr2 = [];
let a = 0;
while (a <= 10) {
  arr2.push(a);
  a++;
}
console.log(arr2);
//doWhile method
let arr3 = [];
let b = 0;
do {
  arr3.push(b);
  b++;
} while (b <= 10);
console.log(arr3);

//########################  Question 2 ############################

// Iterate from 10 to 0 using a for loop, a whileloop and a do whileloop.
//for Loop method
let arr4 = [];
for (let i = 10; i >= 0; i--) {
  arr4.push(i);
}
console.log(arr4);
//while loop method
let arr5 = [];
let c = 10;
while (c <= 10 && c >= 0) {
  arr5.push(c);
  c--;
}
console.log(arr5);
//do while loop method
let arr6 = [];
let d = 10;
do {
  arr6.push(d);
  d--;
} while (d <= 10 && d >= 0);

console.log(arr6);

//########################  Question 3 ############################
// Iterate from 0 to n using a for loop.
let nthArr = [];
for (let i = 0; i <= 28; i++) {
  nthArr.push(i);
}
console.log(nthArr);

//########################  Question 4 ############################
// Create this pattern in the console using a for loop:
// @
// @@
// @@@
// @@@@
// @@@@@
// @@@@@@
// @@@@@@@

let sym = "@";
let symArr = [];
for (let i = 1; i <= 7; i++) {
  let pattern = sym.repeat(i);
  symArr.push(pattern);
}
console.log(symArr.join("\n"));

//########################  Question 5 ############################
// log() the following in the console using a for loop:
// 0 * 0 = 0
// 1 * 1 = 1
// 2 * 2 = 4
// 3 * 3 = 9
// 4 * 4 = 16
// 5 * 5 = 25
// 6 * 6 = 36
// 7 * 7 = 49
// 8 * 8 = 64
// 9 * 9 = 81
// 10 * 10 = 100
let squaredArr = [];
for (let i = 0; i <= 10; i++) {
  let squares = Math.pow(i, 2);
  squaredArr.push(`${i} * ${i} = ${squares}`);
}
console.log(squaredArr.join("\n"));

//########################  Question 6 ############################
// log() the following pattern using a loop:
// i  i^2  i^3
// 0   0    0
// 1   1    1
// 2   4    8
// 3   9    27
// 4   16   64
// 5   25   125
// 6   36   216
// 7   49   343
// 8   64   512
// 9   81   729
// 10  100  1000

let cubedAndSquared = [];
for (let i = 0; i <= 10; i++) {
  let square = Math.pow(i, 2);
  let cube = Math.pow(i, 3);
  cubedAndSquared.push(`${i},   ${square},   ${cube} `);
}

console.log(cubedAndSquared.join("\n"));

//########################  Question 7 ############################
// Iterate from 0 to 100 with a for Loop and log() only the even numbers.
let evensOnly = [];
for (let i = 0; i < 101; i++) {
  if (i % 2 === 0) {
    evensOnly.push(i);
  }
}
console.log(evensOnly);

//########################  Question 8 ############################
// Iterate from 0 to 100 with a for Loop and log() on the odd numbers.
let oddsOnly = [];
for (let i = 0; i < 101; i++) {
  if (i % 2 !== 0) {
    oddsOnly.push(i);
  }
}
console.log(oddsOnly);

//########################  Question 9 ############################
// Iterate from 0 to 100 with a for Loop and log() only the prime numbers.
const primeNumsArr = [];
for (let i = 2; i < 101; i++) {
  let isPrime = true;
  for (let j = 2; j <= Math.sqrt(i); j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    primeNumsArr.push(i);
  }
}
console.log(primeNumsArr);
//########################  Question 10 ############################
// Iterate from 0 to 100 with a for Loop and add all the numbers. (ans. 5050)
let sum = 0;
for (let i = 0; i < 101; i++) {
  sum += i;
}
console.log(sum);

//########################  Question 11 ############################
// Iterate from 0 to 100 with a for Loop and log() the sum of the even and the sum of all the odd numbers.
let sumOfEvens = 0;
let sumOfOdds = 0;
for (let i = 0; i < 101; i++) {
  if (i % 2 === 0) {
    sumOfEvens += i;
  } else {
    sumOfOdds += i;
  }
}
console.log(`The sum of all the odd numbers is ${sumOfOdds}`);
console.log(`The sum of all the even numbers is ${sumOfEvens}`);

//                      Create an array from the results.
let sumsArr = [];
sumsArr.push(`odd:${sumOfOdds}, Even:${sumOfEvens}`);
console.log(sumsArr);
//########################  Question 12 ############################
// Create a script that generates 5 random numbers.
let randomNumArr = [];
for (let i = 0; i < 5; i++) {
  let randomNumber = Math.floor(Math.random() * 100);
  randomNumArr.push(randomNumber);
}
console.log(randomNumArr);
//########################  Question 13 ############################
// Create a script which generates 5 random numbers, the numbers should be unique.
let randomUniqueArr = [];
while (randomUniqueArr.length < 5) {
  let randomNumber = Math.floor(Math.random() * 120);
  if (!randomUniqueArr.includes(randomNumber)) {
    randomUniqueArr.push(randomNumber);
  }
}
console.log(randomUniqueArr);

//for Loop method:
const randomUniqueArr2 = [];
for (let i = 0; i < 5; ) {
  let randomNumber = Math.floor(Math.random() * 200);
  if (!randomUniqueArr2.includes(randomNumber)) {
    randomUniqueArr2.push(randomNumber);
    i++;
  }
}
console.log(randomUniqueArr2);
//########################  Question 14 ############################
// Create a small script which generates a random id with six characters.
//              Example: 5j2khz
const charArr = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
];
let newId = [];
while (newId.length < 6) {
  let randomIndex = Math.floor(Math.random() * charArr.length);
  if (!newId.includes(charArr[randomIndex])) {
    newId.push(charArr[randomIndex]);
  }
}
console.log(newId.join(""));

//for Loop method:
let newId2 = [];
for (let i = 0; i < 6; ) {
  let randomIndex = Math.floor(Math.random() * charArr.length);
  newId2.push(charArr[randomIndex]);
  i++;
}
console.log(newId2.join(""));
//======================== Level 2 ==============================
//########################  Question 1 ############################
// Create a script which generates an id of however many characters.
//              Ex1: fe3jo1gl124g
//              Ex2: xkqci4utda1lmbelpkm03rba
const charArr2 = ["f", "e", 3, "j", "o", 9, "g", "l", 1, 2, 4, "a", 0];
let xCharArr = [];
while (xCharArr.length < 19) {
  let randomIndex = Math.floor(Math.random() * charArr2.length);
  xCharArr.push(charArr2[randomIndex]);
}
console.log(xCharArr.join(""));

//########################  Question 2 ############################
// Create a script that generates random hexadecimal number
//              Example: #ee33df
const hexCharArr = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  "a",
  "A",
  "b",
  "B",
  "c",
  "C",
  "d",
  "D",
  "e",
  "E",
  "f",
  "F",
];
const hexValArr = [];
while (hexValArr.length < 6) {
  let randomIndex = Math.floor(Math.random() * hexCharArr.length);
  hexValArr.push(hexCharArr[randomIndex]);
}
console.log(`#${hexValArr.join("")}`);
// #C139d1
//########################  Question 3 ############################
// Create a script that generates random rgb color numbers.
//              Example: rgb(134, 163, 242)
let rgbColorsArr = [];
while (rgbColorsArr.length < 3) {
  let randomNum = Math.floor(Math.random() * 256);
  if (!rgbColorsArr.includes(randomNum)) {
    rgbColorsArr.push(randomNum);
  }
}
console.log(`rgb(${rgbColorsArr.join(",")})`);
// rgb(82,1,59)

//########################  Question 4 ############################
// Create an array of the lengths of the country names in the countries array.
//              Example:[7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]
console.log(countries);
const nameLength = [];
for (let country of countries) {
  nameLength.push(country.length);
}
console.log(nameLength);

//########################  Question 5 ############################
// Create the following array of arrays using the countries array
//              [
//                ['Albania', 'ALB', 7],
//                ['Bolivia', 'BOL', 7],
//                ['Canada', 'CAN', 6],
//                ['Denmark', 'DEN', 7],
//                ['Ethiopia', 'ETH', 8],
//                ['Finland', 'FIN', 7],
//                ['Germany', 'GER', 7],
//                ['Hungary', 'HUN', 7],
//                ['Ireland', 'IRE', 7],
//                ['Iceland', 'ICE', 7],
//                ['Japan', 'JAP', 5],
//                ['Kenya', 'KEN', 5]
//              ]
let infoArr = [];
for (let country of countries) {
  let abb = country.slice(0, 3);
  let nameLength = country.length;
  infoArr.push(`[${country}, ${abb}, ${nameLength}]`);
}
console.log(infoArr);

//########################  Question 6 ############################
// Using the countries array, log all the countries with the word "land" in their names to the console. If there are none then log("No country contains the word land")
//              Example:['Finland','Ireland', 'Iceland']
// const countries2 = ["Nigeria", "United States", "Somalia", "Uganda"];
const includesLand = [];
for (let country of countries) {
  if (country.includes("land")) {
    includesLand.push(country);
  }
}
if (includesLand.length > 0) {
  console.log(includesLand);
} else {
  console.log("No country contains the word land.");
}
//########################  Question 7 ############################
// Using the countries array, log all the countries with the string "ia" in their names to the console. If there are none then log("No country contains the character ia.")
//              Example:['Albania', 'Bolivia','Ethiopia']
// const countries3 = ["Ghana", "United States", "Brazil", "Uganda"];
const iaCountries = [];
for (let country of countries) {
  if (country.includes("ia")) {
    iaCountries.push(country);
  }
}
if (iaCountries.length > 0) {
  console.log(iaCountries);
} else {
  console.log("No country contains the characters ia.");
}

//########################  Question 8 ############################
// Find the country with the longest name.
//                  Answer:Ethiopia
let nameLengths = [];

//########################  Question 9 ############################
// Find the country(s) with only 5 characters in their name.
//                  Answer:['Japan', 'Kenya']

//########################  Question 10 ############################
// Find the longest word in the webTechs array.
//              [
//                ["HTML", 4],
//                ["CSS", 3],
//                ["JavaScript", 10],
//                ["React", 5],
//                ["Redux", 5],
//                ["Node", 4],
//                ["MongoDB", 7]
//              ]

//########################  Question 11 ############################
// Using MongoDB, Express, React and Node together is called a MERN stack . Create an array of the acronym MERN.

//########################  Question 12 ############################
// Iterate through the webTechs array using a for() or a for Of() loop and log() the items.

//########################  Question 13 ############################
// Reverse the order of the provided array without using the reverse() method
//          ['banana', 'orange', 'mango', 'lemon']

//########################  Question 14 ############################
// log() all the contents of the webTechs array without putting them in an array.
//          HTML
//          CSS
//          JS
//          REACT
//          NODE
//          EXPRESS
//          MONGODB

//======================== Level 3 ==============================
//########################  Question 1 ############################
// Using the countries2 array:
//          Copy the array without mutating it.
//          Sort the copy and store it in an array called sortedCountries.

//########################  Question 2 ############################
// sort the webTechs array and mernStack array.

//########################  Question 3 ############################
// put all the countries from the countries2 array with the word "land" in their name(s) in a new array.

//########################  Question 4 ############################
// Find the country(s) with the longest name in the countries2 array.

//########################  Question 5 ############################
// Put all the countries with just four letters in their name(s) in their own array.

//########################  Question 6 ############################
// Put all the countries with two or more words in their name(s) in their own array.

//########################  Question 7 ############################
// Create a new array with all the countries in the countries2 array in reverse order and capitalize the country names.
