const assertArraysEqual = require("chai").assert
const { assert } = require('chai');
const tail = require("../tail")

describe("#tail", () => {
  it("should return [2,3,4,5,6] for [1,2,3,4,5,6]", () => {
    assert.deepEqual(tail([1,2,3,4,5,6]), [2,3,4,5,6])
  });
  it("should return [5] for [5]", () => {
    assert.deepEqual(tail([5]), [5])
  });
})

