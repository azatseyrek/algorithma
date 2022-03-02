let number = 23145;

let myNum = number.toString().split("");

// let output = () => {
//   let sum = 0;
//   let digits = 1;
//   for (i = 0; i < myNum.length; i++) {
//     sum += Number(myNum[i]);
//     digits *= Number(myNum[i]);
//   }
//   let result = digits - sum;
//   console.log(result);
// };

// output();

const result = () => {
    const sum = myNum.map(Number).reduce((sum , e)=>{
        return sum+=e
    },0)

    const digit = myNum.map(Number).reduce((digit, e)=> {
        return digit*=e
    })

    const result = digit - sum
    console.log(result);
} 

result()