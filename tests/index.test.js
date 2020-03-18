import { sum } from "@/";
import { divide } from "@/";

test("sum", () => {
  const total = sum(1, 2);
  expect(total).toBe(3);
});

test("divide", () => {
  const result = divide(4, 2);
  expect(result).toBe(2);
});
