import * as module from "../src/fizz-buzz";

// jest.mock('./fizz-buzz');
jest.spyOn(module, "fizzBuzz");
const { fizzBuzz } = module;

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

test("should verify tests code should be verified", () => {
  expect(fizzBuzz).toBeCalled();
  // 正向情况
  expect(fizzBuzz).toHaveBeenCalledWith(2);

  // 反向情况
  expect(fizzBuzz).toHaveBeenCalledWith(3);
  expect(fizzBuzz).toHaveBeenCalledWith(5);
  expect(fizzBuzz).toHaveBeenCalledWith(15);

  // 异常情况
  expect(fizzBuzz).toHaveBeenCalledWith("");
  expect(fizzBuzz).toHaveBeenCalledWith(101);

  expect(fizzBuzz).toBeCalledTimes(6); // 6 个用例
  expect(fizzBuzz).toHaveReturnedTimes(4);
});
