//*************************LEVEL 1******************************
//#########################QUESTION 1###########################
// Create a dog object
const dog = {};
//        Log the object to the console.
console.log(dog);

//#########################QUESTION 2###########################
// Give the object a name,legs ,color ,age property and a bark method that returns woof woof.
dog.name = "Jack";
dog.legs = 4;
dog.color = "brown";
dog.age = 4;
dog.bark = function () {
  return "woof, woof";
};
//#########################QUESTION 3###########################
// Log the values of the dog object.
console.log(dog);
console.log(dog.bark());
//#########################QUESTION 4###########################
// Give the dog object a breed property and a getDogInfo method.
dog.breed = "Alsatian";
dog.getDogInfo = function () {
  return `Hi I'm ${dog.name}, I'm an ${dog.breed}, ${dog.color}, ${dog.age} years old and I have ${dog.legs} legs.`;
};
console.log(dog.getDogInfo());

//********************************LEVEL 2*******************
//#########################QUESTION 1###########################
// Find the most skilled user in the users object.
let mostSkilledUser = [];
let maxSkill = -1;
for (const user in users) {
  let userSkills = users[user].skills.length;
  if (userSkills > maxSkill) {
    maxSkill = userSkills;
    mostSkilledUser = [user];
  } else if (userSkills === maxSkill) {
    mostSkilledUser.push(user);
  }
}
console.log(mostSkilledUser);

for (let i = 0; i < users.length; i++) {
  console.log(users[i].skills);
}

//#########################QUESTION 2###########################
// Log all online users
function isOnline(obj) {
  if (!obj || typeof obj !== "object") {
    return "Invalid input.";
  }
  let onlineUsers = [];
  for (let user in obj) {
    let isOn = obj[user].isLoggedIn;
    if (isOn === true) {
      onlineUsers.push(user);
    }
  }
  return onlineUsers;
}
console.log(isOnline(users));
//#########################QUESTION 3###########################
// Log how many users have more than 50 points.
function above50s(obj) {
  let usersAbove = [];
  for (let user in obj) {
    let userPoints = obj[user].points;
    if (userPoints > 50) {
      usersAbove.push(user);
    }
  }

  return usersAbove.length === 0
    ? "There are no users with scores that high"
    : usersAbove;
}
console.log(above50s(users));
//#########################QUESTION 4###########################
// Log all the MERN stack developers.
function mernDevs(obj) {
  let devsWithMern = [];
  for (let dev in obj) {
    let skills = obj[dev].skills;
    if (
      skills.includes("MongoDB") &&
      skills.includes("Express") &&
      skills.includes("React") &&
      skills.includes("Node")
    ) {
      devsWithMern.push(dev);
    }
  }
  return devsWithMern;
}
console.log(mernDevs(users));
//#########################QUESTION 5###########################
// Add your name as a property to the users object without modifying the original object.
const unmodified = {
  ...users,
  miles: {
    email: "miles@people.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 42,
    isLoggedOn: true,
    points: 52,
  },
};
console.log(unmodified);
console.log(users);
//using Object.assign:
const unmodified2 = Object.assign({}, users, {
  miles: {
    email: "miles@exiledLands.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 44,
    isLoggedOn: false,
    points: 74,
  },
});
console.log(users);
console.log(unmodified2);
//#########################QUESTION 6###########################
// Log all the keys of the users object.
console.log(Object.keys(users));
//#########################QUESTION 7###########################
// Log all the values of the users object.
console.log(Object.values(users));
//#########################QUESTION 8###########################
// Using the countries object, print the following info.
//                 Country name
//                 Capital
//                 Population
//                 Languages
function printInfo(arr) {
  let countryName;
  let capital;
  let population;
  let languages;
  for (let i = 0; i < arr.length; i++) {
    countryName = arr[i].name;
    capital = arr[i].capital;
    population = arr[i].population;
    languages = arr[i].languages;
  }
  return `This is ${countryName}, it's capital is ${capital}, it has a population of ${population} and these languages are spoken there ${languages}`;
}
console.log(printInfo(countries));
//******************************LEVEL 3*************************
//#########################QUESTION 1###########################
// Create a personalAccount object:
//      Give it a firstName, lastName, incomes and expenses properties.
//      Give it a totalIncome, totalExpense, accountInfo, addIncome,    addExpense and accountBalance methods.
// Keys and values for the methods are income: description. expenses: description.
//#########################QUESTION 2###########################
// Using the users2arr:
//        Create a signUp function which allows users to add to the collection and/or inform them that the user already exists.
//        Create a signIn function for logging into the application.

//#########################QUESTION 3###########################
// Using the products arr:
//       Create a rateProduct function which rates the product.
//       Create a averageRating function which calculates the average rating of a product.
//       Create a likeProduct function. which allows a user to like or unlike a product.
