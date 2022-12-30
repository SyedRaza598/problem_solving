import isInteger from "./problems/isInt.js";
import getSecondLargest from "./problems/getSecondLargest.js";
import checkPalindrome from "./problems/checkPlindrome.js";
import findProduct from "./problems/productOfNumbers.js";
import getNumberOfVowels from "./problems/numberOfVowels.js";
import getNumberOfOccurances from "./problems/getNumberOfOccurances.js";
import nextGreaterElement from "./problems/nextGreaterElement.js";
import reverseNumber from "./problems/reverseNumber.js";
import mergeTwoSortedArrays from "./problems/mergeTwoSortedArrays.js";
import checkAnagram from "./problems/checkAnagram.js";

let re = /[\W_]/g;

// console.log(isInteger(5.5))

// console.log(getSecondLargest([11, 3, 5, -23, 73, 96, 12, 109]));

// console.log(checkPalindrome("never odd or even."));
// console.log(checkPalindrome("1 eye for of 1 eye."));
// console.log(checkPalindrome("rotator."));

// console.log(findProduct([1, 2, 3, 4]));

// console.log(getNumberOfVowels("his name is jack."));

// console.log(
//   getNumberOfOccurances('I will be there at 6 o"clock and i will kil you.')
// );

// console.log(nextGreaterElement([4, 6, 3, 2, 8, 1]));

// console.log(reverseNumber(678));

// console.log(mergeTwoSortedArrays([678, 3, 5, 78], [5, 4, 32, 12]));

// console.log(checkAnagram("Punishment ", "Nine thumps."));

/** Given an array of numbers, return the highest number that can be made out of it */

// let arr = [1, 34, 3, 98, 9, 76, 45, 4];

// const getLargestNum = (a, b) => {
//   //   console.log(`${a} + ${b}`);
//   let x = Number(String(a) + String(b));
//   let y = Number(String(b) + String(a));

//   return x > y ? -1 : 1;
// };

// let largestNum = Number(arr.sort(getLargestNum).join(""));

// console.log(largestNum);

//Bubble Sort

// const bubbleSort = (arr) => {
//   let sorted = false;
//   let mergedArray = [...arr];
//   while (!sorted) {
//     sorted = true;
//     for (let i = 1; i < mergedArray.length; i++) {
//       console.log(`${mergedArray[i - 1]} ${mergedArray[i]}`);
//       if (mergedArray[i - 1] > mergedArray[i]) {
//         sorted = false;
//         mergedArray[i] = mergedArray[i - 1] + mergedArray[i];
//         mergedArray[i - 1] = mergedArray[i] - mergedArray[i - 1];
//         mergedArray[i] = mergedArray[i] - mergedArray[i - 1];
//       }
//     }
//   }

//   return mergedArray;
// };

// console.log(bubbleSort([1, 34, 3, 98, 9, 76, 45, 4]));

//Call Apply and Bind

// let obj = {
//   firstName: "Syed",
//   lastName: "Raza",
//   getFullName: function () {
//     console.log(this.firstName + " " + this.lastName);
//   },
// };

// function getFullName(city, country) {
//   console.log(this.firstName + this.lastName + city + country);
// }

// let obj2 = {
//   firstName: "Bacha",
//   lastName: "Khan",
// };

// obj.getFullName();

// getFullName.apply(obj2, ["Lahore", "Pakistani"]);

// const obj2Fullame = obj.getFullName.bind(obj2);

// let obj2WithFunc = getFullName.bind(obj2);

// console.log(obj2Fullame());

// console.log(getFullName.apply(obj));

// console.log(getFullName.bind(obj2)());

// (function () {
//   b = 3;
//   var a = b;
// })();

// console.log("a defined? " + (typeof a !== "undefined"));
// console.log("b defined? " + (typeof b !== "undefined"));

// const sum = (a, b) => {
//   if (b !== undefined) {
//     return a + b;
//   } else {
//     return function (b) {
//       return a + b;
//     };
//   }
// };

// console.log(sum(2)(3));

const findLargest = (nums) => {
  let largest = 0;
  let smallest = 0;

  for (let num in nums) {
    if (largest < nums[num]) {
      largest = nums[num];
    } else if (smallest > nums[num]) {
      smallest = nums[num];
    }
  }

  return { largest, smallest };
};

console.info(findLargest([20, 16, 6, 78, -18]));
