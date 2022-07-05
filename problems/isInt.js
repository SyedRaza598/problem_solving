//Check if a number is an integer.

// 5.5 ==>> false(Not an integer)
// 105 ==>> true
// -205 ==>> true

const isInteger = (number) => {
  return Number.isInteger(number);
};

export default isInteger;
