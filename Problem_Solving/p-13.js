function nonMutatingConcat(original, attach) {
  let newConcat = original.concat(attach);
  //   console.log(newConcat);
  return newConcat;
}
var first = [1, 2, 3];
var second = [4, 5];
nonMutatingConcat(first, second);

