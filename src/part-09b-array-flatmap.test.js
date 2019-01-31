/*
 * Array flatMap operation.
 *
 * We've previously discussed map, filter and reduce in the previous
 * array-ops sections, now it's the turn of flatMap, a way of producing
 * multiple results for each item in an array and collapsing the final
 * array into a linear structure.
 */

// This is important if you're calling any function that returns
// multiple results, such as a query

test("use flatMap for a calculation returning multiple results", () => {
  let arrays = [1, 2, 3];

  const duplicate = n => Array(n).fill(n);
  let result = arrays.flatMap(duplicate);

  expect(result).toEqual([1, 2, 2, 3, 3, 3]);
});

test("flatMap can also transform the values in one pass", () => {
  let arrays = [[1, 2], [3, 4], [5, 6]];

  let times2 = n => n * 2;
  let result = arrays.flatMap(array => array.map(times2));

  expect(result).toEqual([2, 4, 6, 8, 10, 12]);
});

// Let's see more practical usage...

// Exercise (remove .skip)
test("use flatMap to extract all items to help replenish the right stock", () => {
  let orders = [
    { id: 101, items: ["eggs", "bread"] },
    { id: 102, items: ["peas"] },
    { id: 103, items: [] }, // Cancelled order
    { id: 104, items: ["tea", "sugar", "milk"] }
  ];

  let result = orders.flatMap(o => o.items);

  expect(result).toEqual(["eggs", "bread", "peas", "tea", "sugar", "milk"]);
});

// Note: flat and flatMap are stage 3 proposals in the JS standards
// process. While they are implemented in Chrome, Firefox and nodejs/babel,
// it's possible it might change before becoming final
