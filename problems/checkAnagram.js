// Compare two strings if its an anagram.

// Input: 'Punishment ', 'Nine thumps.'
// Output: true

let re = /[\W_]/g;
const checkAnagram = (msg, anagram) => {
  let anagramStr = anagram
    .toLowerCase()
    .replaceAll(re, "")
    .split("")
    .sort()
    .join("");
  let msgStr = msg.toLowerCase().replaceAll(re, "").split("").sort().join("");
  return anagramStr === msgStr;
};

export default checkAnagram;
