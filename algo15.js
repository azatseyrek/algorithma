let countNegatives = (grid) => {
  let count = 0;
  grid.map((arr) => {
    arr.map((num) => {
      if (num < 0) {
        count++;
      }
    });
  });
  return count;
};
console.log(
  countNegatives([
    [4, 3, 2],
    [3, 2, 1, -1],
    [1, 1, -1, -2],
    [-1, -1, -2, -3],
  ])
);
