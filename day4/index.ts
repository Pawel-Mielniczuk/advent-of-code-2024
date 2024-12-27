import fs from "fs/promises";

async function createInput(): Promise<string> {
  return await fs.readFile("./day3/input.txt", "utf8");
}

async function findSentenceInGrid() {}

findSentenceInGrid();
