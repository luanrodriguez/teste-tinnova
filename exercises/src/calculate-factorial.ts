export const calculateFactorial = (numberToCalculate: number): number => {
  if (numberToCalculate === 0) {
    return 1;
  }

  let factorial = 1;

  for (let index = 0; index < numberToCalculate; index++) {
    factorial *= index + 1;
  }

  return factorial;
};
