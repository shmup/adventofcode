const fs = require("fs");

const rucks = fs.readFileSync("3.txt", "utf8").trim().split("\n");
const adder = (stuff) =>
  stuff.reduce((a, v) => {
    a += v;
    return a;
  }, 0);

// Convert each row to an array of priorities
const bits = rucks.map((r) =>
  r.split("").map((c) => {
    const code = c.charCodeAt(0);
    return code < 97 ? code - 38 : code - 96;
  })
);

// Halve each row and compare each half the matching priority
const matchingItems = bits.map((b) => {
  const r1 = b.slice(0, b.length / 2);
  const r2 = b.slice(b.length / 2, b.length);

  return r1.filter((r) => r2.includes(r))[0];
});

console.debug(3.1, adder(matchingItems));

// Grab the priority that appears in each chunk of 3 bits
const badges = [];
for (let i = 0; i < bits.length; i += 3) {
  const [elf1, elf2, elf3] = [bits[i], bits[i + 1], bits[i + 2]];

  const thing = elf1.filter((e1) => elf2.includes(e1) && elf3.includes(e1));

  badges.push(thing[0]);
}

console.debug(3.2, adder(badges));
