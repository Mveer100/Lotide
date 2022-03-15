//const assertEqual = require('./assertEqual')
const eqArrays = require('./eqArrays')

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

 module.exports = eqObjects;
/*
const dc = { d: ["2", 3], c: "1" };


const cd = { c: "1", d: ["2", 3] };
const cd2 = { c: "1", d: ["2, 3, 4"] };
eqObjects(cd, dc); // => true
assertEqual(eqObjects(cd, dc), true)
eqObjects(cd, cd2)
assertEqual(eqObjects(cd, cd2), false); // => false

*/