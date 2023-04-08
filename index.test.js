describe("Calculator", () => {
    let desc = "<p>Find the sum</p>";

    describe(desc, () => {
        it("The sum of the numbers 2 and 3 is 5", () => {
            expect(sum(2, 3)).toBe(5);
        });

        it("Message 'Ви не ввели число', when one of the parameters is a string", () => {
            expect(sum(2, 'abc')).toBe('Ви не ввели число');
        });
    });

    desc = "<p>Find the difference</p>";

    describe(desc, () => {
        it("The difference of the numbers 5 and 3 is 2", () => {
            expect(diff(5, 3)).toBe(2);
        });

        it("The difference of the numbers 2 and 5 is -3", () => {
            expect(diff(2, 5)).toBe(-3);
        });
    });

    desc = "<p>Find the product</p>";

    describe(desc, () => {
        it("The product of the numbers 5 and 3 is 15", () => {
            expect(mul(5, 3)).toBe(15);
        });

        it("The product of the numbers 2 and 5 is 10", () => {
            expect(mul(2, 5)).toBe(10);
        });
    });

    desc = "<p>Find the division</p>";

    describe(desc, () => {
        it("The division of the numbers 5 and 0 is the 'На нуль ділити не можна' message", () => {
            expect(div(5, 0)).toBe('На нуль ділити не можна');
        });

        it("The division of the numbers 10 and 5 is 2", () => {
            expect(div(10, 5)).toBe(2);
        });

        it("The division of the numbers 10 and 3 is 3.33", () => {
            expect(div(10, 3)).toBe('3.33');
        });
    });
});

describe("Array", () => {

    let desc = "<p>Find max and min number in array ['s', 65, false, 'A', 98, true, 41, null, 97, undefined]</p>";

    const array = ['s', 65, false, 'A', 98, true, 41, null, 97, undefined];
    const arrayNumbers = [];
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === "number") {
            arrayNumbers.push(array[i]);
        }
    }

    describe(desc, () => {
        it("The max number is 98", () => {
            expect(max(arrayNumbers)).toBe(98);
        });
        it("The min number is 41", () => {
            expect(min(arrayNumbers)).toBe(41);
        });
    });

    desc = "<p>Find max and min number in array [-5, -3, -10, -15, -20, -50, -999]</p>";
    const negativeArray = [-5, -3, -10, -15, -20, -50, -999];
    describe(desc, () => {
        it("The max number is -3", () => {
            expect(max(negativeArray)).toBe(-3);
        });
        it("The min number is -999", () => {
            expect(min(negativeArray)).toBe(-999);
        });
    });
});

describe("Accumulator", () => {
    let desc = "<p>Accumulator, initial value is 0</p>";
    let initialValue = 0;
    let acc = new Accumulator(initialValue);

    describe(desc, () => {
        it("Accumulator increment, should be 1", () => {
            expect(acc.increment()).toBe(1);
        });
        it("Accumulator increment, should be 2", () => {
            expect(acc.increment()).toBe(2);
        });
        it("Accumulator decrement, should be 1", () => {
            expect(acc.decrement()).toBe(1);
        });
    });

    desc = "<p>Cancelable Accumulator, initial value is 0</p>";
    let acc2 = new CancelableAccumulator(initialValue);

    describe(desc, () => {
        it("Cancelable Accumulator increment, should be 1", () => {
            expect(acc2.increment()).toBe(1);
        });
        it("Cancelable Accumulator increment, should be 2", () => {
            expect(acc2.increment()).toBe(2);
        });
        it("Cancelable Accumulator increment, should be 3", () => {
            expect(acc2.increment()).toBe(3);
        });
        it("Cancelable Accumulator decrement, should be 2", () => {
            expect(acc2.decrement()).toBe(2);
        });
        it("Cancelable Accumulator clear, should be 0", () => {
            expect(acc2.clear(initialValue)).toBe(0);
        });
    });
});