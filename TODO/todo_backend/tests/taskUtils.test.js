const {
  validateTask,
  calculateCompletionPercentage,
} = require("../utils/taskUtils");

describe("Task Utility Unit Tests", () => {
  test("validateTask returns true for valid task", () => {
    expect(validateTask("Buy Milk")).toBe(true);
  });

  test("validateTask returns false for empty task", () => {
    expect(validateTask("")).toBe(false);
  });

  test("Completion percentage", () => {
    expect(calculateCompletionPercentage(10, 5)).toBe(50);
  });

  test("Completion percentage when total is zero", () => {
    expect(calculateCompletionPercentage(0, 0)).toBe(0);
  });
});