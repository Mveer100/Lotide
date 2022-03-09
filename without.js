const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    return console.log(`Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    return console.log(`Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const without = function(source, itemsToRemove) {
  let subArr = [];
  for (let i = 0; i < source.length; i++) {
    for (let y = 0; y < itemsToRemove.length; y++) {
      if (source[i] !== itemsToRemove[y]) {
        subArr.push(source[i]);
      }
    }
  }
  return subArr;
};

