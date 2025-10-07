//*************************LEVEL 1******************************
//#########################QUESTION 1###########################
// Declare a function fullName that prints out your full name.
function fullName(name) {
  return name;
}
console.log(fullName("Miles Roark"));
//#########################QUESTION 2###########################
// Add a firstName and a lastName parameter to the previous function.
function firstAndLast(first, last) {
  return `My name is ${first} ${last}`;
}
console.log(firstAndLast("Jane", "Bond"));
//#########################QUESTION 3###########################
// Declare a function called addNumbers that takes two parameters and returns the sum.
function addNumbers(a, b) {
  return a + b;
}
console.log(addNumbers(42, 12));
//#########################QUESTION 4###########################
// area = length * width. Write an areaOfRectangle function.
function areaOfRectangle(length, width) {
  let area = length * width;
  return `${area} m\u00B2`;
}
console.log(areaOfRectangle(10, 2));

//#########################QUESTION 5###########################
// perimeter = 2 * [length + width]. Write a perimeterOfRectangle function.
function perimeter(length, width) {
  let perimeter = 2 * (length + width);
  return `${perimeter} m`;
}
console.log(perimeter(10, 2));

//#########################QUESTION 6###########################
// volume = length * width * height. write a volumeOfRectPrism function.
function volume(length, width, height) {
  let volume = length * width * height;
  return `${volume} m\u00B3`;
}
console.log(volume(10, 2, 5));

//#########################QUESTION 7###########################
// area[circle] = pi * r * r. write an areaOfCircle function.
function areaOfACircle(radius) {
  let area = Math.round(Math.PI * Math.pow(radius, 2));
  return `${area} m\u00B2`;
}
console.log(areaOfACircle(2));

//#########################QUESTION 8###########################
// circumference = 2 * pi * r. write a circumOfCircle function.
function circumference(radius) {
  let circumference = Math.round(2 * Math.PI * radius);
  return `${circumference} m`;
}
console.log(circumference(4));

//#########################QUESTION 9###########################
// density = mass / volume. write a function that calculates density.{
function density(mass, volume) {
  let density = Math.round(mass / volume);
  return `${density} kg/m\u00B3`;
}
console.log(density(10, 6));

//#########################QUESTION 10###########################
// speed = distance / time. write a function that calculates speed.
function speed(distance, time) {
  let speed = distance / time;
  return `${speed}km/hr`;
}
console.log(speed(10, 2));

//#########################QUESTION 11###########################
// weight = mass * gravity. write a function that calculates weight.
function weight(mass, gravity = 9.8) {
  let weight = mass * gravity;
  return `${weight} kg`;
}
console.log(weight(120));
//#########################QUESTION 12###########################
// fahrenheit = [oC * 9/5] + 32. write a celciusToFarenheit converter function.
function celciusToFahrenheit(temp) {
  let farenheit = (temp * 9) / 5 + 32;
  return `${farenheit} deg fahrenheit`;
}
console.log(celciusToFahrenheit(30));

//#########################QUESTION 13###########################
// BMI = (weight in pounds / [height in inches]²) x 703. Write a weightGroup function that uses your BMI to determine your weight group.
// 18.5 or lower BMI = Underweight
// 18.5 to 24.9 BMI = Normal
// 25 to 29.9 BMI = Overweight
// 30 or higher BMI = Obese
function weightGroup(weight, height) {
  let BMI = (weight / Math.pow(height, 2)) * 703;
  if (BMI < 18.5) {
    return `Your BMI is ${BMI}, that makes you underweigth`;
  } else if (BMI >= 18.6 && BMI <= 24.9) {
    return `Your BMI is ${BMI}, your weight is okay.`;
  } else if (BMI >= 25 && BMI <= 29.9) {
    return `Your BMI is ${BMI}, that makes you overweight`;
  } else {
    return `Your BMI is ${BMI}, that makes you obese`;
  }
}
console.log(weightGroup(180, 68));

