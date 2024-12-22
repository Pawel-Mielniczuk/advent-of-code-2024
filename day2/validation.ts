export function isIncreasingSequence(array: number[]): boolean {
  return array.every((currentElem, index, self) => {
    return (
      index === 0 ||
      (currentElem > self[index - 1] &&
        Math.abs(currentElem - self[index - 1]) >= 1 &&
        Math.abs(currentElem - self[index - 1]) <= 3 &&
        (index + 1 >= self.length || Math.abs(currentElem - self[index + 1]) <= 3))
    );
  });
}

export function isDecreasingSequence(array: number[]): boolean {
  return array.every((currentElem, index, self) => {
    return (
      index === 0 ||
      (currentElem < self[index - 1] &&
        Math.abs(currentElem - self[index - 1]) >= 1 &&
        Math.abs(currentElem - self[index - 1]) <= 3)
    );
  });
}
export function isStrictlyMonotonicSequence(array: number[]): boolean {
  const hasIdenticalConsecutiveNum = array.every(
    (number, index) => index === array.length - 1 || number !== array[index + 1]
  );
  const isIncreasing = array.every((number, index) => index === array.length - 1 || number < array[index + 1]);
  const isDecreasing = array.every((number, index) => index === array.length - 1 || number > array[index + 1]);

  return hasIdenticalConsecutiveNum && (isDecreasing || isIncreasing);
}

export function makeReportSafeByRemovingOneLevel(array: number[]): number[] | null {
  if (array.length < 3) {
    return array;
  }

  let isSafe = false;
  let tempArray = [...array];

  for (const [index, value] of array.entries()) {
    tempArray.splice(index, 1);

    const isIncreasing = isIncreasingSequence(tempArray);
    const isDecreasing = isDecreasingSequence(tempArray);
    const strictlyMonotonicSequence = isStrictlyMonotonicSequence(tempArray);

    isSafe = strictlyMonotonicSequence && (isDecreasing || isIncreasing);
    if (isSafe) {
      return tempArray;
    } else {
      tempArray.splice(index, 0, value);
    }
  }
  return null;
}
