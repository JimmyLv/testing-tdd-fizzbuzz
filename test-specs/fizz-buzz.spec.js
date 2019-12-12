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

describe("FizzBuzz Tests", () => {
  require("../src/fizz-buzz.test");
});

expect.extend({
  toHaveReturnedSome(results = [], predicate) {
    const pass = results.some(predicate);
    if (pass) {
      return {
        message: () => `expected to return some result for ${predicate}`,
        pass: true
      };
    } else {
      return {
        message: () => `expected to return no result for ${predicate}`,
        pass: false
      };
    }
  },
  toHaveBeenCalledWithSome(calls, predicate) {
    const pass = calls.some(args => args.some(predicate));
    if (pass) {
      return {
        message: () => `expected calls with some args for ${predicate}`,
        pass: true
      };
    } else {
      return {
        message: () => `expected no calls with some args for ${predicate}`,
        pass: false
      };
    }
  }
});

describe("Tests for FizzBuzz specs", () => {
  const divideBy = divisor => number => number % divisor === 0;
  const contains = target => number => number.toString().includes(target);
  const isInScope = number => isNumber(number) && number >= 1 && number <= 100;
  const isNotInScope = number =>
    isNumber(number) && (number < 1 || number > 100);
  const isDivisibleBy3 = number => divideBy(3)(number);
  const isDivisibleBy5 = number => divideBy(5)(number);
  const isContains3 = number => contains(3)(number);
  const isContains5 = number => contains(5)(number);
  const isEmptyInput = number => ["", null, undefined].includes(number);
  const isNumber = number => typeof number === "number";
  const isNotNumber = number => !isNumber(number);

  test("should verify normal number cases have been covered", () => {
    // 正向情况
    expect(fizzBuzz).toBeCalled();
    expect(fizzBuzz.mock.calls).toHaveBeenCalledWithSome(isInScope);
    expect(fizzBuzz.mock.calls).toHaveBeenCalledWithSome(
      number =>
        isInScope(number) && !isDivisibleBy3(number) && !isDivisibleBy5(number)
    );
  });

  test("should verify 'Fizz/Buzz' cases have been covered", () => {
    // 反向情况
    expect(fizzBuzz.mock.calls).toHaveBeenCalledWithSome(
      number => isInScope(number) && isDivisibleBy3(number)
    );
    expect(fizzBuzz.mock.calls).toHaveBeenCalledWithSome(
      number => isInScope(number) && isDivisibleBy5(number)
    );
    expect(fizzBuzz.mock.calls).toHaveBeenCalledWithSome(
      number =>
        isInScope(number) && isDivisibleBy3(number) && isDivisibleBy5(number)
    );
    expect(fizzBuzz.mock.calls).toHaveBeenCalledWithSome(
      number =>
        isInScope(number) &&
        !isDivisibleBy3(number) &&
        !isDivisibleBy5(number) &&
        isContains3(number)
    );
    expect(fizzBuzz.mock.calls).toHaveBeenCalledWithSome(
      number =>
        isInScope(number) &&
        !isDivisibleBy3(number) &&
        !isDivisibleBy5(number) &&
        isContains5(number)
    );
  });

  test("should verify exception cases have been covered", () => {
    console.log("mock calls and results", {
      calls: fizzBuzz.mock.calls,
      results: fizzBuzz.mock.results
    });

    // 异常情况
    expect(fizzBuzz.mock.calls).toHaveBeenCalledWithSome(isNotInScope);
    expect(fizzBuzz.mock.calls).toHaveBeenCalledWithSome(isNotNumber);
    expect(fizzBuzz.mock.calls).toHaveBeenCalledWithSome(isEmptyInput);
    expect(fizzBuzz.mock.results).toHaveReturnedSome(
      result => result.type === "throw"
    );
  });
});
