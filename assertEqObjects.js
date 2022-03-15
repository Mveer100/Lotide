const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');


const assertObjectsEqual = function(obj1, obj2) {
  const inspect = require('util').inspect;

  if (eqObjects(obj1, obj2)) {
    return console.log(`Assertion Passed: ${inspect(obj1)} === ${inspect(obj2)}`);
  } else {
    return console.log(`Assertion Failed: ${inspect(obj1)} !== ${inspect(obj2)}`);
  }
};

module.exports = assertObjectsEqual;

