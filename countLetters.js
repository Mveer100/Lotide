const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(aString) {
  const result = {};

  for (letter of aString) {    
    if(letter !== " ") {
      if(result[letter]) {
        result[letter] += 1;
      } else {
      result[letter] = 1
      }
    }
  }
  return result;
}


console.log(countLetters("lighthouse in the house"))