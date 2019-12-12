const inScope = number => number > 0 && number < 100;
const isNumber = number => number && typeof number === "number";
const contains = (target, number) => number.toString().includes(target);
const dividedBy = (target, number) => number % target === 0;
const relatedTo = (target, number) => dividedBy(target, number) || contains(target, number);

export default function fizzBuzz(number) {
  if (!inScope(number) || !isNumber(number)) {
    throw new Error(`invalid input: ${number}`);
  }

  let result = "";

  if (relatedTo(3, number)) {
    result += "Fizz";
  }
  if (relatedTo(5, number)) {
    result += "Buzz";
  }

  return result || number.toString();
}
