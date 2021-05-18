// Fibonacci Series:
// Any number (n) minus 1 + n -2, through recursion, produces the number in sequence in the series.
// 1, 1, 2, 3, 5, 8, 13, 21...

const fib = (n) => {
    if (n < 2) {
        return n;
    }
    return fib(n - 1) + fib(n - 2);
};

const sequence = (count) => {
    let sequenceArray = [];
    for (let i = 1; i < count + 1; i++) {
        sequenceArray.push(fib(i));
    }
    return sequenceArray.join(", ");
};

console.log(sequence(10));
