import * as module from "../src/fizz-buzz";

// jest.mock('./fizz-buzz');
jest.spyOn(module, 'fizzBuzz');
const { fizzBuzz } = module;

test("should return number string when given normal number", () => {
  // given
  const number = 2;
  // when
  const result = fizzBuzz(number);
  // then
  expect(result).toBe("2");
});

test("should verify tests code should be verified", () => {
  expect(fizzBuzz).toBeCalled();
  expect(fizzBuzz).toHaveBeenCalledWith(2);
  expect(fizzBuzz).toHaveBeenCalledWith(3);
  expect(fizzBuzz).toHaveBeenCalledWith(5);
  expect(fizzBuzz).toHaveBeenCalledWith(15);
  expect(fizzBuzz).toBeCalledTimes(4); // 4 个用例
});
