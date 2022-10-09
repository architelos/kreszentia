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

suite("division", () => {
    add("div 1/1", () => {
        equal(1 / 1, 1);
    });

    add("div 2/1", () => {
        equal(2 / 1, 1);
    });

    done();
});

run();