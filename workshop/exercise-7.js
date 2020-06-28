// Exercise 7
// ----------

let foodPairings = {
  burgers: "beer",
  fish: "white wine",
  beef: "red wine",
  strawberries: "cream",
};

// createRecommendations function

//convert the object into an array;//

let newFoodArray = Object.entries(foodPairings); //makes an array of arrays
// console.log(newFoodArray);

const createRecommendations = (thesort) => {
  return Object.keys(thesort).map((food) => {
    return `With ${food}, you should have ${thesort[food]}.`;
  });
};

const printRecommendations = (entries) => {
  entries.forEach((entry) => {
    console.log(`${entry}`);
  });
};

let rows = newFoodArray.length; // gives 4//
// let newMods = newFoodArray.toString();

// console.log(newMods);

// function createRecommendations

// console.log(createRecommendations(foodPairings, `burgers`));
// // printRecommendations function

// // function call (done)
printRecommendations(createRecommendations(foodPairings));
