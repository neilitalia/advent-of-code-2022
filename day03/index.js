/* Part 1 */

const fs = require("fs");

const input = fs.readFileSync("./input.txt");
const inputArray = input.toString().split("\n");

let totalPriorities = 0;

const splitArrayToHalf = (array) => {
  const length = array.length;
  const midpoint = Math.ceil(length / 2);
  return [[...array.slice(0, midpoint)], [...array.slice(midpoint)]];
};

const getIntersection = (arrayA, arrayB) => {
  const intersections = arrayA.filter((e) => arrayB.includes(e));
  return intersections;
};

const getPriority = (char) => {
  const VALUES = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return VALUES.indexOf(char) + 1;
};

let data = inputArray.map((rucksack, i) => {
  const halves = splitArrayToHalf(rucksack);
  const sharedItems = getIntersection(halves[0], halves[1]);
  const priority = getPriority(sharedItems[0]);

  totalPriorities += priority;

  return {
    rucksack: i,
    halves: halves,
    shared: {
      priority: priority,
      items: sharedItems,
    },
  };
});

console.log("data :>>", data);
console.log("totalPriorities :>>", totalPriorities);

/* Part 2 */

let totalPriorities2 = 0;

const getIntersection2 = (arrayA, arrayB, arrayC) => {
  let longestArray = arrayA;

  if (arrayB.length > longestArray.length) longestArray = arrayB;
  if (arrayC.length > longestArray.length) longestArray = arrayC;

  const intersections = arrayA.filter((e) => {
    return arrayB.includes(e) && arrayC.includes(e);
  });
  return intersections;
};

for (let i = 0; i < inputArray.length; i += 3) {
  const elf1 = inputArray[i].split("");
  const elf2 = inputArray[i + 1].split("");
  const elf3 = inputArray[i + 2].split("");

  const group = getIntersection2(elf1, elf2, elf3);

  console.log("i", i);
  console.log("group", group);

  totalPriorities2 += getPriority(group[0]);
}

console.log("totalPriorities2 :>>", totalPriorities2);
