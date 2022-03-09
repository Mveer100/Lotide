const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

// code here on
const eqArrays = function (arr1, arr2) {
  let isEq = undefined;
  let longestArr = undefined;
  if (arr1.length < arr2.length) {
    longestArr = arr2;
  } else if (arr2.length < arr1.length) {
    longestArr = arr1;
  } else {
    longestArr = arr1;
  }
  // need to create a loop that compares each individual element within each of the arrays
  for (let i = 0; i < longestArr.length; i++) {
    // need a statement to determine if the element is the same 
    if (arr1[i] === arr2[i]) {
      isEq = true;
    } else {
      isEq = false;
    }
  }
  return isEq;
};
