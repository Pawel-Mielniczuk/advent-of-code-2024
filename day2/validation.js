export function isIncreasingSequence(array) {
  return array.every((currentElem, index, self) => {
    return (
      index === 0 ||
      (currentElem > self[index - 1] && (index + 1 >= self.length || Math.abs(currentElem - self[index + 1]) <= 3))
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
  return array.every((number, index, self) => number !== self[index + 1]);
}
