const fs = require("fs").promises;

async function calculateDistance() {
  try {
    const data = await fs.readFile("input.txt", "utf8");

    const lines = data.trim().split("\n");
    const parsedData = lines.map((line) => {
      const [a, b] = line.split(/\s+/).map(Number);
      return [a, b];
    });

    const sortedLeftRow = parsedData.map((line) => line[0]).sort((a, b) => a - b);
    const sortedRightRow = parsedData.map((line) => line[1]).sort((a, b) => a - b);

    let calculatedDistance = 0;

    for (let i = 0; i < sortedLeftRow.length; i++) {
      calculatedDistance += Math.abs(sortedLeftRow[i] - sortedRightRow[i]);
    }

    console.log("calculatedDistance", calculatedDistance);
  } catch (err) {
    console.error("Error during reading a file", err);
  }
}

calculateDistance();
