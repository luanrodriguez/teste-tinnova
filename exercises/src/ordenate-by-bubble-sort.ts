export const ordenateByBubbleSort = (arrayToOrdenate: number[]): number[] => {
  for (
    let mainLoopIndex = 0;
    mainLoopIndex < arrayToOrdenate.length - 1;
    mainLoopIndex++
  ) {
    for (
      let arrayLoopIndex = 0;
      arrayLoopIndex < arrayToOrdenate.length - mainLoopIndex - 1;
      arrayLoopIndex++
    ) {
      const firstNumber: number = arrayToOrdenate[arrayLoopIndex];
      const secondNumber: number = arrayToOrdenate[arrayLoopIndex + 1];

      if (firstNumber > secondNumber) {
        arrayToOrdenate[arrayLoopIndex + 1] = firstNumber;
        arrayToOrdenate[arrayLoopIndex] = secondNumber;
      }
    }
  }

  return arrayToOrdenate;
};
