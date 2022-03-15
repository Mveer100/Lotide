const findKeyByValue = require('./findKeyByValue');

const findKey = (object, cb) => {
  let keyName = [];
  for (const property in object) {
    if (cb(object[property]) === true) {
      return property
    }
  }
  return
}
module.exports = findKey;