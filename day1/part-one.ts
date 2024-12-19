// import fs from "fs/promises";
import { createInput } from "./createInput.ts";

async function calculateDistance() {
  const parsedData: number[][] = await createInput();

  const sortedLeftRow = parsedData.map((line: number[]) => line[0]).sort((a, b) => a - b);
  const sortedRightRow = parsedData.map((line: number[]) => line[1]).sort((a, b) => a - b);

  let calculatedDistance = 0;

  for (let i = 0; i < sortedLeftRow.length; i++) {
    calculatedDistance += Math.abs(sortedLeftRow[i] - sortedRightRow[i]);
  }

  console.log("calculatedDistance", calculatedDistance);
}

calculateDistance();
