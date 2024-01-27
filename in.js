const middle = (string) => {
  const arr = string.shift();
  return arr.pop();
};
console.log(middle("rest"));
