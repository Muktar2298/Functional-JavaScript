const squareList = (arr) => {
  let newArray = arr
    .filter((e) => e > 0 && Number.isInteger(e) == true)
    .map((square) => square * square);
  // console.log(newArray);

  return newArray;
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
const squaredIntegers2 = squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]);
const squaredIntegers3 = squareList([-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3]);
console.log(squaredIntegers, squaredIntegers2, squaredIntegers3);
