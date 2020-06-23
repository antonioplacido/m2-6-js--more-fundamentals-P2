// Exercise 1
// ----------

let mostPopularFood = [
  'poke bowl',
  'chicken sliders',
  'pork baby back ribs',
  'chicken burritos',
  'chicken sandwich',
  'cauliflower rice bowl',
  'chicken and waffle sliders',
  'parmesan chicken',
  undefined,
];

const fixList = (arr, first, last) => {
  const theFoods = [...arr];
  mostPopularFood.pop();
  mostPopularFood.unshift(`bean burritos`);
  mostPopularFood.push(`buffalo-flavored cauliflower`);
  console.log(mostPopularFood);
  return theFoods;
  console.log(theFoods);
};


const printList = (arr) => {
  for (let i=1;i<= arr.length; i++)
  {
    console.log(`${i} - ${arr[i]}`);
  }
}


//step 3

printList(fixList(mostPopularFood, `bean burritos`, `buffalo-flavored cauliflower`));

