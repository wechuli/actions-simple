const { add, subtract } = require("../src/math");

test("should correctly add two integers", () => {
  const result = add(1, 2);
  expect(result).toBe(3);
});

test("should correctly add two floats ", () => {
  const result = add(2.2, 6.7);
  expect(result).toBe(8.9);
});

test("should correctly subtract two files", () => {
  const result = subtract(9, 10);
  expect(result).toBe(-1);
});
