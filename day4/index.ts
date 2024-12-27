import { count } from "console";
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

async function findSentenceInGrid() {
  const data = await createInput();
  const characterGrid = data.split("\n").map((row) => [row]);
  const SEARCH_WORD = /XMAS/;
  const BACKWARD_SEARCH_WORD = /SAMX/;
  let count = 0;

  function findForwardAndBackward() {
    for (let i = 0; i < mockedGrid.length; i++) {
      const row = mockedGrid[i][0];
      if (row.match(SEARCH_WORD)) {
        count += 1;
      }
      if (row.match(BACKWARD_SEARCH_WORD)) {
        count += 1;
      }
    }
  }
  findForwardAndBackward();
}

findSentenceInGrid();
