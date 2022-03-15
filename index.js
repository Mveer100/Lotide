const assertArraysEqual = require('./assertArraysEqual');
const assertEqObjects = require('./assertEqObjects');
const assertEqual = require('./assertEqual');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const head = require("./head");
const letterPositions = require('./letterPositions');
const map = require('./map');
const middle = require("./middle");
const tail = require("./tail");
const takeUntil = require('./takeUntil');
const without = require('./without');
module.exports = {
  head: head,
  tail: tail,
  middle: middle,
  countLetters: countLetters,
  countOnly: countOnly,
  eqArrays: eqArrays,
  eqObjects: eqObjects,
  assertArraysEqual: assertArraysEqual,
  assertEqObjects: assertEqObjects,
  assertEqual: assertEqual,
  findKey: findKey,
  findKeyByValue: findKeyByValue,
  letterPositions: letterPositions,
  map: map,
  takeUntil: takeUntil,
  without: without
};