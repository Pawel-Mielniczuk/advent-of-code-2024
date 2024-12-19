import { describe, it, expect } from "vitest";
import { isDecreasingSequence, isIncreasingSequence, isStrictlyMonotonicSequence } from "../validation.js";

// 20 21 22 19 20 22 23 22
// 25 26 27 29 31 34 33 33
// 54 57 59 61 58 59 60 64
// 17 19 20 22 25 26 24 31
// 86 88 90 91 92 92 93 95

describe("isStrictlyMonotonicSequence", () => {
  it("returns true for strictly monotonic sequence with increasing numbers", () => {
    const result = isStrictlyMonotonicSequence([17, 19, 20, 22, 25, 26, 27, 31]);
    expect(result).toBe(true);
  });

  it("returns true for strictly monotonic sequence with decreasing numbers", () => {
    const result = isStrictlyMonotonicSequence([93, 89, 87, 84, 83, 79, 76, 75]);
    console.log("result", result);
    expect(result).toBe(true);
  });

  it("returns false for a sequence with consecutive identical numbers at the beginning of the array", () => {
    const result = isStrictlyMonotonicSequence([66, 66, 64, 62, 61, 56, 56]);
    expect(result).toBe(false);
  });

  it("returns false for a sequence with consecutive identical numbers at the end of the array", () => {
    const result = isStrictlyMonotonicSequence([22, 45, 64, 67, 69, 56, 56]);
    expect(result).toBe(false);
  });

  it("returns false for a sequence with consecutive identical numbers in middle of the of the array", () => {
    const result = isStrictlyMonotonicSequence([22, 45, 64, 69, 69, 100, 102]);
    expect(result).toBe(false);
  });

  it("returns false for non-monotonic sequence with no identical consecutive numbers", () => {
    const result = isStrictlyMonotonicSequence([1, 3, 2, 4, 5]);
    expect(result).toBe(false);
  });
});

describe("isDecreasingSequence", () => {
  it("returns true for strictly increasing sequence with difference <=3", () => {
    const result = isIncreasingSequence([1, 3, 6, 8, 9]);
    expect(result).toBe(true);
  });

  it("returns false for a sequence with number with is not greater than previous one", () => {
    const result = isIncreasingSequence([88, 66, 89, 97, 100, 105]);
    expect(result).toBe(false);
  });

  it("returns false for a sequence with difference > than 3 between consecutive numbers", () => {
    const result = isIncreasingSequence([1, 2, 6, 7, 8]);
    expect(result).toBe(false);
  });

  it("returns true for a single elem", () => {
    const result = isIncreasingSequence([1]);
    expect(result).toBe(true);
  });

  it("returns false for a two-element array with increasing numbers with difference > 3 ", () => {
    const result = isIncreasingSequence([77, 89]);
    expect(result).toBe(false);
  });
});