//#########################QUESTION 14###########################
// write a checkSeason function. It takes month as the parameter and returns the corresponding season.
function checkSeason(month) {
  const winterMonths = ["December", "January", "February", "March"];
  const springMonths = ["April", "May", "June"];
  const summerMonths = ["July", "August", "September"];
  const fallMonths = ["October", "November"];

  if (winterMonths.includes(month)) {
    return "It's winter, don't forget your jacket.";
  } else if (springMonths.includes(month)) {
    return "It's Spring, touch some grass.";
  } else if (summerMonths.includes(month)) {
    return "It's Summer, find a beach.";
  } else {
    return "It's fall, check out the scenery.";
  }
}
console.log(checkSeason("August"));

//#########################QUESTION 15###########################
// Write a function findMax. It takes three arguments and finds the max value. Don't use Math.max.
function findMax(a, b, c) {
  if (a === b && a === c) {
    return "These are of equal value.";
  } else if (a > b && a > c) {
    return "a is the max value";
  } else if (b > a && b > c) {
    return "b is the max value";
  } else {
    return "c is the max value";
  }
}
console.log(findMax(30, 10, 10));

//********************************LEVEL 2*******************
//#########################QUESTION 1###########################
// ax + by + c = 0. Using this formula write a solveLinEquation function.
function solveLinEquation(a, b, c) {
  if (b === 0) {
    return "unsolvable please input actual values.";
  }

  let slope = -a / b;
  let intercept = -c / b;

  return `y = ${slope}x + ${intercept}`;
}
console.log(solveLinEquation(10, 3, 8));
//#########################QUESTION 2###########################
// ax^2 + bx + c = 0. Using this formula write a solveQuadEquation function.
//  formula: x = (-b +- ​​Math.sqrt(Math.pow(b, 2) - 4ac))/ 2a
function solveQuadEquation(a, b, c) {
  let discriminant = Math.pow(b, 2) - 4 * a * c;
  if (discriminant < 0) {
    return "no real roots.";
  }

  let squareOfDiscriminant = Math.sqrt(discriminant);
  let root1 = ((-b + squareOfDiscriminant) / 2) * a;
  let root2 = ((-b - squareOfDiscriminant) / 2) * a;

  return `{${root1}, ${root2}}`;
}
console.log(solveQuadEquation(1, 4, 4));
console.log(solveQuadEquation(2, 5, 3));
//#########################QUESTION 3###########################
// Declare a printArray function. It takes an array as it's parameter and prints out the values of the array.
function printArray(arr) {
  return arr;
}
console.log(printArray([1, 2, 4, 6, 5]));

//#########################QUESTION 4###########################
// write a showDateTime function using the Date object. 09/26/ 2025 04:50.
function showDateTime() {
  const today = new Date();

  let month = String(today.getMonth() + 1).padStart(2, 0);
  let day = String(today.getDate()).padStart(2, 0);
  let year = today.getFullYear();
  let hour = String(today.getHours()).padStart(2, 0);
  let minutes = String(today.getMinutes()).padStart(2, 0);

  return `${month}/${day}/${year}/${hour}/${minutes}`;
}
console.log(showDateTime());
//#########################QUESTION 5###########################
// Swap x and y using a swapValues function.
// (43,53) // x => 43, y => 53
function swapValues(x, y) {
  return [y, x];
}
console.log(swapValues(43, 53));

