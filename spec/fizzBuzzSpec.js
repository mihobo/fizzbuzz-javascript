describe("fizzBuzz", function() {

it("should return 'Fizz' when a number is divisible by 3", function() {
  var fizzBuzzResult = fizzBuzz(9);
  expect(fizzBuzzResult).toEqual('Fizz');
});

it("should return 'Buzz' when a number is divisible by 5", function() {
  var fizzBuzzResult = fizzBuzz(20);
  expect(fizzBuzzResult).toEqual('Buzz');
});

it("should return 'FizzBuzz' when a number is divisible by both 3 and 5", function() {
  var fizzBuzzResult = fizzBuzz(30);
  expect(fizzBuzzResult).toEqual('FizzBuzz');
});

it("should return a number if it is not divisible by 3 and/or 5", function() {
  var fizzBuzzResult = fizzBuzz(4);
  expect(fizzBuzzResult).toEqual(4);
});
});
