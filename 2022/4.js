const fs = require("fs");

const assignments = fs.readFileSync("4.txt", "utf8").trim().split("\n");

const bits = assignments.map((assignment) =>
  assignment.split(",").map((a) => a.split("-").map((a) => Number(a)))
);

const wastedWork = bits.filter((bits) => {
  const [[a, b], [x, y]] = bits;

  return (a >= x && b <= y) || (x >= a && y <= b);
});

console.debug(4.1, wastedWork.length);

const overlappingWork = bits.filter((bit) => {
  const [[a, b], [x, y]] = bit;

  return !(a>y || b<x);
});

console.debug(4.2, overlappingWork.length);
