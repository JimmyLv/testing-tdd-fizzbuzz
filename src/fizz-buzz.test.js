import { fizzBuzz } from "./fizz-buzz";

test("should return number string when given normal number", () => {
  // given
  const number = "2";
  // when
  const result = fizzBuzz(number);
  // then
  expect(result).toBe("2");
});

test("should return number string when given normal number", () => {
  // given
  const number = "2";
  // when
  const result = fizzBuzz(number);
  // then
  expect(result).toBe("2");
});

test("should return fizz string when given number 3", () => {
  // given
  const number = "3";
  // when
  const result = fizzBuzz(number);
  // then
  expect(result).toBe("fizz");
});

test("should return buzz string when given number 5", () => {
  // given
  const number = "5";
  // when
  const result = fizzBuzz(number);
  // then
  expect(result).toBe("buzz");
});

test("should return buzzbuzz string when given number 15", () => {
  // given
  const number = "15";
  // when
  const result = fizzBuzz(number);
  // then
  expect(result).toBe("fizzbuzz");
});

test("should throw error string when given number 0", () => {
  // given
  const number = "";
  // then
  expect(() => {
    fizzBuzz(number);
  }).toThrow();
});

test("should throw error string when given number 105", () => {
  // given
  const number = "101";
  // then
  expect(() => {
    fizzBuzz(number);
  }).toThrow();
});
