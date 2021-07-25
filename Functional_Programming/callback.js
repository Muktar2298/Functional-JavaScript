// 1.
/* function getting(name) {
  console.log("Hello", name);
}

function processUserInput(callback) {
  console.log("I'm Processing callback function");
  callback("Nishat Hasan Muktar");
}
processUserInput(getting); */

// 2.
// function hello(name, callback) {
//   callback(name);
// }

// hello("Nishat Hasan Muktar", function (name) {
//   console.log("Hello", name);
// });

// 3.
const callBack = (name, callback) => {
  callback(name);
};
callBack("Ojhora Pius Ripu", (name) => {
  console.log("Nishat => Hello :", name + "!");
});

callBack("Ojhora pius Ripu ", (name) => {
  console.log("Nishat => How are you :", name + "?");
});

callBack("Nihat", (name) => {
  console.log(
    "Ojhora Pius Ripu => I'm fine! " + "What about you " + name + " ?"
  );
});
