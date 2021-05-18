// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// my solution

// function maxChar(str) {
//     let charCount = {};
//     let count = 0;
//     let answer;

//     str.split("").forEach(
//         (char) => (charCount[char] = charCount[char] + 1 || 1)
//     );

//     for (let key in charCount) {
//         if (charCount[key] > count) {
//             count = charCount[key];
//             answer = key;
//         }
//     }

//     return answer;
// }

function maxChar(str) {
    const charMap = {};
    let max = 0;
    let maxChar = "";

    for (let char of str) {
        if (charMap[char]) {
            charMap[char]++;
        }
        charMap[char] = 1;
    }

    for (let char in charMap) {
        if (charMap[char] > max) {
            max = charMap[char];
            maxChar = char;
        }
    }

    return maxChar;
}

module.exports = maxChar;
