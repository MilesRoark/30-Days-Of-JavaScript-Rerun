//*************************LEVEL 1******************************
//#########################QUESTION 1###########################
// Create a dog object
const dog = {};
//        Log the object to the console.
console.log(dog);
console.log("---End---");

//#########################QUESTION 2###########################
// Give the object a name,legs ,color ,age property and a bark method that returns woof woof.
dog.name = "Jack";
dog.legs = 4;
dog.color = "brown";
dog.age = 4;
dog.bark = function () {
  return "woof, woof";
};
console.log("---End---");
//#########################QUESTION 3###########################
// Log the values of the dog object.
console.log(dog);
console.log(dog.bark());
console.log("---End---");
//#########################QUESTION 4###########################
// Give the dog object a breed property and a getDogInfo method.
dog.breed = "Alsatian";
dog.getDogInfo = function () {
  return `Hi I'm ${dog.name}, I'm an ${dog.breed}, ${dog.color}, ${dog.age} years old and I have ${dog.legs} legs.`;
};
console.log(dog.getDogInfo());
console.log("---End");

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
console.log("---End---");

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
console.log("---End---");
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
console.log("---End---");
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
console.log("---End---");
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
console.log("---End---");
//#########################QUESTION 6###########################
// Log all the keys of the users object.
console.log(Object.keys(users));
console.log("---End---");
//#########################QUESTION 7###########################
// Log all the values of the users object.
console.log(Object.values(users));
console.log("---End---");
//#########################QUESTION 8###########################
// Using the countries object, print the following info.
//                 Country name
//                 Capital
//                 Population
//                 Languages
for (let country of countries) {
  let countryName = country.name;
  console.log(`Country Name: ${countryName}`);
  let capital = country.capital;
  console.log(`Capital: ${capital}`);
  let population = country.population;
  console.log(`Population: ${population}`);
  let languages = country.languages;
  console.log(`Languages: ${languages}`);
  console.log(`----`);
}
console.log("---End---");
//******************************LEVEL 3*************************
//#########################QUESTION 1###########################
// Create a personalAccount object:
//      Give it a firstName, lastName, incomes and expenses properties.
//      Give it a totalIncome, totalExpense, accountInfo, addIncome,    addExpense and accountBalance methods.
const personalAccount = {
  firstName: "Miles",
  lastName: "Roark",
  incomes: {
    "cd Sales": 240,
    Donations: 600,
    Merch: 1250,
  },
  expenses: {
    rent: 1250,
    studio: 300,
    transportation: 150,
  },
  totalIncome() {
    let sum = Object.values(this.incomes).reduce(
      (acc, currVal) => acc + currVal,
      0
    );
    return sum;
  },
  totalExpense() {
    let sum = Object.values(this.expenses).reduce(
      (acc, currVal) => acc + currVal,
      0
    );
    return sum;
  },
  accountBalance() {
    let balance = this.totalIncome() - this.totalExpense();
    return balance;
  },
  accountInfo() {
    return `Account Holder: ${this.firstName} ${
      this.lastName
    }, Balance: ${this.accountBalance()}`;
  },
  addIncome(description, amount) {
    return (this.incomes[description] = amount);
  },
  addExpense(description, amount) {
    return (this.expenses[description] = amount);
  },
};
console.log(personalAccount.totalIncome());
console.log(personalAccount.totalExpense());
console.log(personalAccount.accountInfo());
personalAccount.addIncome("content", 400);
personalAccount.addExpense("food", 220);
console.log(personalAccount);

console.log("----End----");

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
