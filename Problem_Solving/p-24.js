function add(x) {
  return function (y) {
    return function (z) {
      return x + y + z;
    };
  };
}
const result1 = add(10)(20)(30);
const result2 = add(1)(2)(3);
const result3 = add(11)(22)(33);
console.log(result1, result2, result3);
