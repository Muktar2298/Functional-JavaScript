// 1.--Alphabetic arry sorting --//
const alphabeticSorting = ["Zahid", "Nishat", "Ariful", "Mahfuz", "Bablu"];
alphabeticSorting.sort();
console.log("After Sorting ", alphabeticSorting);

// --Reversing Array --//
alphabeticSorting.reverse();
console.log("Reversing Array : ", alphabeticSorting);

// 2.Numeric Array Sorting --//
const numericArraySorting = [1, 3, -5, 2, -4, 3, 5, -3, -2, 1, 0, 9];
numericArraySorting.sort(function (a, b) {
  return a - b;
});
console.log("Sorting Array : ", numericArraySorting);

// --Reversing Array --//
numericArraySorting.reverse();
console.log("Reversing Array : ", numericArraySorting);

// 3.Array sorting of object =>(Given Object as an array element & Object particular property k sorting korte hbe )--//
const arrySortingOfObject = [
  { name: "Nishat", age: 20 },
  { name: "Hasan", age: 30 },
  { name: "Muktar", age: 41 },
  { name: "Ariful Islam", age: 10 },
  { name: "Mustafizur Rahman Babu", age: 13 },
  { name: "Md.Zahid Hasan", age: 23 },
  { name: "Nishat Sarkar", age: 24 },
  { name: "Akash Ahmed", age: 23 },
  { name: "Mahfuzur Rahman", age: 22 },
  { name: "Md.Muktar Ali", age: 21 },
];

/* // --alphabetic object value sorting --//
arrySortingOfObject.sort(function (a, b) {
  if (a.name > b.name) {
    return 1;
  } else if (a.name < b.name) {
    return -1;
  } else {
    return 0;
  }
});
console.log(arrySortingOfObject);
// --Reversing Array of Object --//
arrySortingOfObject.reverse();
console.log(arrySortingOfObject);

 */

// --numeric Object value sorting --//
arrySortingOfObject.sort(function (a, b) {
  return a.age - b.age;
});
console.log(arrySortingOfObject);

// --numeric Object value reverse --//
arrySortingOfObject.reverse();
console.log(arrySortingOfObject);
