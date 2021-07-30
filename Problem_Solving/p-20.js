function sentensify(str) {
  const spliting = str.split(/[\s,.-]+/);
  //   console.log(spliting);
  const joining = spliting.join(" ");
  console.log(joining);
  return joining;
}
const joining1 = sentensify("May-the-force-be-with-you");
const joining2 = sentensify("The.force.is.strong.with.this.one");
const joining3 = sentensify("There,has,been,an,awakening");
console.log(joining1, joining2, joining3);
