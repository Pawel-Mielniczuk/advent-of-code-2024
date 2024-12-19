export function isIncreasingSequence(array) {
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

export function isDecreasingSequence(array) {
  return array.every((currentElem, index, self) => {
    return (
      index === 0 ||
      (currentElem < self[index - 1] &&
        Math.abs(currentElem - self[index - 1]) >= 1 &&
        Math.abs(currentElem - self[index - 1]) <= 3)
    );
  });
}
export function isStrictlyMonotonicSequence(array) {
  const hasIdenticalConsecutiveNum = array.every(
    (number, index) => index === array.length - 1 || number !== array[index + 1]
  );
  const isIncreasing = array.every((number, index) => index === array.length - 1 || number < array[index + 1]);
  const isDecreasing = array.every((number, index) => index === array.length - 1 || number > array[index + 1]);

  return hasIdenticalConsecutiveNum && (isDecreasing || isIncreasing);
}
