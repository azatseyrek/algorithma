let startTime = [1, 2, 3, 4, 2];

let endTime = [3, 2, 7, 6, 7];

let queryTime = 4;

let count = 0;

const findCount = () => {
  for (let i = 0; i <= startTime.length; i++) {
    if (startTime[i] <= queryTime && endTime[i] >= queryTime) {
      count += 1;
    }
  }
  return count
};
// findCount()
console.log(findCount());


