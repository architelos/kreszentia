const { equal } = require("node:assert");

suite("multiplication", () => {
    add("multiply 1x1", () => {
        equal(1 * 1, 1);
    });

    add("multiply 2x2", () => {
        equal(2 * 2, 4);
    });

    done();
});

run();