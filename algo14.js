const result = () => {
  let num = 9669;

  let myNum = num.toString();

  let index = myNum.indexOf("6");

  return Number(myNum
    .split("")
    .map((c, idx) => {
      return idx == index ? "9" : c;
    })
    .join(""))
};

console.log(result());
