const findKeyByValue = function (object, keyValue) {
  for (const property in object) {
    if (object[property] === keyValue)  {
      return property;
    }
  }
};
module.exports = findKeyByValue;