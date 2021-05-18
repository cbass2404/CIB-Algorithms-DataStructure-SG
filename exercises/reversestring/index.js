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

// function reverse(str) {
//     return str.split("").reverse().join("");
// }

// function reverse(str) {
//     str = str.split("");
//     let strArray = [];
//     for (let i = 0; i < str.length; i++) {
//         strArray.unshift(str[i]);
//     }
//     return strArray.join("");
// }

// function reverse(str) {
//     let reversed = "";

//     for (let character of str) {
//         reversed = character + reversed;
//     }

//     return reversed;
// }

const reverse = (str) => str.split("").reduce((rev, char) => char + rev, "");

console.log(reverse("apple"));

module.exports = reverse;
