function alphabeticalOrder(arr) {
  let sorting = arr.sort();
  return sorting;
  
}
const sorting1 = alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);
const sorting2 = alphabeticalOrder(["x", "h", "a", "m", "n", "m"]);
const sorting3 = alphabeticalOrder(["a", "a", "a", "a", "x", "t"]);

console.log(sorting1, sorting2, sorting3);
