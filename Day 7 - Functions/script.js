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

//#########################QUESTION 3###########################
// Declare a printArray function. It takes an array as it's parameter and prints out the values of the array.

//#########################QUESTION 4###########################
// write a showDateTime function using the Date object. 09/26/ 2025 04:50.

//#########################QUESTION 5###########################
// Swap x and y using a swapValues function.
// (43,53) // x => 43, y => 53

//#########################QUESTION 6###########################
// Declare a reverseArray function. It takes an array as a parameter and returns the array reversed. Don't use the reverse method.

//#########################QUESTION 7###########################
// write a capitalizeArray function.

//#########################QUESTION 8###########################
// Declare a function addItem that takes an item as a parameter and returns it as an array.

//#########################QUESTION 9###########################
// Declare a removeItem function. It takes index as a parameter and removes the item at the index from the array.

//#########################QUESTION 10###########################
// Declare a sumOfNumbers function. It takes number as a parameter and adds all the numbers in that range.

//#########################QUESTION 11###########################
// Declare a sumOfOdds function. It takes number as a parameter and adds all the odd numbers in that range.

//#########################QUESTION 12###########################
// Declare a sumOfEvens function. It takes number as a parameter and adds all the even numbers in that range.

//#########################QUESTION 13###########################
// Declare an evenAndOdds function. It takes a positive Integer as a parameter and returns the number of evens and odds in that range.

//#########################QUESTION 14###########################
// Write a function that takes any number of arguments and returns the sum of the arguments.

//#########################QUESTION 15###########################
// Write a randomUserIpGenerator function.

//#########################QUESTION 16###########################
// Write a randomMacAddressGenerator function.

//#########################QUESTION 17###########################
// Write a randomHexNumberGenerator function.

//#########################QUESTION 18###########################
// Write a userIdGenerator function. The id should be seven characters long.

//******************************LEVEL 3*************************
//#########################QUESTION 1###########################
// write a userIdGeneratedByUser function. Using prompt() get the number of characters and the number of id's to be generated.

//#########################QUESTION 2###########################
// Write an rgbColorGenerator function.

//#########################QUESTION 3###########################
// Write an arrayOfHexaColors function that return an array of hexadecimal colors.

//#########################QUESTION 4###########################
// Write an arrOfRgbColors function which returns an array of rgb colors.

//#########################QUESTION 5###########################
// Write a convertHexaToRgb function.

//#########################QUESTION 6###########################
// Write a convertRgbToHexa function.

//#########################QUESTION 7###########################
// Write a generateColors functions which generates any number of Hexadecimal or rgb colors.

//#########################QUESTION 8###########################
// Write a shuffleArray function. That takes an array and shuffles it.

//#########################QUESTION 9###########################
// Write a factorial function. It takes a whole number as a parameter and returns it's factorial.

//#########################QUESTION 10###########################
// Write an isEmpty function that checks if it's parameter is empty or not.

//#########################QUESTION 11###########################
// Write a sum function that returns the sum of it's parameters.

//#########################QUESTION 12###########################
// Write a sumOfArrayItems function that checks if all the contents of array are number types. If yes return the sum, else return "Not all items are numbers."

//#########################QUESTION 13###########################
// Write a average function that takes an array and finds the average of the items. Make sure to perform some type checking.

//#########################QUESTION 14###########################
// Write a modifyArray function that takes an array as a parameter, removes the fifth item and returns the new array. If the length of the array is less than five it returns "Item not found".

//#########################QUESTION 15###########################
// Write an isPrime function which checks if a number is prime.

//#########################QUESTION 16###########################
// Write a function that checks if all the items in an array are unique.

//#########################QUESTION 17###########################
// Write a function that checks if all the items in an array are of the same data type.

//#########################QUESTION 18###########################
// Write an isValidVariable that checks if a variable is valid or not.

//#########################QUESTION 19###########################
// Write a function which returns an array of seven unique random numbers between 0 and 9.

//#########################QUESTION 20###########################
// Write a reverseCountries function that copies the countries array and reverses the original.
