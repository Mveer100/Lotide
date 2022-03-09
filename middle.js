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


const middle = function (array) {
  let middleArr = []
  if (array.length / 2 <= 1) {
    return [];
  } else if (array.length % 2 === 0) {
    return [array[array.length/2-1], array[array.length/2]]
  } else if (array.length % 2 !== 0) {
    return [array[array.length/2-.5]]
  }
}

assertArraysEqual(middle([1, 2, 3, 4, 5]), [3])
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])