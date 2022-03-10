const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
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


const eqObjects = function (obj1, obj2) {
  let result = undefined;
  
  if (Object.keys(obj1).length === Object.keys(obj2).length) {
    for (let i = 0; i < Object.keys(obj1).length; i++) {
      if (Array.isArray(obj1[Object.keys(obj1)[i]]) && Array.isArray(obj2[Object.keys(obj1)[i]])) { 
         return eqArrays(obj1[Object.keys(obj1)[i]], obj2[Object.keys(obj1)[i]])
      }
        if (obj1[Object.keys(obj1)[i]] !== obj2[Object.keys(obj1)[i]]) {
          return false;
        } else {
          result = true
        }
      }
  } else {
    return false;
  }
 return result;
};

const assertObjectsEqual = function(obj1, obj2) {
  const inspect = require('util').inspect;

  if (eqObjects(obj1, obj2)) {
    return console.log(`Assertion Passed: ${inspect(obj1)} === ${inspect(obj2)}`);
  } else {
    return console.log(`Assertion Failed: ${inspect(obj1)} !== ${inspect(obj2)}`);
  }
};

const dc = { d: ["2", 3], c: "1" };


const cd = { c: "1", d: ["2", 3] };
const cd2 = { c: "1", d: ["2, 3, 4"] };
assertObjectsEqual(cd, dc); // => true

