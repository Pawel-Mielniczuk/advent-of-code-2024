import { createInput } from "./createInput.js";

async function calculateDistance() {
  const parsedData = await createInput();

  const sortedLeftRow = parsedData.map((line) => line[0]);
  const sortedRightRow = parsedData.map((line) => line[1]);

  const countMap = {};
  for (const num of sortedRightRow) {
    countMap[num] = (countMap[num] || 0) + 1;
  }

  let result = 0;

  for (const value of sortedLeftRow) {
    const count = countMap[value] || 0;
    result += value * count;
  }

  console.log("result", result);
}

calculateDistance();
