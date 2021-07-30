const prepareGreenTea = () => "greenTea";

const prepareBlackTea = () => "blackTea";

const getTea = (prepareTea, cups) => {
  const teaCups = [];
  for (let i = 1; i <= cups; i++) {
    const cup = prepareTea();
    teaCups.push(cup);
  }
  return teaCups;
};

const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);

console.log(tea4GreenTeamFCC, tea4BlackTeamFCC);
