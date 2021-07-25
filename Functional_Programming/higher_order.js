// 1.Basic of higer-order function --//
function one() {
  console.log("I'm function One");
}

const functionOne = one;
// console.log(functionOne)

function two(passAnyFunction) {
  return passAnyFunction;
}
const functionTwo = two(functionOne);
functionTwo();

// 2.anothe example of higher-order function --//
const arr = [4, 5, 6, 7, 8];

function arrayFinderFunction(element) {
  console.log(element);
}

arr.forEach(arrayFinderFunction);
