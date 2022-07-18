// Merge two arrays that are not sorted
// Input: [11, 34, 23, 8, 18], [32, 16, 17, 2, 9, 14, 26]
// Output: []

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

export default mergeTwoSortedArrays;
