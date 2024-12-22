import { createInput } from "./createInput.js";
import {
  isDecreasingSequence,
  isIncreasingSequence,
  isStrictlyMonotonicSequence,
  makeReportSafeByRemovingOneLevel,
} from "./validation.js";

async function countSafeReports() {
  const data: number[][] = await createInput();

  const safeMap: Map<string, boolean> = new Map();
  const makeSaveMap = new Map();
  const notSafeMap = new Map();

  for (let i = 0; i < data.length; i++) {
    let isSafe = false;
    const level = data[i];

    const isDecreasing = isDecreasingSequence(level);
    const isStrictlyMonotonic = isStrictlyMonotonicSequence(level);
    const isIncreasing = isIncreasingSequence(level);

    isSafe = isStrictlyMonotonic && (isDecreasing || isIncreasing);

    if (isSafe) {
      safeMap.set(`${level}`, isSafe);
    } else {
      notSafeMap.set(`${level}`, false);
    }
  }

  const safeReportArr = Array.from(notSafeMap.keys()).map((key) => key.split(",").map(Number));

  for (const [index, innerArr] of safeReportArr.entries()) {
    const res = makeReportSafeByRemovingOneLevel(innerArr);
    if (res !== null) {
      makeSaveMap.set(`${res}`, true);
    }
  }

  const filteredMap = new Map(Array.from(safeMap).filter(([key, value]) => value === true));
  const safeReport = new Map(Array.from(makeSaveMap).filter(([key, value]) => value === true));
  console.log(safeReport.size + filteredMap.size);
}

countSafeReports();
