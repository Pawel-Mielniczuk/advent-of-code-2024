import fs from "fs/promises";

async function createInput(): Promise<string> {
  return await fs.readFile("input.txt", "utf8");
}

async function scanUncorruptedMemory(): Promise<void> {
  const data = await createInput();

  const matches: string[] = data.match(/mul\(\d+,\d+\)/g) || [];

  let result = 0;

  const numbers: number[][] = matches.map((elem) => {
    const item = elem.match(/\d+/g)?.map((num) => Number(num)) ?? [];
    return item;
  });

  const numWithSum = numbers.map((arr: number[]) => arr[0] * arr[1]);

  result = numWithSum.reduce((acc: number, curr: number) => {
    return acc + curr;
  });

  console.log("result", result);
}

scanUncorruptedMemory();
