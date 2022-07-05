import isInteger from "./problems/isInt.js";
import getSecondLargest from "./problems/getSecondLargest.js";
import checkPalindrome from "./problems/checkPlindrome.js";
import findProduct from "./problems/productOfNumbers.js";
import getNumberOfVowels from "./problems/numberOfVowels.js";

let re = /[\W_]/g;

// console.log(isInteger(5.5))

// console.log(getSecondLargest([11, 3, 5, -23, 73, 96, 12, 109]));

// console.log(checkPalindrome("never odd or even."));
// console.log(checkPalindrome("1 eye for of 1 eye."));
// console.log(checkPalindrome("rotator."));

// console.log(findProduct([1, 2, 3, 4]));

// console.log(getNumberOfVowels("his name is jack."));

//Find number of chracter occurances in a string.

const getNumberOfOccurances = (str) => {
  let alphaNumericStr = str.toLowerCase();

  let occuranceCount = {};

  let maxCharUsed;

  alphaNumericStr.split("").forEach((alpha) => {
    if (!occuranceCount[alpha]) {
      occuranceCount[alpha] = 1;
    } else {
      occuranceCount[alpha] += 1;
    }
  });

  for (let i in occuranceCount) {
    if (!maxCharUsed) {
      maxCharUsed = occuranceCount[i];
    } else if (maxCharUsed < occuranceCount[i]) {
      maxCharUsed = occuranceCount[i];
    }
  }

  return { occuranceCount, maxCharUsed };
};

// console.log(getNumberOfOccurances('I will be there at 6 o"clock and i will kil you.'))

const reverseNumber = (num) => {
  let strNum = parseInt(num.toString().split("").reverse().join(""));

  return strNum;
};

// console.log(reverseNumber(678))

const mergeTwoSortedArrays = (arr1, arr2) => {
  let array1Length = 0;
  let array2Length = 0;
  let mergedArray = [];
  let sorted = false;

  while (array1Length < arr1.length && array2Length < arr2.length) {
    if (array1Length < arr1.length) {
      mergedArray.push(arr1[array1Length]);
      array1Length++;
    }

    if (array2Length < arr2.length) {
      mergedArray.push(arr2[array2Length]);
      array2Length++;
    }
  }

  while (!sorted) {
    sorted = true;
    for (let i = 1; i < mergedArray.length; i++) {
      if (mergedArray[i - 1] > mergedArray[i]) {
        sorted = false;
        mergedArray[i] = mergedArray[i - 1] + mergedArray[i];
        mergedArray[i - 1] = mergedArray[i] - mergedArray[i - 1];
        mergedArray[i] = mergedArray[i] - mergedArray[i - 1];
      }
    }
  }

  return mergedArray;
};

// console.log(mergeTwoSortedArrays([678, 3, 5, 78], [5, 4, 32, 12]))

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
// console.log(checkAnagram('Punishment ', 'Nine thumps.'))

/** Given an array of numbers, return the highest number that can be made out of it */

let arr = [1, 34, 3, 98, 9, 76, 45, 4];

const getLargestNum = (a, b) => {
  //   console.log(`${a} + ${b}`);
  let x = Number(String(a) + String(b));
  let y = Number(String(b) + String(a));

  return x > y ? -1 : 1;
};

let largestNum = Number(arr.sort(getLargestNum).join(""));

// console.log(largestNum);

//Bubble Sort

const bubbleSort = (arr) => {
  let sorted = false;
  let mergedArray = [...arr];
  while (!sorted) {
    sorted = true;
    for (let i = 1; i < mergedArray.length; i++) {
      console.log(`${mergedArray[i - 1]} ${mergedArray[i]}`);
      if (mergedArray[i - 1] > mergedArray[i]) {
        sorted = false;
        mergedArray[i] = mergedArray[i - 1] + mergedArray[i];
        mergedArray[i - 1] = mergedArray[i] - mergedArray[i - 1];
        mergedArray[i] = mergedArray[i] - mergedArray[i - 1];
      }
    }
  }

  return mergedArray;
};

// console.log(bubbleSort([1, 34, 3, 98, 9, 76, 45, 4]));

//Call Apply and Bind

let obj = {
  firstName: "Syed",
  lastName: "Raza",
  getFullName: function () {
    console.log(this.firstName + " " + this.lastName);
  },
};

function getFullName(city, country) {
  console.log(this.firstName + this.lastName + city + country);
}

let obj2 = {
  firstName: "Bacha",
  lastName: "Khan",
};

obj.getFullName();

getFullName.apply(obj2, ["Lahore", "Pakistani"]);

const obj2Fullame = obj.getFullName.bind(obj2);

let obj2WithFunc = getFullName.bind(obj2);

console.log(obj2Fullame());
