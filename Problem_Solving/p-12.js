function nonMutatingSplice(cities) {
  // Only change code below this line
  const sliceArray = [...cities];
  let newArray = sliceArray.slice(0, 3);
//   console.log(newArray);
  return newArray;

  // Only change code above this line
}
var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
nonMutatingSplice(inputCities);
