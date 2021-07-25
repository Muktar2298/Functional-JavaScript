/* // --A simple function(Pure Function) --//
function firstClassFunction(name) {
  return "Hello!" + name;
}
const hello = firstClassFunction("Nishat Hasan Muktar"); //--call  function --/
console.log(hello);

const getFullFunction = firstClassFunction; //--for gettering the full function --//
console.log(getFullFunction); */

// ==>> (1).A function can be stored in a Variable --//

/* // --way-1 --(using function expression)
const firstClassFunction = function (name) {
  console.log("Hello =>", name);
};
firstClassFunction("Nishat Hasan Muktar"); */

/* // --way-2 --(normal way )//
function firstClassFunction(name) {
  return "Hello" + name;
}
const getFullFunction = firstClassFunction; //--stored the function into getFullFunction variable --//
console.log(getFullFunction); */

/* // ==>> (2). A function can be stored in an array (as a array element) --//
function firstClassFunction(name) {
  return "Hello!" + name;
}
const getFullFunction = firstClassFunction;

const arr = [
  getFullFunction,
  function arrFunction() {
    console.log("Hello");
  },
];
console.log(arr); */

/* // ==>> (3).A function can be stored in an object (as an object property) --//
function firstClassFunction(name) {
  return "Hello!" + name;
}
const getFullFunction = firstClassFunction;
const obj = {
  name: "nishat",
  get: getFullFunction,
  set: function () {
    console.log("setting");
  },
};

console.log(obj); */

/* // ==>> (4).We can pass a function as a perameter on another function --//
// --function One --//
function one(x, y) {
  return x + y;
}
const functionOne = one;
// console.log(functionOne);

//   --function Two --//
function tow(perameter) {
  //   console.log(perameter);
  return perameter;
}
const functionTow = tow(functionOne);
console.log(functionTow(10, 10)); */

// ==>> (5).We can retrurn a function(Child Function) from a from a function(Parent Function)--//
//--means "Clouser" --//

function outerFunction(n1, n2) {
  let x = n1;
  let y = n2;
  let sum = 0;

  // --innerFunction --//
  function innerFunction() {
    sum = x + y;
    console.log(sum);
  }
  return innerFunction;
}

const result = outerFunction(10, 20);
console.log(result);
result();

