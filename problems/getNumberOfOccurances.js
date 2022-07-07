//Find number of occurrances of alphanumeric chracters in a string.

// Input: 'Hello World'
// Output: {
//     H: 1,
//     e: 1,
//     l: 3,
//     o: 2,
//     r: 1,
//     w: 1,
//     d: 1
// }

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

  return occuranceCount;
};

export default getNumberOfOccurances;
