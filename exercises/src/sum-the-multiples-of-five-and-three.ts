export const sumTheMultiplesOfFiveAndThree = (numberToSum: number): number => {
  let sum = 0;

  for (let index = 1; index < numberToSum; index++) {
    if (index % 3 === 0 || index % 5 === 0) {
      sum += index;
    }
  }

  return sum;
};
