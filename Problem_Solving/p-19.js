function splitify(str) {
  const spliting = str.split(/[\s,.-]+/);
  
  // console.log(spliting);
  return spliting;
}
const spliting1 = splitify("Hello World,I-am code");
const spliting2 = splitify("Earth-is-our home");
const spliting3 = splitify("This.is.a-sentence");

console.log(spliting1,spliting2,spliting3);
