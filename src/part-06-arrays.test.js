/*
 * Arrays and array functions.
 *
 * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 */

test("as previously seen, array literals are expressed in brackets", () => {
  let array = [1, 2, 3, 4, 5];

  expect(array.length).toBe(5);

  // Unlike basic types (incl. string), we need to use a by-value equality matcher
  // rather than by object identity
  expect(array).toEqual([1, 2, 3, 4, 5]);
});

test("accessing elements of an array using the square bracket syntax", () => {
  let array = ["a", "b", "c", "d", "e"];

  let result = array[3];

  expect(result).toBe("d");
});

// Exercise
// Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
test("use indexOf() to show whether arrays are 0-indexed or 1-indexed in JS", () => {
  let array = [1, 2, 3, 4, 5];

  let index = array.indexOf(3);

  expect(index).toBe(2);
});

test("can use the general purpose copy 'includes' to see if array contains an item", () => {
  let array = ["a", "b", "c", "d", "e"];

  let result = array.includes("c");

  expect(result).toBe(true);
});

test("arrays can be concatenated", () => {
  let array1 = [1, 2, 3];
  let array2 = [4, 5, 6];

  let result = array1.concat(array2);

  expect(result).toEqual([1, 2, 3, 4, 5, 6]);
});

// See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
test("a sub-array can be taken from an array by slicing, leaving original intact", () => {
  let array = ["a", "b", "c", "d", "e"];

  let subarray = array.slice(2, 4);
  let allToEnd = array.slice(2);

  expect(subarray).toEqual(["c", "d"]);
  expect(allToEnd).toEqual(["c", "d", "e"]);
});

// Exercise (remove .skip)
test("use slice and concat to split an array at an index and prepend slice to front of new array", () => {
  const swapFromIndex = (array, index) => {
    let firstPart = array.slice(0, index);
    let secondPart = array.slice(index);
    return secondPart.concat(firstPart);
  };

  let original = [1, 2, 3, 4, 5, 6];
  let expected = [4, 5, 6, 1, 2, 3];
  expect(swapFromIndex(original, 3)).toEqual(expected);
});

// Exercise
// What happens if you use a negative value with slice?
// Hint: It's a bit 'Python' :)
test("slice with negative indices", () => {
  let array = [1, 2, 3, 4, 5, 6];
  let expected = [5, 6];

  let result = array.slice(-2);

  expect(result).toEqual(expected);
});

/*
 * Note that JavaScript also has Set and Map collection types:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects#Keyed_collections
 * These are not covered by this course.
 * Since they are mutable, care needs to be taken when using with React.
 */
