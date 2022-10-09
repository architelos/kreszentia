const { suite, add, done, run } = require("../index.js");
const { equal } = require("node:assert");

suite("require test", () => {
    add("does this work?", () => {
        equal(1, 1);
    });

    done();
});

run();