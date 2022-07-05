//Find second largest value in array

//input: [2, 7, 12, 9, 45]
//output: 12

const getSecondLargest = (nums) => {
  let secondLargest = 0;
  let largest = 0;

  for (let i = 0; i < nums.length; i++) {
    if (secondLargest < nums[i]) {
      secondLargest = largest;
      largest = nums[i];
    }
    if (largest < secondLargest) {
      largest = secondLargest;
      secondLargest = i;
      // secondLargest = largest + secondLargest // 14
      // largest = secondLargest - largest // 11
      // secondLargest = secondLargest - largest
    }
  }

  return secondLargest;
};

export default getSecondLargest;
