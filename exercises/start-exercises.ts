import { calculateFactorial } from "./src/calculate-factorial";
import { ordenateByBubbleSort } from "./src/ordenate-by-bubble-sort";
import { sumTheMultiplesOfFiveAndThree } from "./src/sum-the-multiples-of-five-and-three";
import { ElectionCalculator } from "./src/election-calculator";

const electionCalculator = new ElectionCalculator({
  validVotes: 800,
  blankVotes: 150,
  nullVotes: 50,
});

console.log({
  factorial: calculateFactorial(6),
  ordenatedArrayByBubbleSort: ordenateByBubbleSort([5, 3, 2, 4, 7, 1]),
  sumOfMultiples: sumTheMultiplesOfFiveAndThree(10),
  percentageOfValidVotes: electionCalculator.getPercentageOfValidVotes(),
  percentageOfBlankVotes: electionCalculator.getPercentageOfBlankVotes(),
  percentageOfNullVotes: electionCalculator.getPercentageOfNullVotes(),
});
