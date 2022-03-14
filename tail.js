const tail = function(someArray) {
  if(Array.isArray(someArray) !== true) {
    return undefined
  } else {
    let theTail = [];
    for (let i = 1; i < someArray.length; i++)  {
      theTail.push(someArray[i]);
    }
    return theTail;
} 
};
console.log(tail([1,2,3,4,5,6]))
module.exports = tail;