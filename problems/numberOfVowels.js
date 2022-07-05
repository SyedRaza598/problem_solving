//Find number of vowels used in a given string

// input: 'string'
// output: 1

let re = /[\W_]/g;

const getNumberOfVowels = (str) => {
  let mutatedString = str.toLowerCase().replaceAll(re, "");
  const isVowel = (char) =>
    char === "a" ||
    char === "e" ||
    char === "i" ||
    char === "o" ||
    char === "u";
  let count = 0;

  for (let i = 0; i < mutatedString.length; i++) {
    if (isVowel(mutatedString[i])) {
      count++;
    }
  }

  return count;
};

export default getNumberOfVowels;
