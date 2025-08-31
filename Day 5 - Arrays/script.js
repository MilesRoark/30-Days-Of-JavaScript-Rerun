//...................................Level 1...............................
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx     Question(1)   xxxxxxxxxxxxxxxxxxxxxx

//              Declare an empty array.
const emptyArr = [];
console.log(emptyArr);

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx     Question(2)   xxxxxxxxxxxxxxxxxxxxxxxx

//              Declare an array with more than 5 elements:
const carCompanies = [
  "Tesla",
  "Rivian",
  "Ford",
  "Honda",
  "Peugeot",
  "Toyota",
  "Porsche",
  "Hyundai",
];

//              Find the length of the array.
console.log(carCompanies.length);

//              Get the first, middle and last items of the array.
const firstItem = carCompanies[0];
console.log(firstItem);

let middleItem;
if (carCompanies.length % 2 === 0) {
  const midComp1 = carCompanies.length / 2 - 1;
  const midComp2 = carCompanies.length / 2;
  middleItem = [carCompanies[midComp1], carCompanies[midComp2]];
} else {
  middleItem = carCompanies[Math.floor(carCompanies.length / 2)];
}
console.log(middleItem);

const lastItem = carCompanies[carCompanies.length - 1];
console.log(lastItem);

//xxxxxxxxxxxxxxxxxxxxxxxxxx    Question(3)  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// Declare an array of more than 5 items:
//              Name the array mixedDataTypes.
const mixedDataTypes = ["20", "House", "Pencil", true, "42", {}, "Tracks"];

//              Populate the array with different data types.
console.log(mixedDataTypes);

//              Find the length of the array.
console.log(mixedDataTypes.length);

//xxxxxxxxxxxxxxxxxxxxxxxxx    Question(4)  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// Declare an array called itCompanies:
//              assign the values:
//                  Google, Microsoft, Apple, OpenAi, Amazon, Meta, Anthropic
const itCompanies = [
  "google",
  "microsoft",
  "apple",
  "openai",
  "amazon",
  "meta",
  "anthropic",
];
//              Print the contents of the array to the console.

console.log(itCompanies);
//              How many companies are in the array?
console.log(itCompanies.length);

//              Print the first, middle and last company.
const firstIt = itCompanies[0];
console.log(firstIt);

let middleIt;
if (itCompanies.length % 2 === 0) {
  const first = itCompanies.length / 2 - 1;
  const second = itCompanies.length / 2;
  middleIt = [itCompanies[first], itCompanies[second]];
} else {
  middleIt = itCompanies[Math.floor(itCompanies.length / 2)];
}
console.log(middleIt);

const lastIt = itCompanies[itCompanies.length - 1];
console.log(lastIt);

//              Print each company.
console.log(itCompanies[0]);
console.log(itCompanies[1]);
console.log(itCompanies[2]);
console.log(itCompanies[3]);
console.log(itCompanies[4]);
console.log(itCompanies[5]);
console.log(itCompanies[6]);

//              Change each companies name to uppercase and print the result.
const allComps = itCompanies.map((comp) => comp.toUpperCase());
console.log(allComps);

//              print "{company names} are current players in tech."
const itText = `${itCompanies.join(",")} are all current players in tech.`;
console.log(itText);

//              Check if a company exists in the array.
//                      If it exists return the companies name
//                      If not return "company not found."
// const query = prompt("Please enter a company name.");
// const queryLowered = query ? query.toLowerCase() : "";

// if (!queryLowered) {
//   alert("Please enter a company name.");
// } else if (itCompanies.includes(queryLowered)) {
//   alert(`${queryLowered} is on the List.`);
// } else {
//   alert("Company not found.");
// }

//              Filter out companies with multiple o's in their names without using the filter method.
const companiesWithMulti = [];
const companiesWithoutMulti = [];

for (let i = 0; i < itCompanies.length; i++) {
  const company = itCompanies[i];
  let count = 0;
  for (let j = 0; j < company.length; j++) {
    if (company[j].includes("o")) {
      count++;
    }
  }
  if (count >= 2) {
    companiesWithMulti.push(company);
  }
  if (count <= 1) {
    companiesWithoutMulti.push(company);
  }
}
console.log(companiesWithMulti);
console.log(companiesWithoutMulti);

//              Use the sort() method on the array.
const copyItCompanies = [...itCompanies];

const sortedCopyItCompanies = copyItCompanies.sort();
console.log(sortedCopyItCompanies);
console.log(itCompanies);

//              Use the reverse() method on the array.
const reversedCopyItCompanies = copyItCompanies.reverse();
console.log(reversedCopyItCompanies);

//              slice out the first 3 companies.
const slicedItCompanies = itCompanies.slice(0, 3);
console.log(slicedItCompanies);

//              slice out the last three companies.
const reversedSlicedItCompanies = itCompanies.slice(-3);
console.log(reversedSlicedItCompanies);

//              slice out the middle company or companies.
let middleCompany;
if (itCompanies.length % 2 === 0) {
  const mid1 = itCompanies.length / 2 - 1;
  middleCompany = itCompanies.slice(mid1, mid1 + 2);
} else {
  const mid1 = Math.floor(itCompanies.length / 2);
  middleCompany = itCompanies.slice(mid1, mid1 + 1);
}
console.log(middleCompany);

//              Remove the first company.
const itCompanies1 = [...itCompanies];
const removedFirst = itCompanies1.shift();
console.log(removedFirst);
console.log(itCompanies1);

//              Remove the middle company or companies.
const itCompanies2 = [...itCompanies];
let removedMiddle;
if (itCompanies2.length % 2 === 0) {
  const mid1 = itCompanies2.length / 2 - 1;
  removedMiddle = itCompanies2.splice(mid1, 2);
} else {
  const mid = Math.floor(itCompanies2.length / 2);
  removedMiddle = itCompanies2.splice(mid, 1);
}
console.log(removedMiddle);
console.log(itCompanies2);

