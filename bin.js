#! /usr/bin/env node

const { suite, add, done, run } = require("./index.js");
const { readdirSync } = require("node:fs");

const _runner = () => {
    try {
        const testFiles = readdirSync("./__tests__").filter((element) => element.match(/\.js$/g));

        for (const testFile of testFiles) {
            require(`./__tests__/${testFile}`);
        }
    } catch {
        console.log(`\u001b[31;1mNo __tests__ directory found.\u001b[0m`);
    }
};

globalThis.suite = suite;
globalThis.add = add;
globalThis.done = done;
globalThis.run = run;

_runner();