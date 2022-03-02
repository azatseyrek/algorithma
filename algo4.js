// remove duplicates

let nums = [0, 1, 2, 2, 3, 0, 4, 2, 7, 7, 7, 8, 9, 15, 13, 15];

// let uniqueNums = [...new Set(nums)]

// console.log(uniqueNums);

let uniqueNums = [];

// nums.filter((elem) => {
//   if (!uniqueNums.includes(elem)) {
//     uniqueNums.push(elem);
//   }
// });

nums.filter((elem) => {
  !uniqueNums.includes(elem) ? uniqueNums.push(elem) : false
});

console.log(uniqueNums);
