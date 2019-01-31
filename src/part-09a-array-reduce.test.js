/*
 * Array reduce operation.
 *
 * We discussed map and filter in the array-ops section, but there are various
 * other operations that are very useful and also commonly used.
 *
 * It may appear strange at first, but in many cases it makes things simpler
 * (over imperative counterparts).
 */

test("sum the numbers from 1 to 5 using 'reduce'", () => {
  let numbers = [1, 2, 3, 4, 5];

  // It's common to name the 'previous' value here as the 'accumulator'
  let result = numbers.reduce((acc, n) => acc + n);

  // Reduce is super-useful, but it can look a little alien at first. See "how reduce works" on MDN:
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#How_reduce()_works
  // (note: in most cases, you only need a two-argument function rather than what is shown here)

  expect(result).toBe(15);
});

// Exercise
// "functions are just values"
test("factor out the above lamda expression into separate 'plus' function", () => {
  // todo ...
});

// Exercise
test("what happens if you try to reduce an empty array?", () => {
  let numbers = [1];
  let result = numbers.reduce((acc, n) => acc + n);
});

test("reduce has an overload that allows specifying the value of the accumulator in the first call", () => {
  let numbers = [1, 2, 3];

  let result = numbers.reduce((acc, n) => acc + n, 100);

  expect(result).toBe(106);
});

// Exercise
// Use the initial value in reduce to implement a way of calculating the
// product of an array of numbers
test("calculate the product of an array", () => {
  let numbers = [1, 2, 3, 4];

  // Calculate the product of numbers (muliplied together) using reduce
  let result = numbers.reduce((acc, n) => acc * n);

  expect(result).toBe(24);
});

/*
 * Functional Programming side-bar.
 *
 * Note: This more general form of "reduce" (with an initial value) is
 * called a 'fold' (or in this case, fold-left) in functional programming
 * (It's a shame JavaScript doesn't call that operation fold, because it
 * could have put the initial value first like most other FP languages.)
 * The concept of a 'fold' can solve a surprising number of problems
 * (including implementions for functions like map, filter, flatMap)
 */

// A helper function for the below:
// Returns an array of numbers in the range 0 .. n-1
const range = n => Array.from(new Array(n), (x, i) => i);

// Exercise (remove .skip)
test.skip("calculate the factorial of the number 10", () => {
  // Hint: The product of the numbers in the range 1..10 (range will supply 0..9)
  let result = undefined;

  expect(result).toBe(3628800);
});

// Exercise (remove .skip)
test.skip("sum the doubled odd numbers sourced from the range 0 to 99", () => {
  let oneTo99 = range(100);

  // Find odd numbers, double each one, then sum them up
  let result = undefined; //todo

  expect(result).toBe(5000);
});

// You can see more examples of reduce and other functions here:
// https://medium.com/@alex.permyakov/15-useful-javascript-examples-of-map-reduce-and-filter-74cbbb5e0a1f
