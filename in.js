// const middle = (string) => {
//   const arr = string.slice(1, 3);
//   return arr;
// };
// console.log(middle("rest"));
const middle = (string) => {
  length = string.length;
  const h =
    length % 2 === 0
      ? string.slice(length / 2 - 1, length / 2 + 1)
      : string[Math.floor(length / 2)];
  return h;
};

console.log(middle("rest"));
