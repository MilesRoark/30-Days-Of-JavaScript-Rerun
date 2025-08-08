//------------------------Exercises:Level 1-----------------------

// Get user input using prompt(“Enter your age:”).
//      If user is 18 or older   alert:'You are old enough to drive' .
//      if not   alert("You have to wait X number of years") .
//----------------------Examples:----------------------------
//              Enter your age: 30
//              You are old enough to drive.
//              Enter your age:15
//              You have to wait 3 more years.
//-----------------------Solution-----------------------------
// const userAge = Number(prompt("Enter your age:"));
// const legalDrivingAge = 18;
// const waitTill = legalDrivingAge - userAge;

// if (userAge >= legalDrivingAge) {
//   alert("You're old enough to drive. Good Job.");
// } else {
//   alert(`You have to wait ${waitTill} more years. Sorry.`);
// }

// Compare the values of myAge and yourAge using an if … else statement.
//      Log the result to the console stating who is older (you or I).
//      Use   prompt(“Enter your age:”) to get the age as input.
//--------------------------Example:-------------------------
//              Enter your age: 30
//              You are 5 years older than me.
//--------------------------Solution--------------------------
// const myAge = 54;
// const userAge = Number(prompt("How old are you?"));
// const ageDifference = myAge - userAge;

// if (myAge > userAge) {
//   alert(`I am ${ageDifference} years older than you.`);
// } else if (myAge === userAge) {
//   alert("We are the same age. Yay us.");
// } else {
//   alert(`I am ${Math.abs(ageDifference)} years younger than you.`);
// }

// If a is greater than b:
//              return 'a is greater than b'
//              else 'a is less than b'.
//      Try to implement it in two ways:
//              using if else
//              ternary operator
//--------------------------Examples:-------------------------
//              let a = 4
//              let b = 3
//              4 is greater than 3
//-----------------------------Solution------------------------
// const a = Number(prompt("Please enter a value for a:"));
// const b = Number(prompt("Please enter a value for b:"));

//if else method:
// if (a > b) {
//   alert(`${a} is greater than ${b}`);
// } else if (a === b) {
//   alert(`${a} and ${b} are of equal value.`);
// } else {
//   alert(`${b} is greater than ${a}`);
// }

//ternary method:
// const result =
//   a > b
//     ? alert(`${a} is greater than ${b}`)
//     : a === b
//     ? alert(`${a} and ${b} are of equal value.`)
//     : alert(`${b} is greater than ${a}`);

// Even numbers are numbers divisible by 2 with nothing left over.
//      How do you check if a number is even or not using JavaScript?
//--------------------------Examples:-------------------------
//              Enter a number: 2
//              2 is an even number
//              Enter a number: 9
//              9 is is an odd number.

//----------------------------Solution----------------------------
// const input = Number(prompt("Please enter a number."));

//if... else method:
// if (isNaN(input)) {
//   alert(`that's not a number.`);
// } else if (input % 2 === 0) {
//   alert(`${input} is an even number`);
// } else {
//   alert(`${input} is an odd number.`);
// }

//ternary method:
// const result = isNaN(input)
//   ? alert(`that's not a number.`)
//   : input % 2 === 0
//   ? alert(`${input} is an even number`)
//   : alert(`${input} is an odd number.`);

// ----------------------Exercises: Level 2--------------------

// Write a code which can give grades to students according to theirs scores:
//              80 - 100, A
//              70 - 89, B
//              60 - 69, C
//              50 - 59, D
//              0 - 49, F

//-----------------------Solution-------------------------------
// const studentGrade = Number(prompt("Please enter you score."));

//if...else method:
// if (isNaN(studentGrade) || studentGrade < 0 || studentGrade > 100) {
//   alert("Please enter a valid grade.");
// } else if (studentGrade >= 80 && studentGrade <= 100) {
//   alert("Good Job. You got an A.");
// } else if (studentGrade >= 89 && studentGrade <= 70) {
//   alert("Nice try. You got a B.");
// } else if (studentGrade >= 69 && studentGrade <= 60) {
//   alert("Put more effort. You got a C.");
// } else if (studentGrade >= 50 && studentGrade <= 59) {
//   alert("You barely made it. You got a D.");
// } else {
//   alert("See the teacher after class. You got an F.");
// }

