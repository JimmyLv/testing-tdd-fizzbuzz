import { fizzBuzz } from './fizz-buzz';

test('should return number string when given normal number', () => {
  // given
  const number = 2;
  // when
  const result = fizzBuzz(number);
  // then
  expect(result).toBe('2');
});


test('should return number string when given normal number', () => {
  // given
  const number = 3;
  // when
  const result = fizzBuzz(number);
  // then
  expect(result).toBe('Fizz');
});
