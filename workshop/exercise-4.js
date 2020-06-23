// Exercise 4
// ----------

let foodPairings = {
  burgers: 'beer',
  fish: 'white wine',
  beef: 'red wine',
  strawberries: 'cream',
};

// const converter = (obj) => {
//   Object.keys(foodPairings)

// };

const converter = (obj) => {
  return [Object.keys(obj), Object.values(obj)];
};

console.log(converter(foodPairings));


// // array1 = []
// console.log(Object.keys(foodPairings));
// // array2 = []
// console.log(Object.values(foodPairings));
// // array3 = [...array1,...array2]