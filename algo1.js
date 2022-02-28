// kac tane cift var?

const str = [10, 20, 20, 10, 10, 30, 50, 10, 20, "?"];
// 1.Yol

// str.pop() isondaki elemani bu sekidle silebiliriz

// let removedElem = str.pop() ---> burda silinmis elemani tuatbiliriz

// 2.yol

// const strArr = str.toString().split(",");

// const cleanedArr = strArr.filter((elem) => elem == Number(elem));

// const counts = {};

// cleanedArr.map((elem) => {
//   counts[elem] = counts[elem] ? counts[elem] + 1 : 1;
// });

// const result = Object.values(counts).reduce((acc, value)=> {
//     return acc += Math.floor(value / 2)
// }, 0)

// console.log(result);

// const strArr = str.toString().split(',')
// console.log(strArr);

// const cleanedArr = strArr.filter((elem)=> {
//     return elem == Number(elem)
// })

// const pair = {}

// cleanedArr.map((elem)=> {
//     pair[elem] = pair[elem] ? pair[elem] + 1 : 1
// })

// const result = Object.values(pair).reduce((acc, value)=> {
//     return acc+= Math.floor(value/2)
// }, 0)

// console.log(result);

const strArr = str.toString().split(",");

const cleanedArr = strArr.filter((elem) => {
  return elem == Number(elem);
});

console.log(cleanedArr);

let pair = {};

cleanedArr.map((elem) => {
  pair[elem] = pair[elem] ? pair[elem] + 1 : 1;
});

const result = Object.values(pair).reduce((acc, value) => {
    return acc += Math.floor(value/2) 
},0)


console.log(result);