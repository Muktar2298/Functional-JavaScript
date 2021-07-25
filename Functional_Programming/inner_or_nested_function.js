function outer() {
  // --inner function --//
  function inner() {
    console.log("I'm inner function");
  }
  inner();
  console.log("I'm Outer Function");
}

outer();
