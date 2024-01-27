const likedcom = (array) => {
  array.push("liked this");
  return array.join();
};

console.log(likedcom(["peter"]));
