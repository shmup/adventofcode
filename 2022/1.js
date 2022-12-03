const fs = require("fs");

// 1.1
const elfFat = fs
  .readFileSync("1.txt", "utf8")
  .split("\n\n")
  .map((c) =>
    c.split("\n").reduce((a, v) => {
      a += Number(v);
      return a;
    }, 0)
  )
  .sort((a, b) => b - a);

console.debug(1.1, elfFat[0]);

// 1.2
const fattestThreeElvesCalories = elfFat
  .slice(0, 3)
  .reduce((a, v) => {
    a += v;
    return a;
  }, 0);

console.debug(1.2, fattestThreeElvesCalories);
