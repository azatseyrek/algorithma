// console.log(myIp);

let ip = "1.1.1.1";

// let myIp = ip.split("");
let myArr = [];

// for (i = 0; i <= myIp.length - 1; i++) {
//   if (myIp[i] == ".") {
//     myArr.push("[.]");
//   } else {
//     myArr.push(myIp[i]);
//   }
// }

for (let c of ip) {
    if (c  == ".") {
      myArr.push("[.]");
    } else {
      myArr.push(c);
    }
  }


const result = myArr.join("").toString()
console.log(result);