//#########################QUESTION 6###########################
// Declare a reverseArray function. It takes an array as a parameter and returns the array reversed. Don't use the reverse method.
function reverseArray(arr) {
  let reversed = [];
  for (i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}
console.log(reverseArray(["pencil", "pen", 1, 53, null, "house"]));
//#########################QUESTION 7###########################
// write a capitalizeArray function.
function capitalizeArray(arr) {
  let capitalized = [];
  for (let item of arr) {
    if (typeof item === "string") {
      capitalized.push(item.toUpperCase());
    }
  }
  return capitalized;
}
console.log(capitalizeArray(["pencil", "pen", 1, 53, null, "house"]));
//#########################QUESTION 8###########################
// Declare a function addItem that takes an item as a parameter and returns it as an array.
let itemArr = [];
function addItem(item) {
  itemArr.push(item);
  return itemArr;
}
console.log(addItem("pink"));
console.log(addItem("cow"));
console.log(addItem(2));
//#########################QUESTION 9###########################
// Declare a removeItem function. It takes index as a parameter and removes the item at the index from the array.
let testArr = ["axe", "staff", 1, 49, "armour"];
function removeItem(index) {
  let newTestArr = testArr.splice(index, 1);
  return testArr;
}
console.log(removeItem(3));
console.log(removeItem(2));
//#########################QUESTION 10###########################
// Declare a sumOfNumbers function. It takes number as a parameter and adds all the numbers in that range.
function sumOfNumbers(num) {
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    sum += i;
  }
  return sum;
}
console.log(sumOfNumbers(10));
console.log(sumOfNumbers(2));

