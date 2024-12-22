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

  for (let index = 0; index < array.length; index++) {
    const arrMinusOne = array.filter((_, i) => i !== index);

    const isIncreasing = isIncreasingSequence(arrMinusOne);
    const isDecreasing = isDecreasingSequence(arrMinusOne);
    const strictlyMonotonicSequence = isStrictlyMonotonicSequence(arrMinusOne);

    if (strictlyMonotonicSequence && (isDecreasing || isIncreasing)) {
      return arrMinusOne;
    }
  }
  return null;
}

export function processNotSafeReports(notSafeReports: number[][], makeSafeMap: Map<string, boolean>): void {
  notSafeReports.forEach((innerArr) => {
    const res = makeReportSafeByRemovingOneLevel(innerArr);
    if (res !== null) {
      makeSafeMap.set(`${res}`, true);
    }
  });
}
