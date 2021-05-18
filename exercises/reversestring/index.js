// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// STEPS:
// Turn into array
// Call reverse on array
// Join array into a string

function reverse(str) {
    return str.split("").reverse().join("");
}

module.exports = reverse;
