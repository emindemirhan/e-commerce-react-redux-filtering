export function calculatePercent(
  firstNum: number,
  secondNum?: number,
  decimal: number = 2
): number {
  const detectedSecondNum = secondNum ? secondNum : 100;
  const percent = (firstNum / detectedSecondNum) * 10;

  if (decimal === 0) {
    return Math.round(percent);
  } else {
    const coefficient = Math.pow(10, decimal);
    return Math.round(percent * coefficient) / coefficient;
  }
}
