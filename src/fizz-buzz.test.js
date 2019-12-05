import { fizzBuzz } from "./fizz-buzz";

test("should return number string when given normal number", () => {
  // given
  const number = 2;
  // when
  const result = fizzBuzz(number);
  // then
  expect(result).toBe("2");
});

test("should return Fizz string when given number divisble by 3", () => {
  // given
  const number = 3;
  // when
  const result = fizzBuzz(number);
  // then
  expect(result).toBe("Fizz");
});

test("should return Buzz string when given number divisble by 5", () => {
  // given
  const number = 5;
  // when
  const result = fizzBuzz(number);
  // then
  expect(result).toBe("Buzz");
});

test("should return FizzBuzz string when given number divisble by 3 and 5", () => {
  // given
  const number = 15;
  // when
  const result = fizzBuzz(number);
  // then
  expect(result).toBe("FizzBuzz");
});

test("should return throw error when given invalid number", () => {
  // given
  const number = "";
  // when
  expect(() => {
    fizzBuzz(number);
  }).toThrow();
});
