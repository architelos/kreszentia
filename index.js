#! /usr/bin/env node

const { readdirSync } = require("node:fs");

const pad = "    ";
let suites = [];
let results = [];
let currentSuite = {
    tests: []
};
let lastSuite = "";
let passes = 0;
let fails = 0;

const _reset = () => {
    suites = [];
    results = [];
    currentSuite = {
        tests: []
    };
    lastSuite = "";
    passes = 0;
    fails = 0;
};

const _runner = () => {
    try {
        const testFiles = readdirSync("./__tests__").filter((element) => element.match(/\.js$/g));

        for (const testFile of testFiles) {
            require(`./__tests__/${testFile}`);
        }
    } catch {
        console.log(`\u001b[31;1mNo __test__ directory found.\u001b[0m`);
    }
};

const _print = () => {
    for (const result of results) {
        if (result.suiteName !== lastSuite) {
            console.log(`${result.suiteName}:`);
        }
        lastSuite = result.suiteName;
        const testName = result.testName;

        if (result.success) {
            console.log(`${pad}\u001b[32;1m✓\u001b[0m - ${testName}`);
            ++passes;

            continue;
        }

        switch (result.error) {
            case "AssertionError": {
                console.log(`${pad}\u001b[31;1m✕\u001b[0m - ${testName}: expected ${result.expected}, got ${result.actual}`);
                ++fails;

                break;
            }

            default: {
                console.log(`${pad}\u001b[31;1m✕\u001b[0m - ${testName}: an error occurred (${result.errorMsg})`);
                ++fails;

                break;
            }
        }
    }

    console.log(`\n\u001b[32;1m${passes}\u001b[0m tests passing, \u001b[31;1m${fails}\u001b[0m tests failing\n`);
};

/**
 * Creates a new test suite.
 */
const suite = (suiteName, callback) => {
    currentSuite.suiteName = suiteName;

    callback();
};

/**
 * Adds a test to the suite.
 */
const add = (testName, test) => {
    currentSuite.tests.push({
        testName: testName,
        test: test
    });
};

/**
 * Finish adding tests to the suite.
 */
const done = () => {
    suites.push(currentSuite);

    currentSuite = {
        tests: []
    };
};

/**
 * Run all suites.
 */
const run = () => {
    const length = suites.length;

    for (let _ = 0; _ < length; _++) {
        const suite = suites[0];
        let i = 0;

        while (i < suite.tests.length) {
            const test = suite.tests[i].test;
            const result = {
                testName: suite.tests[i].testName,
                suiteName: suite.suiteName
            };

            try {
                test();

                result.success = true;
            } catch (error) {
                if (error.name.match(/assertion/gi)) {
                    result.success = false;
                    result.error = "AssertionError";
                    result.errorMsg = error.message;
                    result.expected = error.expected;
                    result.actual = error.actual;
                } else {
                    result.success = false;
                    result.error = error.name;
                    result.errorMsg = error.message;
                }
            }

            results.push(result);
            ++i;
        }

        suites.splice(0, 1);
    }

    _print();
    _reset();
};

globalThis.suite = suite;
globalThis.add = add;
globalThis.done = done;
globalThis.run = run;

_runner();