import { describe, it, expect } from "vitest";
import { getXMASCount, countOccurrences } from "../index";

describe("dd", () => {
  it('should count occurrences of "XMAS" and "SAMX" in the grid', () => {
    const grid = [
      ["X", "M", "A", "S", "X", "M", "A", "S"],
      ["M", "A", "S", "X", "M", "A", "S", "X"],
      ["A", "S", "X", "M", "A", "S", "X", "M"],
      ["S", "X", "M", "A", "S", "X", "M", "A"],
      ["M", "A", "S", "X", "M", "A", "S", "X"],
    ];

    const xmasCount: number = countOccurrences(grid, "XMAS");
    const samxCount: number = countOccurrences(grid, "SAMX");

    expect(xmasCount).toBe(8);
    expect(samxCount).toBe(0);
  });

  it("should count XMAS shapes correctly", () => {
    const grid = [
      ["M", "A", "S", "M", "A", "A", "S", "S"],
      ["M", "S", "M", "M", "S", "X", "X", "S"],
      ["S", "A", "M", "A", "M", "M", "S", "M"],
      ["S", "S", "S", "S", "A", "A", "S", "M"],
      ["M", "S", "S", "X", "S", "S", "A", "A"],
    ];

    const xmasCount: number = getXMASCount(grid);

    expect(xmasCount).toBe(1);
  });
});
