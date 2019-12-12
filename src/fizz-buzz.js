
function isAliquot(dividend) {
  return number => number % dividend === 0;
}

function isNumber(number) {
  return typeof number === "number";
}

const isAliquot3 = isAliquot(3);
const isAliquot5 = isAliquot(5);

export default function fizzBuzz(number) {
  if (!isNumber(number)) {
    throw new Error('type of number is not number');
  }

  if (isAliquot3(number) && isAliquot5(number)) {
    return 'fizzBuzz';
  }
  if (isAliquot3(number)) {
    return 'fizz';
  }

  if (isAliquot5(number)) {
    return 'buzz';
  }

  return number;
}
