const prepareTea = () => "greenTea";

const getTea = (cups) => {
  let numberOfCups = [];
  for (let i = 0; i < cups; i++) {
    const element = prepareTea();
    numberOfCups.push(element);
  }
  return numberOfCups;
};

const tea4TeamFCC = getTea(40);
console.log(tea4TeamFCC);
