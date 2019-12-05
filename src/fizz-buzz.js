const divideBy = divisor => number => number % divisor === 0

export function fizzBuzz(number) {
  if (!number || !(0 < number < 100)) {
    console.log(number)
    throw new Error('invalid number')
  }
  let result = ''
  if (divideBy(3)(number)) {result += 'Fizz'}
  if (divideBy(5)(number)) {result += 'Buzz'}
  return result === '' ? number.toString() : result
}
