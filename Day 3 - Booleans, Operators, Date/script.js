//                            Exercises: Level 1

// Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.

const firstName = "Miles";
const lastName = "Roark";
const country = "U.S.A";
const city = "New York";
const age = 52;
const isMarried = true;
const year = 2025;

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);

// Check if type of '10' is equal to 10
const num1 = "10";
const num2 = 10;

if (typeof num1 === typeof num2) {
  console.log("true");
} else {
  console.log("false");
}

// Check if parseInt('9.8') is equal to 10
const num3 = parseInt("9.8");
const num4 = 10;

if (num3 === num4) {
  console.log("true");
} else {
  console.log("false");
}

// Boolean value is either true or false.

// Write three JavaScript statement which provide truthy value.
const truthy1 = "pencil";
const truthy2 = 24;
const truthy3 = true;
// Write three JavaScript statement which provide falsy value.
const falsy1 = "";
const falsy2 = 0;
const falsy3 = null;
// Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

// 4 > 3  //true
console.log(4 > 3);
// 4 >= 3 //true
console.log(4 >= 3);
// 4 < 3  //false
console.log(4 < 3);
// 4 <= 3 //false
console.log(4 <= 3);
// 4 == 4 //true
console.log(4 == 4);
// 4 === 4 //true
console.log(4 === 4);
// 4 != 4  //false
console.log(4 != 4);
// 4 !== 4 //false
console.log(4 !== 4);
// 4 != '4' //true
console.log(4 != "4");
// 4 == '4' //false
console.log(4 == "4");
// 4 === '4' //false
console.log(4 === "4");
// Find the length of python and jargon and make a falsy comparison statement.
const str1 = "python";
const str2 = "jargon";
const str1len = str1.length;
console.log(str1len);
const str2len = str2.length;
console.log(str2len);

console.log(str1len === str2len);

// Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

// 4 > 3 && 10 < 12  //true
console.log(4 > 3 && 10 < 12);
// 4 > 3 && 10 > 12  //false
console.log(4 > 3 && 10 > 12);
// 4 > 3 || 10 < 12  //true
console.log(4 > 3 || 10 < 12);
// 4 > 3 || 10 > 12  //true
console.log(4 > 3 || 10 > 12);
// !(4 > 3) //false
console.log(!(4 > 3));
// !(4 < 3) //false
console.log(!(4 < 3));
// !(false) //true
console.log(!false);
// !(4 > 3 && 10 < 12) //false
console.log(!(4 > 3 && 10 < 12));
// !(4 > 3 && 10 > 12) //true
console.log(!(4 > 3 && 10 > 12));
// !(4 === '4')  //false
console.log(!(4 === "4"));

// There is no 'on' in both dragon and python
const draStr = "dragon";
console.log(draStr);
const pyStr = "python";
console.log(pyStr);

console.log(draStr.includes("on") && pyStr.includes("on"));

// Use the Date object to do the following activities
const today = new Date();
console.log(today);

// What is the year today?
const thisYear = today.getFullYear();
console.log(thisYear);
// What is the month today as a number?
const thisMonth = today.getMonth() + 1;
console.log(thisMonth);
// What is the date today?
const thisDate = today.getDate();
console.log(thisDate);
// What is the day today as a number?
const thisDay = today.getDay();
console.log(thisDay);
// What is the hours now?
const theHour = today.getHours();
console.log(theHour);
// What is the minutes now?
const theMinutes = today.getMinutes();
console.log(theMinutes);
// Find out the numbers of seconds elapsed from January 1, 1970 to now.
const today2 = Date.now();
console.log(today2);

//                                     Exercises: Level 2

// Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

// const base = Number(prompt("Please enter the base value:"));
// const height = Number(prompt("Please enter the height:"));

// const area = 0.5 * base * height;
// alert("The area of the triangle is:" + area);

// Enter base: 20
// Enter height: 10
// The area of the triangle is 100
// Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)

// const sideA = Number(prompt("Please enter a value for side a:"));
// const sideB = Number(prompt("Please enter a value for side b:"));
// const sideC = Number(prompt("Please enter a value for side c:"));

// const perimeter = sideA + sideB + sideC;
// alert("The perimeter of the triangle is:" + perimeter);

// Enter side a: 5
// Enter side b: 4
// Enter side c: 3
// The perimeter of the triangle is 12

// Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))

// const length = Number(prompt("Please enter a value for the length"));
// const width = Number(prompt("Please enter a value for the width"));

// const area = length * width;
// const perimeter = 2 * (length + width);

// alert(
//   "The area of the rectangle is " +
//     area +
//     " and the perimeter of the rectangle is " +
//     perimeter
// );

// Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.

// const radius = Number(prompt("Please enter a value for the radius"));

