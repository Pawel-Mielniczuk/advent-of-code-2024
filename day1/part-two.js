import fs from "fs/promises";

async function calculateDistance() {
  try {
    const data = await fs.readFile("input.txt", "utf8");

    const lines = data.trim().split("\n");
    const parsedData = lines.map((line) => {
      const [a, b] = line.split(/\s+/).map(Number);
      return [a, b];
    });

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
  } catch (err) {
    console.error("Error during reading a file", err);
  }
}

calculateDistance();
