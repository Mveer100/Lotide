const takeUntil = function(array, callback) {
  const slicedArray = [];
  for (let element of array) {
    if (callback(element) !== true) {
      slicedArray.push(element)
    } else {
      return slicedArray;
    }
  }
  return slicedArray;
};
module.exports = takeUntil;
