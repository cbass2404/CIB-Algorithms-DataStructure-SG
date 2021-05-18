// reverse a string

// My solution
const reverseString = (string) => {
    return string.split("").reverse().join("");
};

console.log(reverseString("The quick brown fox jumps over the lazy dog!"));
