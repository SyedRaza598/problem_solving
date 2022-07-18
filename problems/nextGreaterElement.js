// Input: [4, 6, 3, 2, 8, 1]
// Output: [6, 8, 8, 8, -1, -1]

const nextGreaterElement = (arr) => {
  if (!Array.isArray(arr)) {
    return "Input should be an array.";
  }

  let outputElements = [];

  for (let i = 0; i < arr.length; i++) {
    let nextGreaterExist = false;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[i]) {
        outputElements.push(arr[j]);
        nextGreaterExist = true;
        break;
      }
    }
    if (!nextGreaterExist) {
      outputElements.push(-1);
    }
  }

  return outputElements;
};

export default nextGreaterElement;
