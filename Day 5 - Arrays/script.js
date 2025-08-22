//-----------------------------------Level 1-------------------------------
// Declare an empty array.
const emptyArr = [];
console.log(emptyArr);

// Declare an array with more than 5 elements:
//              Find the length of the array.
//              Get the first, middle and last items of the array.

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

console.log(carCompanies.length);

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

// Declare an array of more than 5 items:
//              Name the array mixedDataTypes.
//              Populate the array with different data types.
//              Find the length of the array.

const mixedDataTypes = ["20", "House", "Pencil", true, "42", {}, "Tracks"];
console.log(mixedDataTypes);
console.log(mixedDataTypes.length);

// Declare an array called itCompanies:
//              assign the values:
//                  Google, Microsoft, Apple, OpenAi, Amazon, Meta, Anthropic
//              Print the contents of the array to the console.
//              How many companies are in the array?
//              Print the first, middle and last company.
//              Print each company.
//              Change each companies name to uppercase and print the result.
//              print "{company names} are current players in tech."
//              Check if a company exists in the array.
//                      If it exists return the companies name
//                      If not return "company not found."
//              Filter out companies with multiple o's in their names without using the filter method.
//              Use the sort() method on the array.
//              Use the reverse() method on the array.
//              slice out the first 3 companies.
//              slice out the last three companies.
//              slice out the middle company or companies.
//              Remove the first company.
//              Remove the middle company or companies.
//              Remove the last company.
//              Clear the array.

const itCompanies = [
  "google",
  "microsoft",
  "apple",
  "openai",
  "amazon",
  "meta",
  "anthropic",
];

console.log(itCompanies);

console.log(itCompanies.length);

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

console.log(itCompanies[0]);
console.log(itCompanies[1]);
console.log(itCompanies[2]);
console.log(itCompanies[3]);
console.log(itCompanies[4]);
console.log(itCompanies[5]);
console.log(itCompanies[6]);

const allComps = itCompanies.map((comp) => comp.toUpperCase());
console.log(allComps);

const itText = `${itCompanies.join(",")} are all current players in tech.`;
console.log(itText);

// const query = prompt("Please enter a company name.");
// const queryLowered = query ? query.toLowerCase() : "";

// if (!queryLowered) {
//   alert("Please enter a company name.");
// } else if (itCompanies.includes(queryLowered)) {
//   alert(`${queryLowered} is on the List.`);
// } else {
//   alert("Company not found.");
// }

// ---------------------------------Level 2---------------------------------------

// Create 2 new files:
//              A countries.js file to store the countries array.
//              A web_techs.js file to store the webTechs array.
//              Access both files in the main script file.

// "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python."
//              Create an array of all the words in the sentence without the punctuation.
//              How many words are in the sentence?

// Given this shopping list:
//              ["MilK", "Coffee", "Tea", "Honey"]
//                      add "Meat" as the first item on the list.
//                      add "Sugar" as the last item on the list
//                      remove "Honey" from the list.
//                      change "Tea" to "Earl Grey"

// Check if Ethiopia exists in the countries array, if not add it.

// Check if Sass exists in the webTechs array. If not add it and print the array.

// Concatenate these two arrays:
//              const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"]
//              const backEnd = ["Node", "Express", "MongoDB"]
//---------------------------------------Level 3----------------------------------

// Complete the following exercises using this array:
//              const ages = [19, 22,19, 24, 20, 25, 26, 24, 25, 24 ]
//                      Sort the array
//                      Find the min and max age
//                      Find the median age(s)
//                          formula: median = middle age(s) / 2
//                      Find the average age
//                          formula: average = sum of ages / number of ages
//                      Find the range
//                          formula: range = max - min
//                      Compare the value of (min - average) and (max - average), use Math.abs() method.

// Slice the first ten countries from the countries array.

// Find the middle country(ies).

// Split the array in to two different arrays.
