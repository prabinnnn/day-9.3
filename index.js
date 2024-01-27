const findOdd = (arr) => {
  return arr.reduce((a, b) => a ^ b);
};
console.log(findOdd([1, 3, 2, 1, 1, 1, 10, 1, 1, 1, 1]));
