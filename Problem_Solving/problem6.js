// The global variable or main array ---/
var bookList = [
  "The Hound of the Baskervilles",
  "On The Electrodynamics of Moving Bodies",
  "Philosophiæ Naturalis Principia Mathematica",
  "Disquisitiones Arithmeticae",
];

// --for adding array elements --//
function add(booklist, bookName) {
  let newArray = [...booklist];
  newArray.push(bookName);
  return newArray;
}

// --Removing Array Elements --//
function remove(booklist, bookName) {
  let newArray = [...booklist];
  var book_index = newArray.indexOf(bookName);
  if (book_index >= 0) {
    newArray.splice(book_index, 1);
    return newArray;
  } else {
    console.log(`${bookName} is not  matching in this arrays`);
  }
}

var newBookList = add(bookList, "A Brief History of Time");
console.log(newBookList);

var newerBookList = remove(bookList, "On The Electrodynamics of Moving Bodies");
console.log(newerBookList);

var newestBookList = remove(
  add(bookList, "A Brief History of Time"),
  "On The Electrodynamics of Moving Bodies"
);
console.log(newerBookList);

// --main array --//
console.log(bookList);