//              Remove the last company.
const itCompanies3 = [...itCompanies];
const removedLast = itCompanies3.pop();
console.log(removedLast);
console.log(itCompanies3);

//              Clear the array.
const itCompanies4 = [...itCompanies];
itCompanies4.length = 0;

console.log(itCompanies);
console.log(itCompanies1);
console.log(itCompanies2);
console.log(itCompanies3);
console.log(itCompanies4);

// ................................Level 2...................................

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxx   Question(1)   xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// Create 2 new files:
//              A countries.js file to store the countries array.
//              A web_techs.js file to store the webTechs array.
//              Access both files in the main script file.
console.log("=======================Level 2=====================");
console.log(countries1);
console.log(webTechs1);

//xxxxxxxxxxxxxxxxxxxxxxxxxxxx   Question(2)    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python."
//              Create an array of all the words in the sentence without the punctuation.
const newString =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
const splitNew = newString.split(" ");
console.log(splitNew);

const cleaningReg = /\w+/gi;
const cleanedNewString = newString.match(cleaningReg);
console.log(cleanedNewString);
//              How many words are in the sentence?
console.log(cleanedNewString.length);

//xxxxxxxxxxxxxxxxxxxxxxxxxxxx   Question(3)    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// Given this shopping list:
//              ["MilK", "Coffee", "Tea", "Honey"]
//                      add "Meat" as the first item on the list.
const shoppingList = ["MilK", "Coffee", "Tea", "Honey"];
shoppingList.unshift("Meat");
console.log(shoppingList);
//                      add "Sugar" as the last item on the list
shoppingList.push("Sugar");
console.log(shoppingList);
//                      remove "Honey" from the list.
console.log(shoppingList.indexOf("Honey"));
shoppingList.splice(4, 1);
console.log(shoppingList);
//                      change "Tea" to "Earl Grey"
console.log(shoppingList.indexOf("Tea"));
shoppingList[3] = "Earl Grey";
console.log(shoppingList);

//xxxxxxxxxxxxxxxxxxxxxxxxxxxx  Question(4)    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];
// Check if Ethiopia exists in the countries array, if not add it.
console.log(countries.includes("Ethiopia"));

//xxxxxxxxxxxxxxxxxxxxxxxxxxxx Question(5)    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];
// Check if Sass exists in the webTechs array. If not add it and print the array.
console.log(webTechs.includes("Sass"));
webTechs.push("Sass");
console.log(webTechs);

//xxxxxxxxxxxxxxxxxxxxxxxxxxxx  Question(6)   xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// Concatenate these two arrays:
const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];

const concatenatedArr = [...frontEnd, ...backEnd];
console.log(concatenatedArr);
const concatenatedMethod2 = frontEnd.concat(backEnd);
console.log(concatenatedMethod2);
//....................................Level 3..................................

//xxxxxxxxxxxxxxxxxxxxxxxxxxx  Question(1)    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
console.log("===========Level 3=========================");
// Complete the following exercises using this array:
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
//                      Sort the array
ages.sort((a, b) => b - a);
console.log(ages);
const ageCopy = [...ages, 100];
ageCopy.sort();
console.log(ageCopy);
//                      Find the min and max age
const ageCopy2 = [...ages];
ageCopy2.sort((a, b) => a - b);
const maxVal = ageCopy2[ageCopy2.length - 1];
console.log(maxVal);
const minVal = ageCopy2[0];
console.log(minVal);

//                      Find the median age(s)
//                          formula: median = mid1 + mid2 / 2 for an even array;
//                                   median = mid for an array of odd length
let middleAge;
let median;
if (ages.length % 2 === 0) {
  const min1 = ages.length / 2 - 1;
  const min2 = ages.length / 2;
  middleAge = [ages[min1], ages[min2]];
  median = (ages[min1] + ages[min2]) / 2;
} else {
  const min = Math.floor(ages.length / 2);
  middleAge = ages[min];
  median = min;
}
console.log(middleAge);
console.log(median);

//                      Find the average age
//                          formula: average = sum of ages / number of ages
let sum = 0;
for (let i = 0; i < ages.length; i++) {
  sum += ages[i];
}
console.log(sum);
const average = sum / ages.length;
console.log(average);

const sum2 = ages.reduce((acc, currVal) => acc + currVal, 0);
console.log(sum2);
//                      Find the range
//                          formula: range = max - min
const range = maxVal - minVal;
console.log(range);
//                      Compare the value of (min - average) and (max - average), use Math.abs() method.
const minComp = Math.abs(minVal - average);
const maxComp = Math.abs(maxVal - average);
console.log(minComp);
console.log(maxComp);
console.log(minComp > maxComp);

//xxxxxxxxxxxxxxxxxxxxxxxxxxx  Question(2)   xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// Slice the first ten countries from the countries array.
const countries2 = [...countries];
console.log(countries2);
console.log(countries2.length);
const countries2Sliced = countries2.slice(-1);
console.log(countries2Sliced);

// Find the middle country(ies).
let middleCount;
if (countries.length % 2 === 0) {
  const mid1 = countries.length / 2 - 1;
  const mid2 = countries.length / 2;
  middleCount = [countries[mid1], countries[mid2]];
} else {
  const mid = Math.floor(countries.length / 2);
  middleCount = countries[mid];
}
console.log(middleCount);

// Split the array in to two different arrays.
const arr1 = countries.slice(0, 6);
const arr2 = countries.slice(6, 12);
console.log(arr1);
console.log(arr2);
