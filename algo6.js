let nums = [2, 5, 1, 3, 4, 7, 9];

let n = 3;

const output = [];

for (i = 0; i <= n; i++) {
  output.push(nums[i]);
  output.push(nums[i + n]);
}

console.log(output);
