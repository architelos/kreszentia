<p align="center">
        <img src="https://i.imgur.com/j9Vzmmr.png" /></a><br>
</p>

<p align="center">Simple test framework for Node.js</p>

<div align="center">

![npm version](https://img.shields.io/npm/v/kreszentia.svg?style=flat-square)
![npm downloads](https://img.shields.io/npm/dm/kreszentia?style=flat-square)

</div>

## Contents
  - [Installing](#installing)
  - [Getting Started](#getting-started)
  - [API](#api)

## Installing
Using `npm`:
```bash
$ npm install kreszentia --global
```

## Getting Started

```bash
$ npm install kreszentia --global
$ mkdir __tests__ && cd __tests__
$ touch addition.js
```

In your editor:
```js
import { equal } from "node:assert";

// Define a new suite
suite("addition", () => {
	 // Add a new test
	add("add 1+1", () => {
		equal(1  +  1,  3);
	});
	
	 // Add a new test
	add("add 2+2", () => {
		equal(2  +  2,  4);
	});
	
	// Finish adding tests
	done();
});

 // Runs all suites.
run();
```

In the terminal:
```bash
$ kreszentia
addition:
    ✕ - add 1+1: expected 3, got 2
    ✓ - add 2+2

1 tests passing, 1 tests failing
```

## API
#### suite(suiteName, callback)
Creates a new test suite.

| suiteName | string   |
|-----------|----------|
| callback  | function |
#### add(testName, callback)
Adds a test to the current test suite.

| testName | string   |
|-----------|----------|
| callback  | function |
#### done()
Finish adding tests to the test suite.
#### run()
Run all suites.
