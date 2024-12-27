import fs from "fs/promises";

async function createInput(): Promise<string> {
  return await fs.readFile("./input.txt", "utf8");
}

const mockedGrid = [
  ["MMMSXXMASM"],
  ["MSAMXMSMSA"],
  ["AMXSXMAAMM"],
  ["MSAMASMSMX"],
  ["XMASAMXAMM"],
  ["XXAMMXXAMA"],
  ["SMSMSASXSS"],
  ["SAXAMASAAA"],
  ["MAMMMXMMMM"],
  ["MXMXAXMASX"],
];

function transformArrayOfStringIntoArrayOfChar(array) {
  const transformArray = array.map((row) => {
    const item = row[0].split("");
    return item;
  });
  return transformArray;
}

function mergeCharactersIntoArray(array: string[][]): string[][] {
  return array.map((innerArr) => [innerArr.join("")]);
}

const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
//
// 0 1 2 => index 0
// 0 1 2 => index 1
// 0 1 2 => index 2

function transposeGrid(grid: string[][]): string[][] {
  const transposedGrid: string[][] = grid.map(() => {
    return [];
  });

  const gridLength = grid.length;
  for (let i = 0; i < gridLength; i++) {
    const row = grid[i];
    for (let j = 0; j < row.length; j++) {
      transposedGrid[j].push(row[j]);
    }
  }
  return transposedGrid;
}

async function findSentenceInGrid() {
  const data = await createInput();
  const characterGrid = data.split("\n").map((row) => [row]);
  const SEARCH_WORD = /XMAS/;
  const BACKWARD_SEARCH_WORD = /SAMX/;
  let count = 0;

  function findForwardAndBackward(arr: string[][]): void {
    for (let i = 0; i < arr.length; i++) {
      const row = arr[i][0];
      if (row.match(SEARCH_WORD)) {
        count += 1;
      }
      if (row.match(BACKWARD_SEARCH_WORD)) {
        count += 1;
      }
    }
  }
  findForwardAndBackward(mockedGrid);
  const transformedArray = transformArrayOfStringIntoArrayOfChar(mockedGrid);
  const transposedGrid = transposeGrid(transformedArray);
  const mergedCharInArr = mergeCharactersIntoArray(transposedGrid);
  findForwardAndBackward(mergedCharInArr);

  console.log("count", count);
}

findSentenceInGrid();
