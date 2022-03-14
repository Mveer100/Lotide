const eqArrays = require("../eqArrays")
const assertEqual = require("../assertEqual")

assertEqual(eqArrays([123, 123, 321, 213], [123, 123, 321, 213]), true)
assertEqual(eqArrays([],[]), true)
assertEqual(eqArrays([12], [21]), false);