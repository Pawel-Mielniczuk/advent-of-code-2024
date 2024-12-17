import { createInput } from "./createInput.js";

async function countSafeReports() {
  const data = await createInput();

  const mockData = [
    [7, 6, 4, 2, 1],
    [1, 2, 7, 8, 9],
    [9, 7, 6, 2, 1],
    [1, 3, 2, 4, 5],
    [8, 6, 4, 4, 1],
    [1, 3, 6, 7, 9],
  ];
  //The levels are either all increasing or all decreasing.
  //Any two adjacent levels differ by at least one and at most three.
  //TODO  check if fn can exceed array, fix isStrictlyMonotonic

  const safeMap = new Map();
  for (let i = 0; i < data.length; i++) {
    let isSafe = false;
    const level = data[i];

    const isIncreasing = level.every((currentElem, index, arr) => {
      return (
        index === 0 ||
        (currentElem > arr[index - 1] && (index + 1 >= arr.length || Math.abs(currentElem - arr[index + 1]) <= 3))
      );
    });
    const isDecreasing = level.every((currentElem, index, arr) => {
      return (
        index === 0 ||
        (currentElem < arr[index - 1] && (index + 1 >= arr.length || Math.abs(currentElem - arr[index + 1]) <= 3))
      );
    });

    // const isStrictlyMonotonic = level.every((currentElem, index, arr) => currentElem !== arr[index + 1]);

    isSafe = isDecreasing || isIncreasing;

    if (isSafe) {
      safeMap.set(`${level}`, isSafe);
    }
  }
  // console.log("safeMap", safeMap);

  const filteredMap = new Map(Array.from(safeMap).filter(([key, value]) => value === true));
  console.log("filteredMap", filteredMap.size);
}

countSafeReports();
