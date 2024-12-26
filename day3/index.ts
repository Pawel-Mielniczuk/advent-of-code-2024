import fs from "fs/promises";

export function calculateActiveMultiplications(data: string): number {
  let isActive = true;
  let result = 0;

  const regex = /mul\((\d+),(\d+)\)|do\(\)|don't\(\)/g;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(data)) !== null) {
    if (match[0] === "do()") {
      isActive = true;
    } else if (match[0] === "don't()") {
      isActive = false;
    } else if (isActive) {
      const num1 = Number(match[1]);
      const num2 = Number(match[2]);
      result += num1 * num2;
    }
  }
  return result;
}

export function extractMultiplicationExpressions(data: string): string[] {
  return data.match(/mul\(\d+,\d+\)/g) || [];
}

export function parseNumbers(expressions: string[]): number[][] {
  return expressions.map((expr) => {
    const numbers = expr.match(/\d+/g)?.map(Number) ?? [];
    return numbers;
  });
}

export function calculateProducts(parsedNumbers: number[][]): number[] {
  return parsedNumbers.map(([num1, num2]) => num1 * num2);
}

export function sumProducts(products: number[]): number {
  return products.reduce((acc, curr) => acc + curr, 0);
}

async function createInput(): Promise<string> {
  return await fs.readFile("input.txt", "utf8");
}

async function scanUncorruptedMemory(): Promise<void> {
  const data = await createInput();

  // --Part One --
  const multiplicationExpressions = extractMultiplicationExpressions(data);
  const parsedNumbers = parseNumbers(multiplicationExpressions);
  const products = calculateProducts(parsedNumbers);
  const partOneResult = sumProducts(products);
  console.log("partOneResult", partOneResult);

  //--Part two--

  const partTwoResult = calculateActiveMultiplications(data);

  console.log("partTwoResult:", partTwoResult);
}

scanUncorruptedMemory();
