let globalArray = [5, 6, 3, 2, 9];
let globalArray2 = [1, 30, 4, 21, 100000];
let globalArray3 = [140000, 104, 99];

function nonMutatingSort(arr) {
  let copiedArray = [...arr];
  let newArray = copiedArray.sort((a, b) => a - b);
  return newArray;
}
const sorting1 = nonMutatingSort(globalArray);
const sorting2 = nonMutatingSort(globalArray2);
const sorting3 = nonMutatingSort(globalArray3);

console.log(sorting1, sorting2, sorting3);

// console.log(globalArray, globalArray2, globalArray3);
