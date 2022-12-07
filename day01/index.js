/* Part 1 */

const fs = require("fs");

const input = fs.readFileSync("./input.txt");

let data = input.toString().split("\n\n");

const splitToIndividualCalories = (str) => {
  return str.split("\n").map((calories) => parseInt(calories));
};

const getTotalCalories = (arr) => {
  return arr.reduce(
    (accumulator, currentValue) => accumulator + parseInt(currentValue),
    0
  );
};

data = data
  .map((e, i) => {
    const splitCalories = splitToIndividualCalories(e);
    const total = getTotalCalories(splitCalories);
    return {
      elf: i,
      total: total,
      calories: splitCalories,
    };
  })
  .sort((a, b) => {
    return b.total - a.total;
  });

console.log("data :>>", data);
console.log("elf carrying most calories :>>", data[0]);

/* Part 2 */

console.log("top 3 elves carrying most calories :>>", [
  data[0],
  data[1],
  data[2],
]);
console.log(
  "total calories from top 3 elves :>>",
  data[0].total + data[1].total + data[2].total
);