// const area = 3.14 * radius * radius;
// const circumference = 2 * 3.14 * radius;

// alert(
//   "The area of the circle is " +
//     area +
//     " and the circumference is " +
//     circumference
// );

// Calculate the slope, x-intercept and y-intercept of y = 2x -2

//formula y = mx + b: where m is the slope

// the y-intercept is the value of y when x = 0
// y = 2 * 0 - 2;
// y = -2;
//(0, -2);

const yIntercept = 2 * 0 - 2;
console.log("(X: 0" + ",Y:" + yIntercept + ")");

//the x-intercept is the value of x when y = 0
// 0 = 2x - 2
// 2x = 2
// x = 1
// (1,0)

const xIntercept = 1;
console.log("(X:" + xIntercept + ",Y: 0)");

// Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)

const x1 = 2;
const x2 = 6;
const y1 = 2;
const y2 = 10;

const slope = (y2 - y1) / (x2 - x1);
console.log(slope);

// Compare the slope of above two questions.

const slope1 = 2;
const slope2 = 2;

console.log(slope1 !== slope2);

// Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.

const x = -3;

const add = x * x + 6 * x + 9;
console.log(add);

// Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?

// const hours = Number(prompt("Please enter you weekly hours:"));
// const rate = Number(prompt("Please enter you hourly rate:"));

// const earnings = hours * rate;
// alert("Your weekly earnings are: " + earnings);

// Enter hours: 40
// Enter rate per hour: 28
// Your weekly earning is 1120

// If the length of your name is greater than 7 say, your name is long else say
// your name is short.

const nameFull = "Miles Roark";

if (nameFull.length > 7) {
  console.log("You name is long");
} else {
  console.log("Your name is short");
}

// Compare your first name length and your family name length and you should get this output.

let firstName2 = "Miles";
let lastName2 = "Roark";

if (firstName.length > lastName.length) {
  console.log(
    `Your first name, ${firstName2} is longer that you family name, ${lastName2}`
  );
} else if (firstName2.length === lastName2.length) {
  console.log(
    `Your first name ${firstName2} and your last name ${lastName2} are of equal length.`
  );
} else {
  console.log(
    `Your first name ${firstName2} is shorter that your family name ${lastName2}`
  );
}

// Your first name, Asabeneh is longer than your family name, Yetayeh

// Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.

let myAge = 250;
let yourAge = 25;
let ageDifference = myAge - yourAge;

console.log(`I am ${ageDifference} years older than you`);

// I am 225 years older than you.
// Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

// const userBirthYear = Number(prompt("Please enter your birthyear"));
// const today3 = new Date();
// const currentYear = today3.getFullYear();
// console.log(currentYear);

// const userAge = currentYear - userBirthYear;
// const waitTill = 18 - userAge;

// if (userAge > 18) {
//   alert("Cool you're old enough to drive");
// } else {
//   alert(
//     `You are ${userAge}, You have ${waitTill} years to go before you can drive.`
//   );
// }

// Enter birth year: 1995
// You are 25. You are old enough to drive

// Enter birth year: 2005
// You are 15. You will be allowed to drive after 3 years.
// Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years

// const secondsInAYear = 31536000;
// const userYears = Number(prompt("Enter the number of years alive"));

// const yearsLivedInSeconds = secondsInAYear * userYears;
// alert(`You have lived ${yearsLivedInSeconds} seconds`);

// Enter number of years you live: 100
// You lived 3153600000 seconds.
// Create a human readable time format using the Date time object

const today4 = new Date();
const year4 = today4.getFullYear();
const month4 = String(today4.getMonth() + 1).padStart(2, "0");
const date4 = String(today4.getDate()).padStart(2, "0");
const hours4 = String(today4.getHours()).padStart(2, "0");
const minutes4 = String(today4.getMinutes()).padStart(2, "0");

// YYYY-MM-DD HH:mm
console.log(`${year4}-${month4}-${date4} ${hours4}:${minutes4}`);
// DD-MM-YYYY HH:mm
console.log(`${date4}-${month4}-${year4} ${hours4}:${minutes4}`);
// DD/MM/YYYY HH:mm
console.log(`${date4}/${month4}/${year4} ${hours4}:${minutes4}`);

//                         Exercises: Level 3
// Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
// YYY-MM-DD HH:mm eg. 20120-01-02 07:05

const newDay = new Date();

const Year5 = newDay.getFullYear();
const month5 = String(newDay.getMonth() + 1).padStart(2, "0");
const date5 = String(newDay.getDate()).padStart(2, "0");
const hours5 = String(newDay.getHours()).padStart(2, "0");
const minutes5 = String(newDay.getMinutes()).padStart(2, "0");

const fullDate = `${Year5}-${month5}-${date5} ${hours5}:${minutes5}`;

console.log(fullDate);
