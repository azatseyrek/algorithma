const arr1 = [1, 2, 3, 4];
const arr2 = [3, 2, 1];

const checkArr = () => {
  let myArr1 = [...arr1].sort();
  let myArr2 = [...arr2].sort();

  let check = false;

  myArr1.map((elem) => {
    if (myArr2.includes(elem)) {
      check = true;
    } else {
      check = false;
    }
  });
  return check
};

console.log(checkArr());
