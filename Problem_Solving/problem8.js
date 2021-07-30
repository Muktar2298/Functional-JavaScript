// The global variable
var s = [23, 65, 98, 5];


/* using mapping --//
 const square = s.map((e) => {
  return e * 2;
});
console.log(square); */



// --Creating own version of map --//
Array.prototype.myMap = function (square) {
  // console.log(this)
  let newArray = [];

  for (let i = 0; i < this.length; i++) {
    const element = square(this[i]);
    newArray.push(element);
  }
  // console.log(newArray);
  return newArray;
};

// --behave like a map() --//
let doubleIt = s.myMap(function (element) {
  return element * 2;
});
