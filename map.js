const map = function(array, callback) {
  const results = [];
  for (let element of array) {
    results.push(callback(element))
  }
  return results;
};

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

const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
assertArraysEqual(words.map(word => word[0]), map(words, word => word[0]))
assertArraysEqual(words.map(word => word[0]), words)
//assertArraysEqual(map(words, word => word[0])), words.map(word => word[0]) ;