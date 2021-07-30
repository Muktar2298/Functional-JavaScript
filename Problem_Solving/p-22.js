function checkPositive(arr) {
  return arr.every((e) => e > 0);
}
const checkPositive1 = checkPositive([1, 2, 3, -4, 5]);
const checkPositive2 = checkPositive([1, 2, 3, 4, 5]);
const checkPositive3 = checkPositive([1, -2, 3, -4, 5]);

console.log(checkPositive1, checkPositive2, checkPositive3);
