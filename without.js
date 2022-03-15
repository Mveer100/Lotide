const without = function(source, itemsToRemove) {
  let subArr = [];
  for (let i = 0; i < source.length; i++) {
    for (let y = 0; y < itemsToRemove.length; y++) {
      if (source[i] !== itemsToRemove[y]) {
        subArr.push(source[i]);
      }
    }
  }
  return subArr;
};
module.exports = without;
