let candies = [2, 3, 5, 1, 3];

let extraCandies = 1;

let output = [];

let largestNum = 0;

for (i = 0; i <= candies.length; i++) {
  if (candies[i] > largestNum) {
    largestNum = candies[i];
  }
}

candies.map((elem) => {
  if (elem + extraCandies >= largestNum) {
    output.push(true);
  } else {
    output.push(false);
  }
});

console.log(output);
