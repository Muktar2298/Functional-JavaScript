function urlSlug(title) {
  return title
  .toLowerCase()
  .trim()
  .split(/\s+/)
  .join("-");
}

const urlSlug1 = urlSlug("Winter Is Coming");
const urlSlug2 = urlSlug(" Winter Is  Coming");
const urlSlug3 = urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");
const urlSlug4 = urlSlug("Hold The Door");

console.log(urlSlug1, urlSlug2, urlSlug3);
