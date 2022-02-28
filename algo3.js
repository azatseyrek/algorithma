const str = "0000000010000"; //7

const myStr = str.toString().split("");
console.log(myStr);

let index = 0;

let count = 0;

while (index < myStr.length) {
  if (myStr[index + 2] == "1") {
    count += 1;
    index += 1;
  } else if (myStr[index + 2] == "0" || myStr[index + 1] == "0") {
    count += 1;
    index += 2;
  }else {
      count += 0
      index+=1
  }
}
console.log(count);