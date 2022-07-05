//Check if given string is a Palindrome

//“race car” should return true
//“not a palindrome” should return false
//“never odd or even” should return true
//“1 eye for of 1 eye.” should return false

let re = /[\W_]/g;

const checkPalindrome = (str) => {
  let originalLwrStr = str.replaceAll(re, "").toLowerCase();
  let removeSpaces = str
    .toLowerCase()
    .replaceAll(re, "")
    .split("")
    .reverse()
    .join("");
  return removeSpaces === originalLwrStr;
};

export default checkPalindrome;
