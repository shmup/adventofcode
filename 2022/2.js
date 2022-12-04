const fs = require("fs");

const strategyGuide = fs.readFileSync("2.txt", "utf8").trim().split("\n");

const mappings = {
  A: 1, // rock
  B: 2, // paper
  C: 3, // scissors
  X: 1, // rock & lose
  Y: 2, // paper & draw
  Z: 3, // scissors & win
};

// Returns [elfChoice, myChoice]
const round1parser = (data) => {
  return data.split(" ").map((r) => mappings[r]);
};

// Returns [elfChoice, choiceToAchieveOutcome]
const round2parser = (data) => {
  const [elf, outcome] = round1parser(data);

  let output = [elf, elf];

  // lose
  if (outcome === 1) {
    if (elf === 1) output = [elf, 3];
    if (elf === 2) output = [elf, 1];
    if (elf === 3) output = [elf, 2];
  }

  // win
  if (outcome === 3) {
    if (elf === 1) output = [elf, 2];
    if (elf === 2) output = [elf, 3];
    if (elf === 3) output = [elf, 1];
  }

  return output;
};

const solver = (rounds, parser) =>
  rounds
    .map(parser)
    .map(([elf, me]) => {
      let score = 0;

      // draw
      if (me === elf) score = 3;

      // won
      if (me === 1 && elf === 3) score = 6;
      if (me === 2 && elf === 1) score = 6;
      if (me === 3 && elf === 2) score = 6;

      return me + score;
    })
    .reduce((a, v) => {
      a += v;
      return a;
    }, 0);

console.debug(2.1, solver(strategyGuide, round1parser));
console.debug(2.2, solver(strategyGuide, round2parser));
