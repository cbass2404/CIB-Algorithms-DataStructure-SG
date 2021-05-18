// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// my solution

function anagrams(stringA, stringB) {
    const filterSortString = (string) => {
        return string
            .toLowerCase()
            .split("")
            .filter((char) => /[a-z]/.test(char))
            .sort()
            .join("");
    };

    return filterSortString(stringA) === filterSortString(stringB)
        ? true
        : false;
}

module.exports = anagrams;
