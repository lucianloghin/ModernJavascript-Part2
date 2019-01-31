/*
 * Array operations.
 * Ref (see iteration methods): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Methods_2
 *
 * When developing applicatons in React, imperative-style looping constructs
 * (for, do, while) are rarely necessary. If you find yourself using explicit
 * loops, you're probably missing a trick.
 *
 * In React, you'll often find yourself creating components from an array of
 * data items by transforming them using a 'map' operation.
 *
 * If you're a Java developer, this is basically the same as using Stream
 * operations (or Vavr).
 *
 * If you're a C# developer, this is somewhat like LINQ usage. However, C#
 * differs from other languages in that it uses SQL-like terms whereas other
 * languages use terms derived from the Function Programming foundations.
 * Here is a page that describes the equivalent naming:
 * https://brunoscopelliti.com/csharp-linq-equivalents-of-javascript-array-methods
 * Summary:
 *  - map -> Select
 *  - flatMap -> SelectMany
 *  - filter -> Where
 *  - reduce -> Aggregate
 */

test("transform a set of items using 'map'", () => {
  let numbers = [1, 2, 3, 4, 5];

  let doubled = numbers.map(n => n * 2);

  expect(doubled).toEqual([2, 4, 6, 8, 10]);
});

// Here 'people' is a set of test data for the rest of this section
const people = [
  { name: "Jane", sex: "female", age: 40, eyes: "blue" },
  { name: "Jo", sex: "female", age: 8, eyes: "green" },
  { name: "Ava", sex: "female", age: 3, eyes: "blue" },
  { name: "Ollie", sex: "male", age: 11, eyes: "blue" },
  { name: "Mia", sex: "female", age: 10, eyes: "blue" },
  { name: "James", sex: "male", age: 7, eyes: "brown" }
];

// Exercise
test("use 'map' to extract the name of each person in the people array", () => {
  let arrayOfNames = people.map(p => p.name);
  let expected = ["Jane", "Jo", "Ava", "Ollie", "Mia", "James"];

  expect(arrayOfNames).toEqual(expected);
});

test("constrain a collection of items using a particular predicate using 'filter'", () => {
  let numbers = [1, 2, 3, 4, 5];

  let odd = numbers.filter(n => n % 2 !== 0);

  expect(odd).toEqual([1, 3, 5]);
});

// Exercise (remove .skip)
test("get the names of girls with blue eyes from the people array", () => {
  let girlsWithBlueEyes = people
    .filter(p => p.eyes === "blue" && p.sex === "female" && p.age < 18)
    .map(p => p.name);

  expect(girlsWithBlueEyes).toEqual(["Ava", "Mia"]);
});

test("find the first boy", () => {
  let boy = people.find(person => person.sex === "male" && person.age < 16);

  expect(boy.name).toBe("Ollie");
});

test("we see here that we can't find a man", () => {
  let man = people.find(person => person.sex === "male" && person.age >= 18);

  expect(man).toBe(undefined);
});

// In general, we should favour this more declaritive style over imperative loops.
// There are many reasons why. See this for example: https://pbs.twimg.com/media/B_AmQW7WwAE_Akt.jpg

// There are many other useful concepts from Functional Programming.
// For example, where does the term 'map-reduce' come from?
// These are covered in later sections.
