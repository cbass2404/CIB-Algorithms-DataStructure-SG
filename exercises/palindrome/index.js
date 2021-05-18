// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// STEPS:
// Reverse string
// Compare to original
// Return true if the same || false if different

// function palindrome(str) {
//     return str.split("").reverse().join("") === str ? true : false;
// }

// function palindrome(str) {
//     let reversed = str.split("").reduce((rev, char) => char + rev, "");
//     if (str === reversed) {
//         return true;
//     }
//     return false;
// }

// function palindrome(str) {
//     let reversed = "";
//     for (let char of str) {
//         reversed = char + reversed;
//     }
//     return reversed === str ? true : false;
// }

function palindrome(str) {
    return str.split("").every((char, i) => char === str[str.length - i - 1]);
}

module.exports = palindrome;
