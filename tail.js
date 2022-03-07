const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(someArray) {
  let theTail = [];
  for (let i = 1; i < someArray.length; i++)  {
    theTail.push(someArray[i]);
  }
  return theTail;
};