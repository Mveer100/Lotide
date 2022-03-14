const middle = require('../middle');
const { assert } = require('chai')
const assertArraysEqual = require("chai").assert

describe('#middle', () => {
  it('returns [5] for [[1,2,3,4,5,6,7,8,9]', () => {
    assert.deepEqual(middle([1,2,3,4,5,6,7,8,9]), [5]);
  });
  it('returns [4,5] for [1,2,3,4,5,6,7,8]', () => {
    assert.deepEqual(middle([1,2,3,4,5,6,7,8]), [4,5]);
  });
});
