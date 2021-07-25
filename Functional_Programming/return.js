// 1.Basic of return --//
const calculation = (x, y, z) => {
  return x + y + z;
};

let adding = calculation(10, 10, 10);
const add = adding + 10;
console.log(add);

// 2---return a object --//
const factoryFunction = (name, age, email) => {
  return {
    name: name,
    age: age,
    email: email,
  };
};
const obj = factoryFunction("Nishat", 21, "muktar15-2298@diu.edu.bd");
console.log(obj);

// 3--return object from inner function into  a myFunction --//
function myFunction() {
  function inner(name, age, email) {
    return {
      name: name,
      age: age,
      email: email,
    };
  }
  return inner;
}
const innerFunction = myFunction();
const innerFunctionObject = innerFunction(
  "Nusrat Jahan Tanha",
  21,
  "nusrat-2298@diu.edu.bd"
);
console.log(innerFunctionObject.email);