// prompt("What month is it?) based on the response alert one of the following:
//      if response is September, October or November, then Autumn.
//      if response is December, January or February, then Winter.
//      if response is March, April or May, then Spring
//      if response is June, July or August, then Summer
//--------------------------------Solution----------------------------------

// const validMonths = [
//   "january",
//   "february",
//   "march",
//   "april",
//   "may",
//   "june",
//   "july",
//   "august",
//   "september",
//   "october",
//   "november",
//   "december",
// ];

// const userInput = prompt("Please enter a month.");
// const inputLowered = userInput ? userInput.toLowerCase() : "";

// if (!inputLowered || !validMonths.includes(inputLowered)) {
//   alert("Please enter a valid month.");
// } else if (
//   inputLowered === "january" ||
//   inputLowered === "february" ||
//   inputLowered === "december"
// ) {
//   alert("Winter is cold. Dress warmly");
// } else if (
//   inputLowered === "march" ||
//   inputLowered === "april" ||
//   inputLowered === "may"
// ) {
//   alert("Ahhh! Spring the season of love.");
// } else if (
//   inputLowered === "june" ||
//   inputLowered === "july" ||
//   inputLowered === "august"
// ) {
//   alert("Summer. The season of skin. Enjoy");
// } else if (
//   inputLowered === "september" ||
//   inputLowered === "october" ||
//   inputLowered === "november"
// ) {
//   alert("It's Autumn. Get out and enjoy the colors.");
// }

// Check if it's a workday or the weekend. Your script should take a day as the input.
//----------------------------Examples--------------------------
//              prompt(what day is it?) input:Saturday
//              alert("it's the weekend")
//              prompt(what day is it?) input:saturDay
//              alert("it's the weekend")
//              prompt(what day is it?) input:Friday
//              alert("it's a workday")
//              prompt(what day is it?) input:FriDAy

//--------------------------------Solution-----------------------
// const validDays = [
//   "monday",
//   "tuesday",
//   "wednesday",
//   "thursday",
//   "friday",
//   "saturday",
//   "sunday",
// ];

// const userInput = prompt("What day is it?");
// const inputLowered = userInput ? userInput.toLowerCase() : "";

// if (!inputLowered || !validDays.includes(inputLowered)) {
//   alert("Please enter the appropriate day of the week.");
// } else if (
//   inputLowered === "monday" ||
//   inputLowered === "tuesday" ||
//   inputLowered === "wednesday"
// ) {
//   alert("Today is a workday, don't forget to pack a lunch.");
// } else if (
//   inputLowered === "friday" ||
//   inputLowered === "saturday" ||
//   inputLowered === "sunday"
// ) {
//   alert("Yayyyy!! it's the weekend let's have fun.");
// }

//------------------------Exercises: Level 3----------------------

// Write a program that returns the number of days in a month.
// Write the previous program for a leap year scenario.

//------------------------------Examples-----------------------
//              Enter month: January
//              There are 31 days in January.
//              Enter month: JANUARY
//              There are 31 days in January.
//              Enter month: February
//              There are 28 days in February.
//              Enter month: FEbruary
//              There are 28 days in February.

//-------------------------Solution-------------------------------
// const monthsof30 = ["april", "june", "september", "november"];
// const monthsof31 = [
//   "january",
//   "march",
//   "may",
//   "july",
//   "august",
//   "october",
//   "december",
// ];
// const months0f28 = ["february"];

// const userInput = prompt("Please enter a month");
// const inputLowered = userInput ? userInput.toLowerCase() : "";

// if (
//   !inputLowered ||
//   (!months0f28.includes(inputLowered) &&
//     !monthsof30.includes(inputLowered) &&
//     !monthsof31.includes(inputLowered))
// ) {
//   alert("Please enter a valid month.");
// } else if (months0f28.includes(inputLowered)) {
//   alert(`${inputLowered} has 28 days. 29 in a leap year.`);
// } else if (monthsof30.includes(inputLowered)) {
//   alert(`${inputLowered} has 30 days.`);
// } else if (monthsof31.includes(inputLowered)) {
//   alert(`${inputLowered} has 31 days.`);
// }
