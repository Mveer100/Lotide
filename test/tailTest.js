const tail = require("../tail")
const assertArraysEqual = require("../assertArraysEqual")

assertArraysEqual(tail([1,2,3,4,5,6]), [2,3,4,5,6])

