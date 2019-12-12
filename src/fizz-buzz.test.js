import fizzBuzz from './fizz-buzz';

function verifyHandler(number, expectResult) {
  // give
  // number

  // when
  const result = fizzBuzz(number);

  // then
  expect(result).toBe(expectResult);
}

describe('3 的倍数输出 fizz', () => {
  it('输入 3 输出 fizz', () => {
    verifyHandler(3, 'fizz');
  });

  it('输入 6 输出 fizz', () => {
    verifyHandler(6, 'fizz');
  });
});

describe('5 的倍数输出 buzz', () => {
  it('输入 5 输出 buzz', () => {
    verifyHandler(5, 'buzz');
  });

  it('输入 10 输出 fizz', () => {
    verifyHandler(10, 'buzz');
  });
});

describe('输入 3 和 5 的共同倍数输出 fizzBuzz', () => {
  it('输入 0 ，应该也输出 fizzBuzz ', () => {
    verifyHandler(0, 'fizzBuzz');
  });

  it('输入 15 输出 fizzBuzz', () => {
    verifyHandler(15, 'fizzBuzz');
  });

  it('输入 30 输出 fizzBuzz', () => {
    verifyHandler(30, 'fizzBuzz');
  });
});

describe('不能被 3 整除, 也不能被 5 整除，输出 输入的数字', () => {
  it('输入 23 ，应该也输出 23 ', () => {
    verifyHandler(23, 23);
  });

  it('输入 52 ，应该也输出 52 ', () => {
    verifyHandler(52, 52);
  });
});

describe('异常处理', () => {
  it('如果输入的不是数字的话，抛出错误', () => {
    expect(() => {
      fizzBuzz('1');
    }).toThrow();
  });

  it('如果输入为空的话，抛出错误', () => {
    expect(() => {
      fizzBuzz(null);
    }).toThrow();
  });
});
