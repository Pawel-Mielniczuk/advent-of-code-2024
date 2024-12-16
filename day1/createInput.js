import fs from "fs/promises";

export async function createInput() {
  try {
    const data = await fs.readFile("input.txt", "utf8");

    const lines = data.trim().split("\n");
    return lines.map((line) => {
      const [a, b] = line.split(/\s+/).map(Number);
      return [a, b];
    });
  } catch (err) {
    console.error("Error during reading a file", err);
  }
}
