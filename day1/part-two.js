import { createInput } from "./createInput.js";

async function calculateDistance() {
  const parsedData = await createInput();

  const sortedLeftRow = parsedData.map((line) => line[0]);
  const sortedRightRow = parsedData.map((line) => line[1]);

  const similarityArr = [];
  for (const [index, value] of sortedLeftRow.entries()) {
    const allMatchesNum = sortedRightRow.filter((num) => num === value);
    if (sortedRightRow.includes(value)) {
      similarityArr.push({
        value,
        numberOf: allMatchesNum.length,
      });
    } else {
      similarityArr.push({
        value,
        numberOf: 0,
      });
    }
  }

  let result = similarityArr.reduce((acc, curr) => {
    return (acc += curr.value * curr.numberOf);
  }, 0);

  console.log("result", result);
}

calculateDistance();
