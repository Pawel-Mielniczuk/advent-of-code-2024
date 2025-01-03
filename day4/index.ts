import fs from "fs/promises";

async function createInput(): Promise<string> {
  return fs.readFile("./input.txt", "utf8");
}

export function countOccurrences(grid: string[][], word: string): number {
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

function isMasOrSam(word: string): boolean {
  return word === "MAS" || word === "SAM";
}

export function getXMASCount(grid: string[][]): number {
  const rows = grid.length;
  const cols = grid[0].length;
  let count = 0;

  for (let i = 1; i < rows - 1; i++) {
    for (let j = 1; j < cols - 1; j++) {
      const topLeft = grid[i - 1][j - 1];
      const center = grid[i][j];
      const topRight = grid[i - 1][j + 1];
      const bottomLeft = grid[i + 1][j - 1];
      const bottomRight = grid[i + 1][j + 1];

      const diagonal1 = topLeft + center + bottomRight;
      const diagonal2 = topRight + center + bottomLeft;

      if (isMasOrSam(diagonal1) && isMasOrSam(diagonal2)) {
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
    const xMASCount = getXMASCount(grid);

    console.log("part 1 result", totalCount);
    console.log("part 2 result", xMASCount);
  } catch (error) {
    console.error("An error", error);
  }
}

findSentenceInGrid();
