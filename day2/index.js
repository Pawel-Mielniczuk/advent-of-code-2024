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

  const safeMap = new Map();
  for (let i = 0; i < mockData.length; i++) {
    let isSafe = false;
    const level = mockData[i];

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

    for (let j = 0; j < level.length; j++) {
      const currentElem = level[j];
      const nextElem = level[j + 1];

      if (isDecreasing || isIncreasing) {
        isSafe = true;
        break;
      } else {
        isSafe = false;
      }
    }
    if (isSafe) {
      safeMap.set(`level ${mockData[i]}`, isSafe);
    } else {
      safeMap.set(`level ${mockData[i]}`, isSafe);
    }
  }

  const filteredMap = new Map(Array.from(safeMap).filter(([key, value]) => value === true));
  console.log("filteredMap", filteredMap.size);
}

countSafeReports();
