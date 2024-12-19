import fs from "fs/promises";

export async function createInput(): Promise<number[][]> {
  try {
    const data = await fs.readFile("input.txt", "utf8");

    return data.split(/\r?\n/).map((line) => line.split(" ").map(Number));
  } catch (err) {
    console.error("Error during reading a file", err);
    return [];
  }
}
