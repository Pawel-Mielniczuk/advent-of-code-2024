import fs from "fs/promises";

async function createInput(): Promise<string> {
  return await fs.readFile("input.txt", "utf8");
}

async function scanUncorruptedMemory(): Promise<void> {
  const data = await createInput();

  const multiplicationExpressions: string[] = data.match(/mul\(\d+,\d+\)/g) || [];

  let result = 0;

  const parsedNumbers: number[][] = multiplicationExpressions.map((elem) => {
    const item = elem.match(/\d+/g)?.map((num) => Number(num)) ?? [];
    return item;
  });

  const products = parsedNumbers.map((operandPair: number[]) => operandPair[0] * operandPair[1]);

  result = products.reduce((acc: number, curr: number) => {
    return acc + curr;
  });

  console.log("result", result);
}

scanUncorruptedMemory();
