const str = "UDDDUDUU";

const myStr = str.toString().split("");

let count = 0;

let height = 0;

myStr.map((e) => {
  height = e == "U" ? height + 1 : height - 1;
  count = !height ? count +1 : count
});

console.log(count -1);
