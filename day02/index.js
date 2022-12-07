/* Part 1 */

const fs = require("fs");

const input = fs.readFileSync("./input.txt");

let data = input.toString().split("\n");
let totalScore = 0;

const getScore = (aMove, bMove) => {
  let score = 0;

  /* Get points for choice */
  if (bMove === "rock") score += 1;
  if (bMove === "paper") score += 2;
  if (bMove === "scissors") score += 3;

  /* Get points for draw */
  if (aMove === bMove) score += 3;

  /* Get points for winning */
  if (
    (aMove === "rock" && bMove === "paper") ||
    (aMove === "paper" && bMove === "scissors") ||
    (aMove === "scissors" && bMove === "rock")
  ) {
    score += 6;
  }

  return score;
};

const getMove = (choice) => {
  if (choice === "A" || choice === "X") return "rock";
  if (choice === "B" || choice === "Y") return "paper";
  if (choice === "C" || choice === "Z") return "scissors";
};

data.forEach((round) => {
  const choices = round.split(" ");
  const aMove = getMove(choices[0]);
  const bMove = getMove(choices[1]);

  totalScore += getScore(aMove, bMove);
});

console.log("data :>>", data);
console.log("totalScore :>>", totalScore);

/* Part 2 */

let totalScore2 = 0;

const getScore2 = (aMove, bMove) => {
  let score = 0;

  /* Lose scenario */
  if (bMove === "X") {
    score += 0;
    if (aMove === "rock") score += 3;
    if (aMove === "paper") score += 1;
    if (aMove === "scissors") score += 2;
  }

  /* Draw scenario */
  if (bMove === "Y") {
    score += 3;
    if (aMove === "rock") score += 1;
    if (aMove === "paper") score += 2;
    if (aMove === "scissors") score += 3;
  }

  /* Win scenario */
  if (bMove === "Z") {
    score += 6;
    if (aMove === "rock") score += 2;
    if (aMove === "paper") score += 3;
    if (aMove === "scissors") score += 1;
  }

  return score;
};

data.forEach((round) => {
  const choices = round.split(" ");
  const aMove = getMove(choices[0]);
  const bMove = choices[1];

  totalScore2 += getScore2(aMove, bMove);
});

console.log("totalScore2 :>>", totalScore2);
