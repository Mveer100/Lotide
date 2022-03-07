const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};
const head = function(someArray) {
  if (someArray === []) {
    return undefined;
    } else {
      return someArray[0]
    }    
}

