// An array such that each index has a product of all the numbers in the array except the number stored at that index.

/**
 * Input - [1, 2, 3, 4]
 * Output - [24, 12, 8, 6]
 */

const findProduct = (arr) => {
  const productArray = [];

  for (let i = 0; i < arr.length; i++) {
    let currentList = [...arr];
    currentList.splice(i, 1);
    let sum = currentList.reduce((acc, starter) => acc * starter);
    productArray.push(sum);
  }

  return productArray;
};

export default findProduct;
