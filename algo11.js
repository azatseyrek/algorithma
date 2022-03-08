const nums = [3, 4, 5, 2];

const sortedNums = nums.sort((a,b) => b-a)

let result = (sortedNums[0] - 1) * (sortedNums[1]-1)

console.log(result);
