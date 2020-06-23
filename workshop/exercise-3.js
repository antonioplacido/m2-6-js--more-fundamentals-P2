// Exercise 3
// ----------

let mostPopularFood = [
  'bean burritos',
  'poke bowl',
  'chicken sliders',
  'pork baby back ribs',
  'chicken burritos',
  'chicken sandwich',
  'cauliflower rice bowl',
  'chicken and waffle sliders',
  'parmesan chicken',
  'buffalo-flavored cauliflower',
];

const sortAlphabetically= (list) => {
  const sortedList = [...list].sort();
  for (let i=0; i<list.length; i++){
    console.log(`${sortedList[i]} (${list.indexOf(sortedList[i])+1})`);
  }
};

sortAlphabetically(mostPopularFood);

  // let arr1=['dog',"cat"]
  // let arr2=['crow',"eagle"]
  // let arr3 = [...arr1,...arr2, 'whale'].sort();
  // console.log(arr3);
