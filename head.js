const head = function(someArray) {
  if (someArray === []) {
    return undefined;
    } else {
      return someArray[0]
    }    
}

module.exports = head;