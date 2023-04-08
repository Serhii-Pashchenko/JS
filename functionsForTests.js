function sum(number_1, number_2) {
    if (number_1 !== "" && number_2 !== "" && !isNaN(number_1) && !isNaN(number_2)) {
        return Number(number_1) + Number(number_2);
    } else {
        return 'Ви не ввели число';
    }
};

function diff(number_1, number_2) {
    if (number_1 !== "" && number_2 !== "" && !isNaN(number_1) && !isNaN(number_2)) {
        number_1 = Number(number_1);
        number_2 = Number(number_2);
        const diff = number_1 - number_2;
        if (number_1 >= number_2) {
            return diff;
        }
        if (number_1 < number_2) {
            let question = confirm('Перше число менше другого, Ви впевнені що хочете продовжити операцію?');
            if (question) {
                return diff;
            }
        }
    }
};

function mul(number_1, number_2) {
    if (number_1 !== "" && number_2 !== "" && !isNaN(number_1) && !isNaN(number_2)) {
        return Number(number_1) * Number(number_2);
    }
};

function div(number_1, number_2) {
    if (number_1 !== "" && number_2 !== "" && !isNaN(number_1) && !isNaN(number_2)) {
        if (number_2 == 0) {
            return 'На нуль ділити не можна';
        } else {
            return Number(number_1) % Number(number_2) === 0 ? Number(number_1) / Number(number_2) : (Number(number_1) / Number(number_2)).toFixed(2);
        }
    }
};


function min(arrayNumbers) {
    let min = arrayNumbers[0];
    for (let i = 0; i < arrayNumbers.length; i++) {
        if (min > arrayNumbers[i+1]) {
            min = arrayNumbers[i+1];
        }
    }
    return min
};

function max(arrayNumbers) {
    let max = arrayNumbers[0];
    let i = 0;
    while (i < arrayNumbers.length) {
        if (max < arrayNumbers[i+1]) {
            max = arrayNumbers[i+1];
        }
        i++;
    }
    return max
};



function Accumulator(initialValue) {
    if (initialValue === "" || isNaN(initialValue)) {
        return 'Ви не ввели число!';
    } else {
        this.value = initialValue;
    }
};

Accumulator.prototype.increment = function () {
    this.value += 1;
    return this.value;
};

Accumulator.prototype.decrement = function () {
    this.value -= 1;
    return this.value;
};

function CancelableAccumulator(initialValue) {
    Accumulator.call(this, initialValue);
};

CancelableAccumulator.prototype = Object.create(Accumulator.prototype);
  
CancelableAccumulator.prototype.clear = function (initialValue) {
    this.value = initialValue;
    return this.value;
};