const isAliquot3 = isAliquot(3);
const isAliquot5 = isAliquot(5);

export function fizzBuzz(number) {
  if(isAliquot3(number) && isAliquot5(number)){
    return 'fizzBuzz'
  }
  if (isAliquot3(number)) {
    return 'fizz';
  }

  if (isAliquot5(number)) {
    return 'buzz';
  }

  return number;
}

function isAliquot(dividend){
  return (number)=>{
    return number % dividend === 0; 
  }
}
