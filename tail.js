const tail = function(someArray) {
  if(Array.isArray(someArray) !== true) {
    return undefined
  } else if (someArray.length > 1) {
    let theTail = [];
    for (let i = 1; i < someArray.length; i++)  {
      theTail.push(someArray[i]);
    }
    return theTail;
} else if (Array.length === 1) {
  return [someArray[0]]
} 
};
module.exports = tail;