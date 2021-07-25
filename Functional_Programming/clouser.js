// --clousers is a inner/nested function ..But ,it continue even Outer function is completed --//
function outer() {
  // --inner function --//
  function inner(x, y) {
    let sum = x + y;
    let sub = x - y;
    let mul = x * y;
    let div = x / y;
    console.log(`Sum : ${sum} Sub : ${sub} Mul : ${mul} Div : ${div}`);
  }
  return inner;
}

const innerFunction = outer();
const result1 = innerFunction;
const result2 = innerFunction;
console.log(result1(20, 10), result2(30, 40));
