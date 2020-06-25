// Exercise 5
// ----------

const foodPairings = {
  burgers: 'beer',
  fish: 'white wine',
  beef: 'red wine',
  strawberries: 'cream',
};


//## Exercise 5

// Write a function that accepts two parameters, 



// Write a function that accepts two parameters, 
// an object and a key (string). 
const getValue = (Objct,key) => {
 // The function returns the value of the key in the object.// 
  if(Object.keys(Objct).includes(key)){return Objct[key];}else {return `not available`;}
  
};

expect(getValue(foodPairings, 'burgers'), 'beer');
expect(getValue(foodPairings, 'beef'), 'red wine');
expect(getValue(foodPairings, 'sushi'), 'not available');

/**
 * -------------------------------------------------------------------
 * ⚠️ No changes necessary below. ⚠️
 * -------------------------------------------------------------------
 */
function expect(result, value) {
  if (result === value) {
    console.log('✅ Test succeeded');
  } else {
    console.log(`⛔️ Expected “${result}” to equal “${value}”`);
  }
}
