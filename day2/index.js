import { createInput } from "./createInput.js";
import { isDecreasingSequence, isIncreasingSequence, isStrictlyMonotonicSequence } from "./validation.js";

async function countSafeReports() {
  const data = await createInput();

  const safeMap = new Map();
  for (let i = 0; i < data.length; i++) {
    let isSafe = false;
    const level = data[i];

    const isDecreasing = isDecreasingSequence(level);
    const isStrictlyMonotonic = isStrictlyMonotonicSequence(level);
    const isIncreasing = isIncreasingSequence(level);

    isSafe = isStrictlyMonotonic && (isDecreasing || isIncreasing);

    if (isSafe) {
      safeMap.set(`${level}`, isSafe);
    }
  }

  const filteredMap = new Map(Array.from(safeMap).filter(([key, value]) => value === true));
  console.log("filteredMap size:", filteredMap.size);
}

countSafeReports();
