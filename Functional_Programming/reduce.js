// --find the sum of all element --//
/* // 1.Normal way --//
const arr = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 30, 31,
];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  element = arr[i];
  sum += element;
}
console.log(sum); */

// 2.in functional way --//
const arr = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 30, 31,
];
const sum = arr.reduce(function (a, b) {
  return a + b;
});
console.log(sum);
