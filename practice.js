// --1.filter() --//
const users = [
  { name: "John", age: 34 },
  { name: "Amy", age: 20 },
  { name: "camperCat", age: 10 },
  { name: "nishat", age: 12 },
  { name: "hasan", age: 60 },
  { name: "muktar", age: 19 },
];

// --filter() --//
const selectedUsers = users.filter((user) => user.age <= 20);

//2 --reduce () --/
const sumOfUserAges = users.reduce((accumulator, user) => {
  return accumulator + user.age;
}, 0);

console.log(sumOfUserAges);
console.log(selectedUsers);
console.log(users);

// --filter () --//
let arr = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
let newArray = arr.filter((e) => e > 0 && e % 2 == 0);
console.log(newArray);

// 3.====> --split() --//
const str = "The sky is blue";

/* // 1.--split by full string --//
const spliting = str.split(); */

/* // 2.--split by character wise --//
const spliting = str.split(""); */

/* // 3--split with limit --//
const spliting = str.split("",3); */

/* // 4.split with white space --//
const spliting = str.split(" "); */

const spliting = str.split("");

console.log(spliting);

/* const joining = spliting.join('');
console.log(joining);
 */

// 4.===> join() <===

const array = ["Fire", "Air", "Water"];

// const joning = array.join();
// const joning = array.join('');
const joning = array.join("-");

console.log(joning);

//===>4.every() <===//

const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 10];
const checked1 = numbers1.every((e) => e <= 10);
console.log(checked1);

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 10];
const checked2 = numbers2.every((e) => e < 10);
console.log(checked2);
