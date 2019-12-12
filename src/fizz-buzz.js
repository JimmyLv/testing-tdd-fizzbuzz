const MIN_VALUE = 0;
const MAX_VALUE = 100;

export default function fizzBuzz(number) {
  if (!(number |> inScope) || !(number |> isNumber)) {
    throw new Error(`invalid input: ${number}`);
  }

  let result = "";

  if (number |> relatedTo(3)) {
    result += "Fizz";
  }
  if (number |> relatedTo(5)) {
    result += "Buzz";
  }

  return result || number.toString();
}

const inScope = number => number > MIN_VALUE && number < MAX_VALUE;

const isNumber = number => number && typeof number === "number";

const contains = target => number => number.toString().includes(target);

const dividedBy = target => number => number % target === 0;

const relatedTo = target => number =>
  (number |> dividedBy(target)) || (number |> contains(target));
