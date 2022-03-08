const nums = [8, 1, 2, 2, 3];

let sortedNums = [...nums].sort((a,b)=> a-b);

let resultArr = [];

for (let num of nums) {
  resultArr.push(sortedNums.indexOf(num));
}

console.log(resultArr);



// let inner = 4

// var addTo = (passed) => {
  

//   var add = (inner) => {
//     return passed + inner
//   };

//   return add(inner);
// };

// var x = addTo(3)

// console.log(x);
