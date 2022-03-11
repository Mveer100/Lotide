const findKeyByValue = function (object, keyValue) {
  for (const property in object) {
    if (object[property] === keyValue)  {
      return property;
    }
  }
};

const findKey = (object, cb) => {
  let keyName = [];
  for (const property in object) {
    if (cb(object[property]) === true) {
      return property
    }
  }
  return
}




console.log(findKey({
  "Blue Hill": { stars: 2 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 1 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 1 },
  "Akelarre":  { stars: 231231231 }
}, x => x.stars === 231231231)) // => "noma"