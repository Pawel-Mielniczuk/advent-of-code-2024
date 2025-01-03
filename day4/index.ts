import fs from "fs/promises";

async function createInput(): Promise<string> {
  return fs.readFile("./input.txt", "utf8");
}

function countOccurrences(grid: string[][], word: string): number {
  let count = 0;
  const rows = grid.length;
  const cols = grid[0].length;

  // in Row
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j <= cols - 4; j++) {
      let sequence = "";
      for (let k = 0; k < 4; k++) {
        sequence += grid[i][j + k];
      }
      if (sequence === word) {
        count++;
      }
    }
  }

  //in Columns
  for (let j = 0; j < cols; j++) {
    for (let i = 0; i <= rows - 4; i++) {
      let sequence = "";
      for (let k = 0; k < 4; k++) {
        sequence += grid[i + k][j];
      }
      if (sequence === word) {
        count++;
      }
    }
  }

  // Diagonals (from top left to bottom right)
  for (let i = 0; i <= rows - 4; i++) {
    for (let j = 0; j <= cols - 4; j++) {
      let sequence = "";
      for (let k = 0; k < 4; k++) {
        sequence += grid[i + k][j + k];
      }
      if (sequence === word) {
        count++;
      }
    }
  }

  //   Diagonals (from top right to bottom left)
  for (let i = 0; i <= rows - 4; i++) {
    for (let j = cols - 1; j >= 3; j--) {
      let sequence = "";
      for (let k = 0; k < 4; k++) {
        sequence += grid[i + k][j - k];
      }
      if (sequence === word) {
        count++;
      }
    }
  }

  return count;
}

async function findSentenceInGrid() {
  try {
    const data = await createInput();
    const grid = data
      .split("\n")
      .filter((row) => row.trim() !== "")
      .map((row) => row.trim().split(""));

    const xmasCount = countOccurrences(grid, "XMAS");
    const samxCount = countOccurrences(grid, "SAMX");
    const totalCount = xmasCount + samxCount;

    console.log("totalCount", totalCount);
  } catch (error) {
    console.error("An error", error);
  }
}

findSentenceInGrid();
