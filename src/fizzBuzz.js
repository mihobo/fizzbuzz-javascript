function fizzBuzz(number) {
if (number % 15 === 0) {
  return 'FizzBuzz';
} else if (number % 5 === 0) {
  return 'Buzz';
} else if (number % 3 === 0) {
  return 'Fizz';
} else {
  return number;
}

};

for (var i = 1; i < 100; i++) {
  console.log(fizzBuzz(i));
};
