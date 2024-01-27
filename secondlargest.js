const secondlargestnumber = (arr) => {
  const newArr = arr.slice(); // Create a copy of the array
  const sortedArr = newArr.sort((a, b) => a - b); // Sort the array in ascending order
  sortedArr[2] = 4; // Replace the second element with 3
  const resultArray = sortedArr.slice(1, 3); // Get the second and third elements
  return resultArray;
};

console.log(secondlargestnumber([1, 2, 3, 4, 5]));
