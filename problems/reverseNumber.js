//Reverse given number

//input: 125
//output: 521

const reverseNumber = (num) => {
  let strNum = parseInt(num.toString().split("").reverse().join(""));

  return strNum;
};

export default reverseNumber;
