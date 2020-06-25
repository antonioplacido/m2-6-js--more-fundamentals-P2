// Exercise 6
// ----------

const staffMembers = [
  {
    name: "Jane Smith",
    title: "Web Developer II",
    skillLevels: {
      javascript: 7,
      python: 4,
      sql: 6,
    },
  },
  {
    name: "Frank Castle",
    title: "Web Developer I",
    skillLevels: {
      javascript: 4,
      python: 4,
      sql: 3,
    },
  },
  {
    name: "Steve Rogers",
    title: "Database Admin",
    skillLevels: {
      javascript: 7,
      python: 4,
      sql: 9,
    },
  },
  {
    name: "Chuck Taylor",
    title: "Web Developer III",
    skillLevels: {
      javascript: 8,
      python: 7,
      sql: 8,
    },
  },
  {
    name: "Thor Odinson",
    title: "Web Intern",
    skillLevels: {
      javascript: 4,
      python: 3,
      sql: 6,
    },
  },
];

// Write a function that will return a new
// array of employee values, given a key.
//  _very similar to Ex. 5_ but with a twist.
//  This time you are provided with an array of objects.

console.log(staffMembers[0]);

const getData = (staffArray, key) => {
  return staffArray.map((staffMember) => {
    return staffMember[key];
  });
};

//sniping excel skillsets//

// const getData = (staffArray, key) => {
//   return staffArray.map((staffMember) => {
//     return staffMember[key];
//   });
// };

// const getData = (arr, key) => {
//   let arr2 = [];
//   arr.forEach(name2 => {
//       arr2.push(name2[key])
//   })
//   return arr2;
// }

//test//

console.log(getData(getData(staffMembers, `skillLevels`), "python"));
console.log(getData(staffMembers, `name`));
console.log(getData(staffMembers, `title`));
