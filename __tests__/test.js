const { equal } = require("node:assert");

suite("addition", () => {
    add("add 1+1", () => {
        equal(1 + 1, 3);
    });

    add("add 2+2", () => {
        equal(2 + 2, 4);
    });

    done();
});

suite("subtraction", () => {
    add("sub 1-1", () => {
        equal(1 - 1, 0);
    });

    add("sub 2-1", () => {
        equal(2 - 1, 0);
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