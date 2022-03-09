const assertArraysEqual = function(arr1, arr2) {
  let isEq = undefined;
  let longestArr = undefined;
  if (arr1.length < arr2.length) {
    longestArr = arr2;
  } else if (arr2.length < arr1.length) {
    longestArr = arr1;
  } else {
    longestArr = arr1;
  }
  for (let i = 0; i < longestArr.length; i++) {
    if (arr1[i] === arr2[i]) {
      isEq = true;
    } else {
      isEq = false;
    }
  }
  if (isEq === true) {
    return console.log(`Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    return console.log(`Assertion Failed: ${arr1} !== ${arr2}`);
  }
};