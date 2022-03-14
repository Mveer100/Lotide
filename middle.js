const middle = function (array) {
  let middleArr = []
  if (array.length / 2 <= 1) {
    return [];
  } else if (array.length % 2 === 0) {
    return [array[array.length/2-1], array[array.length/2]]
  } else if (array.length % 2 !== 0) {
    return [array[array.length/2-.5]]
  }
};
module.exports = middle;