//#########################QUESTION 11###########################
// Declare a sumOfOdds function. It takes number as a parameter and adds all the odd numbers in that range.
function sumOfOdds(num) {
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    if (i % 2 !== 0) {
      sum += i;
    }
  }
  return sum;
}
console.log(sumOfOdds(10));
//#########################QUESTION 12###########################
// Declare a sumOfEvens function. It takes number as a parameter and adds all the even numbers in that range.
function sumOfEvens(num) {
  sum = 0;
  for (let i = 0; i <= num; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  return sum;
}
console.log(sumOfEvens(10));

//#########################QUESTION 13###########################
// Declare an evenAndOdds function. It takes a positive Integer as a parameter and returns the number of evens and odds in that range.
function evensAndOdds(number) {
  if (number < 0) {
    return "positive integers only.";
  }
  let evens = [];
  let odds = [];
  for (let i = 0; i <= number; i++) {
    if (i % 2 === 0) {
      evens.push(i);
    } else {
      odds.push(i);
    }
  }
  return `There are ${evens.length} even numbers and ${odds.length} odd numbers in that range.`;
}
console.log(evensAndOdds(10));
console.log(evensAndOdds(25));
//#########################QUESTION 14###########################
// Write a function that takes any number of arguments and returns the sum of the arguments.
function multipleArgs() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
console.log(multipleArgs(1, 2, 3, 4, 5));

//#########################QUESTION 15###########################
// Write a randomUserIpGenerator function.
let ipArr = [];
function randomUserIpGen() {
  for (let i = 0; i < 4; i++) {
    let randomNumber = Math.floor(Math.random() * 255);
    ipArr.push(randomNumber);
  }
  return ipArr.join(".");
}
console.log(randomUserIpGen());

//#########################QUESTION 16###########################
// Write a randomMacAddressGenerator function.
const useableChars = [
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
];
const macAddArr = [];
function randomMacAddressGenerator() {
  for (let i = 0; i < 6; i++) {
    let randomIndex1 = Math.floor(Math.random() * useableChars.length);
    let randomIndex2 = Math.floor(Math.random() * useableChars.length);
    macAddArr.push(
      `${useableChars[randomIndex1]}${useableChars[randomIndex2]}`
    );
  }
  return macAddArr.join(":");
}

console.log(randomMacAddressGenerator());

//#########################QUESTION 17###########################
// Write a randomHexNumberGenerator function.
const hexCharsArr = [
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
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];
const randomHexArr = [];
function randomHexNumberGenerator() {
  for (let i = 0; i < 6; i++) {
    let randomIndex = Math.floor(Math.random() * hexCharsArr.length);

    randomHexArr.push(hexCharsArr[randomIndex]);
  }
  return `#${randomHexArr.join("")}`;
}
console.log(randomHexNumberGenerator());

//#########################QUESTION 18###########################
// Write a userIdGenerator function. The id should be seven characters long.
const possibleIdChars = ["a", "c", "e", "x", "m", "q", 0, 1, 2, 3, 4, 5];
const userId = [];
function userIdGenerator() {
  for (let i = 0; i < 7; i++) {
    let randomIndex = Math.floor(Math.random() * possibleIdChars.length);

    userId.push(possibleIdChars[randomIndex]);
  }
  return `User:${userId.join("")}`;
}
console.log(userIdGenerator());
//******************************LEVEL 3*************************
//#########################QUESTION 1###########################
// write a userIdGeneratedByUser function. Using prompt() get the number of characters and the number of id's to be generated.
// const charsForId = ["a", "A", "b", "B", "c", "C", "1", "2", "3", "4", "5", "6"];
// function userIdGeneratedByUser() {
//   let length = prompt("Please enter the length of the ids");
//   let amount = prompt("Please enter the number of ids to generate.");
//   let lengthCheck = Number(length);
//   let amountCheck = Number(amount);
//   if (!lengthCheck || !amountCheck || lengthCheck <= 0 || amountCheck <= 0) {
//     alert("Please enter a valid number for amount and length");
//     return [];
//   }

//   let userIds = [];
//   for (let i = 0; i < amountCheck; i++) {
//     let generatedIds = [];
//     for (let j = 0; j < lengthCheck; j++) {
//       let randomIndex = Math.floor(Math.random() * charsForId.length);
//       generatedIds.push(charsForId[randomIndex]);
//     }
//     userIds.push(generatedIds.join(""));
//   }
//   return userIds;
// }
// console.log(userIdGeneratedByUser());

//#########################QUESTION 2###########################
// Write an rgbColorGenerator function.
function rgbColorGenerator() {
  let rgbArr = [];
  for (let i = 0; i < 3; i++) {
    let randomNumbers = Math.floor(Math.random() * 255);
    rgbArr.push(randomNumbers);
  }
  return `rgb(${rgbArr.join(",")})`;
}
console.log(rgbColorGenerator());

//#########################QUESTION 3###########################
// Write an arrayOfHexaColors function that return an array of hexadecimal colors.
const hexCharsArr2 = [
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
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];
function arrayOfHexaColors(amount) {
  let hexaArr = [];
  for (let i = 0; i < amount; i++) {
    let hexVals = [];
    for (let j = 0; j < 6; j++) {
      let randomIndex = Math.floor(Math.random() * hexCharsArr2.length);
      hexVals.push(hexCharsArr2[randomIndex]);
    }
    hexaArr.push(`#${hexVals.join("")}`);
  }
  return hexaArr;
}
console.log(arrayOfHexaColors(4));
//#########################QUESTION 4###########################
// Write an arrOfRgbColors function which returns an array of rgb colors.
function arrOfRgbColors(amount) {
  let rgbArr = [];
  for (let i = 0; i < amount; i++) {
    let numberStore = [];
    for (let j = 0; j < 3; j++) {
      let randomNumber = Math.floor(Math.random() * 256);
      numberStore.push(randomNumber);
    }
    rgbArr.push(`rgb(${numberStore})`);
  }
  return rgbArr;
}
console.log(arrOfRgbColors(2));
//#########################QUESTION 5###########################
// Write a convertHexaToRgb function.
function convertHexaToRgb(value) {
  let cleanedVal = value.replace("#", "");

  let red = parseInt(cleanedVal.substring(0, 2), 16);
  let green = parseInt(cleanedVal.substring(2, 4), 16);
  let blue = parseInt(cleanedVal.substring(4, 6), 16);

  return `rgb(${red}, ${green}, ${blue})`;
}
console.log(convertHexaToRgb("#4d23fe"));

//#########################QUESTION 6###########################
// Write a convertRgbToHexa function.
function convertRgbToHexa(r, g, b) {
  let redHex = r.toString(16);
  let greenHex = g.toString(16);
  let blueHex = b.toString(16);
  return `#${redHex}${greenHex}${blueHex}`;
}
console.log(convertRgbToHexa(122, 43, 75));
//#########################QUESTION 7###########################
// Write a generateColors functions which generates any number of Hexadecimal or rgb colors.
const hexCharsArr3 = [
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
];
function generateColors(type, amount) {
  if (amount <= 0 || !Number.isInteger(amount)) {
    return "Please enter whole numbers for the amount.";
  }

  type = type.toLowerCase();

  let colorArr = [];
  for (let i = 0; i < amount; i++) {
    if (type === "hexa") {
      let hexArr = [];
      for (let j = 0; j < 6; j++) {
        let randomIndex = Math.floor(Math.random() * hexCharsArr3.length);
        hexArr.push(hexCharsArr3[randomIndex]);
      }
      colorArr.push(`#${hexArr.join("")}`);
    }
    if (type === "rgb") {
      let r = Math.floor(Math.random() * 256);
      let g = Math.floor(Math.random() * 256);
      let b = Math.floor(Math.random() * 256);
      colorArr.push(`rgb(${r}, ${g}, ${b})`);
    }
  }
  return colorArr;
}
console.log(generateColors("RGB", 3));
//#########################QUESTION 8###########################
// Write a shuffleArray function. That takes an array and shuffles it.
function shuffleArray(arr) {
  let shuffledArr = [...arr];
  for (let i = shuffledArr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [shuffledArr[i], shuffledArr[j]] = [shuffledArr[j], shuffledArr[i]];
  }
  return shuffledArr;
}
console.log(shuffleArray([1, 3, 5, 6, 6, 7, 8]));
//#########################QUESTION 9###########################
// Write a factorial function. It takes a whole number as a parameter and returns it's factorial.
function calcFactorial(num) {
  let sum = 1;
  for (let i = 2; i <= num; i++) {
    sum *= i;
  }
  return sum;
}
console.log(calcFactorial(5));
//#########################QUESTION 10###########################
// Write an isEmpty function that checks if it's parameter is empty or not.
function isEmpty(params) {
  if (params == null) {
    return true;
  }
  if (typeof params === "string") {
    return params.trim().length === 0;
  }
  if (Array.isArray(params)) {
    return params.length === 0;
  }
  return false;
}
console.log(isEmpty());
//#########################QUESTION 11###########################
// Write a sum function that returns the sum of it's parameters.
function sumOfParams() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += Number(arguments[i]) || 0;
  }
  return sum;
}
console.log(sumOfParams("1", "2", 3, 4, "5"));
//#########################QUESTION 12###########################
// Write a sumOfArrayItems function that checks if all the contents of array are number types. If yes return the sum, else return "Not all items are numbers."
function sumOfArrayItems(arr) {
  if (!Array.isArray(arr)) {
    return "Please use an array.";
  }
  let sum = 0;
  for (let item of arr) {
    if (typeof item !== "number") {
      return "Not all items are numbers.";
    } else {
      sum += item;
    }
  }
  return sum;
}

