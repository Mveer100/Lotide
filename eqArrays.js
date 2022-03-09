const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

// code here on
const eqArrays = function (arr1, arr2) {
  let isEq = undefined
  // need to create a loop that compares each individual element within each of the arrays
  for (let i = 0; i < arr1.length; i++) {
    // need a statement to determine if the element is the same 
    if (arr1[i] === arr2[i]) {
      isEq = true;
    } else {
      isEq = false;
    }
    console.log(isEq)
  }
  return isEq;
}

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS