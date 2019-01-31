/*
 * Object literals and manipulation.
 */

test("objects in JS can be thought of as simple collections of name-value pairs", () => {
  let earth = {
    name: "Earth",
    diameterInKm: 12742,
    massInKg: 5.772e24
  };

  let diameterOfEarth = earth.diameterInKm;

  expect(diameterOfEarth).toBe(12742);
});

test("more expressive names can be used if they are in quotes (looks more like JSON)", () => {
  let earth = {
    name: "Earth",
    "diameter (Km)": 12742,
    "mass (Kg)": 5.772e24
  };

  let diameterOfEarth = earth["diameter (Km)"]; // Looks more similar to map-like lookup

  expect(diameterOfEarth).toBe(12742);
});

test("objects can contain functions, which can be helpful supplying event handlers in React", () => {
  let action = {
    name: "launch",
    force: (mass, accel) => mass * accel
  };

  let result = action.force(70, 10.0);

  expect(result).toBeCloseTo(700.0);
});

test("you can access properties for the same object within these functions", () => {
  let action = {
    name: "launch",
    mass: 70.0,
    accel: 10.0,
    force: () => action.mass * action.accel
  };

  let result = action.force();

  expect(result).toBeCloseTo(700.0);
});

test("we can use the 'in' keyword to see if object contains the specified key", () => {
  let obj = {
    a: 1,
    b: 2,
    c: 3
  };

  let result = "b" in obj;

  expect(result).toBe(true);
});

// The 'in' keyword also works with arrays, but it might not mean what you think!
// Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in

// Exercise
test("does a property still exist even if it's value is null or undefined?", () => {
  let obj = {
    a: 1,
    b: 2,
    c: undefined
  };

  expect(obj.c).toBe(undefined);
  expect(obj.d).toBe(undefined);
});

test("find all the property names of an object", () => {
  let obj = {
    a: 1,
    b: 2,
    c: 3
  };

  let result = Object.keys(obj);

  expect(result).toEqual(["a", "b", "c"]);
});

// While this last example shows potential for using objects as a general-purpose hashtable,
// it is limited (string keys only) and can lead to mistakes (properties inherited from object
// 'prototype'). Use JavaScript's dedicated Map object instead.