console.log(sumOfArrayItems([1, 2, "pencils", "cows", "5"]));
//#########################QUESTION 13###########################
// Write a average function that takes an array and finds the average of the items. Make sure to perform some type checking.
function averageOfArr(arr) {
  if (!Array.isArray(arr)) {
    return "Please use an array.";
  }
  if (arr.length === 0) {
    return "The array is empty.";
  }
  let sum = 0;
  for (let item of arr) {
    if (typeof item !== "number") {
      return "Only numbers can be averaged.";
    } else {
      sum += item;
    }
  }
  return sum / arr.length;
}
console.log(averageOfArr([1, 2, 3, 4, 5]));
//#########################QUESTION 14###########################
// Write a modifyArray function that takes an array as a parameter, removes the fifth item and returns the new array. If the length of the array is less than five it returns "Item not found".
function modifyArray(arr) {
  if (!Array.isArray(arr)) {
    return "Please use an array.";
  }
  if (arr.length <= 0) {
    return "The array is empty.";
  }
  if (arr.length < 5) {
    return "Item not found.";
  }
  let copyArr = [...arr];
  let modified = copyArr.splice(5, 1);
  return copyArr;
}
console.log(modifyArray(["pens", "cows", 1, 3, 12, "tail", "trance"]));
//#########################QUESTION 15###########################
// Write an isPrime function which checks if a number is prime.
function isPrime(num) {
  if (typeof num !== "number" || !Number.isInteger(num) || num < 2) {
    return false;
  }
  if (num === 2) {
    return true;
  }
  if (num % 2 === 0) {
    return false;
  }

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(isPrime(13));
//#########################QUESTION 16###########################
// Write a function that checks if all the items in an array are unique.
function uniqueCheck(arr) {
  let duplicates = [];
  let result;
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) {
      duplicates.push(arr[i]);
    }
  }
  result = `Duplicates found: ${duplicates.length}, At: ${duplicates.join(
    " , "
  )}`;
  return result;
}
console.log(uniqueCheck([1, 2, 2, "Pencil", "cows", 1, 4, 6, "cows"]));
//#########################QUESTION 17###########################
// Write a function that checks if all the items in an array are of the same data type.
function DataTypeChecker(arr) {
  let datatypeArr = [];
  let result;
  for (let item of arr) {
    datatypeArr.push(typeof item);
  }
  let typeArr = new Set(datatypeArr);
  console.log(typeArr);
  if (typeArr.size > 1) {
    result = "All items are not of the same type.";
  } else {
    result = "All items are of the same type.";
  }
  return result;
}
console.log(DataTypeChecker([1, 2, "Pencil", true, "cows"]));
//#########################QUESTION 18###########################
// Write an isValidVariable that checks if a variable is valid or not.
function isValidVariable(value) {
  const validVarRegex = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;
  const reservedWords = [
    "break",
    "case",
    "catch",
    "class",
    "const",
    "continue",
    "debugger",
    "default",
    "delete",
    "do",
    "else",
    "enum",
    "export",
    "extends",
    "false",
    "finally",
    "for",
    "function",
    "if",
    "implements",
    "import",
    "in",
    "instanceof",
    "interface",
    "let",
    "new",
    "null",
    "package",
    "private",
    "protected",
    "public",
    "return",
    "static",
    "super",
    "switch",
    "this",
    "throw",
    "true",
    "try",
    "typeof",
    "var",
    "void",
    "while",
    "with",
    "yield",
  ];
  if (!validVarRegex.test(value)) {
    return {
      isValid: false,
      reason: "Contains invalid characters.",
    };
  }

  if (reservedWords.includes(value)) {
    return {
      isValid: false,
      reason: "That's a reserved word.",
    };
  }
  return { isValid: true, reason: "That is a valid variable." };
}
console.log(isValidVariable("DataTypeChecker"));

//#########################QUESTION 19###########################
// Write a function which returns an array of seven unique random numbers between 0 and 9.
function uniqueNumGen(amount) {
  if (amount > 10) {
    return "Amount cannot be greater than 10.";
  }
  let uniqueNums = [];
  for (let i = 0; i < amount; ) {
    let randomNumber = Math.floor(Math.random() * 10);
    if (!uniqueNums.includes(randomNumber)) {
      uniqueNums.push(randomNumber);
      i++;
    }
  }
  return uniqueNums;
}
console.log(uniqueNumGen(7));
//#########################QUESTION 20###########################
// Write a reverseCountries function that copies the countries array and reverses the original.
const newCountriesArr = [
  "Nigeria",
  "United States",
  "China",
  "India",
  "Palestine",
  "England",
  "France",
  "Mali",
  "Gabon",
];
function reverseCountries(arr) {
  let copiedArr = [...arr];
  console.log(copiedArr);

  return arr.reverse();
}
console.log(reverseCountries(newCountriesArr));
