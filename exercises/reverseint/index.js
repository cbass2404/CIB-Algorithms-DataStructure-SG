// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// my solution

// function reverseInt(n) {
//     let nArray = n.toString().split("");
//     if (nArray[0] === "-") {
//         let negSign = nArray.shift();
//         return parseInt([negSign, ...nArray.reverse()].join(""));
//     }
//     return parseInt(nArray.reverse().join(""));
// }

function reverseInt(n) {
    let posNeg = Math.sign(n);

    if (posNeg !== 1) {
        n = n * posNeg;
        return parseInt(n.toString().split("").reverse().join("")) * posNeg;
    }
    return parseInt(n.toString().split("").reverse().join(""));
}

module.exports = reverseInt;
