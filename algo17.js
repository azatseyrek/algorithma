function QuestionsMarks(str) {
  let myStr = str.split("");
  let idx = [];

  for (let i = 0; i <= myStr.length; i++) {
    if (Number(myStr[i]) == myStr[i]) {
      idx.push(i);
    }
  }

  if(myStr[idx[0] + 1] == "?" ) {
      console.log("question mark");
  }



  console.log(idx);
}

QuestionsMarks("aa6?9");
