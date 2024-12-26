import fs from "fs/promises";

async function createInput(): Promise<string> {
  return await fs.readFile("input.txt", "utf8");
}

async function scanUncorruptedMemory(): Promise<void> {
  const data = await createInput();

  // --Part One --
  const multiplicationExpressions: string[] = data.match(/mul\(\d+,\d+\)/g) || [];

  let partOneResult = 0;

  const parsedNumbers: number[][] = multiplicationExpressions.map((elem) => {
    const item = elem.match(/\d+/g)?.map((num) => Number(num)) ?? [];
    return item;
  });

  const products = parsedNumbers.map((operandPair: number[]) => operandPair[0] * operandPair[1]);

  partOneResult = products.reduce((acc: number, curr: number) => {
    return acc + curr;
  });

  console.log("partOneResult", partOneResult);

  //--Part two--

  function calculateActiveMultiplications(): number {
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

  const partTwoResult = calculateActiveMultiplications();

  console.log("partTwoResult:", partTwoResult);
}

scanUncorruptedMemory();
