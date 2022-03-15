# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @mako99/lotide`

**Require it:**

`const _ = require('@mako99/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:


*  `head = function(array) a function that returns the first element of an aray`

* `middle = function(array) returns the middle of an array`

* `tail = function(array) returns the array without the 0th index`

* `assertArraysEqual = function(arr1, arr2) an assertion to test if EqArrays is working`

* `assertEqObjects = function(obj1, obj2) an assertion to test if EqObjects works `

* `countLetters = function(string) a function that returns the counts of each letter within a string, stored in an object`

* `countOnly = function() a function that iterates through an object and counts a specified value if it occurs `

* `eqArrays = function(arr1, arr2) a function that returns true or false if two arrays are equal`

* `eqObjects = function(obj1, obj2) a function that returns true or false if two object are equal`

* `assertArraysEqual = function(arr1actual,arr2expect) a function that is used to check if arrayEqual is working`

* `assertEqObjects = function(obj1actual,obj2expect) an assertion used to check if eqObjects is functioning`

* `assertEqual = function(actual, expected) used to determine if two data types are equal`

* `findKeyByValue = function(object, keyValue) returns the keyname when provided with the key value and an object`

* `findKey = function(object,cb) returns the keyvalue when provided with an object and a callback to findKeyByValue`

* `letterPositions = function(sentence) returns an object that indicates at which index each letter within a string occurs`

* `map = function(array,cb) passes the values of an array into a callback function`

*  `takeUntil = function(array, cb) creates a slice of an array in which elements are taken from the beginning and until the cb function returns falsy `

* `without = function(source, itemsToRemove) takes an array and iterates through it looking for the item to remove, if found it is removed`