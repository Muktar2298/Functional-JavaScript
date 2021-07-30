function sliceArray(anim, beginSlice, endSlice) {
  const sliceArray = [...anim];
  let newArray = sliceArray.slice(beginSlice, endSlice);
  return newArray;
}
var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);
