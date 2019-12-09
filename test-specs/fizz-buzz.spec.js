import * as module from "../src/fizz-buzz";

// jest.mock('./fizz-buzz');
let fizzBuzz;
if (module.default) {
  jest.spyOn(module, "default");
  fizzBuzz = module.default;
} else {
  jest.spyOn(module, "fizzBuzz");
  fizzBuzz = module.fizzBuzz;
}

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
