import { createInput } from "./createInput.js";
import {
  isDecreasingSequence,
  isIncreasingSequence,
  isStrictlyMonotonicSequence,
  processNotSafeReports,
} from "./validation.js";

async function countSafeReports() {
  const data: number[][] = await createInput();

  const report: Map<string, boolean> = new Map();
  const makeSafeMap = new Map<string, boolean>();

  processReports(data, report);

  const { safeReports, notSafeReports } = filterReports(report);

  processNotSafeReports(notSafeReports, makeSafeMap);

  const result = makeSafeMap.size + safeReports.length;
  console.log(result);
}

function processReports(data: number[][], report: Map<string, boolean>) {
  data.forEach((level) => {
    const isDecreasing = isDecreasingSequence(level);
    const isStrictlyMonotonic = isStrictlyMonotonicSequence(level);
    const isIncreasing = isIncreasingSequence(level);

    const isSafe = isStrictlyMonotonic && (isDecreasing || isIncreasing);
    report.set(`${level}`, isSafe);
  });
}

function filterReports(report: Map<string, boolean>) {
  const safeReports: number[][] = [];
  const notSafeReports: number[][] = [];

  report.forEach((value, key) => {
    const reportArray = key.split(",").map(Number);
    if (value) {
      safeReports.push(reportArray);
    } else {
      notSafeReports.push(reportArray);
    }
  });

  return { safeReports, notSafeReports };
}

countSafeReports();
