// 條件判斷式:如果條件為真，執行某段程式碼，如果不是，執行其他程式碼

let age = 20;

if (age >= 18) {
  console.log("You are a adult"); // 會執行這段程式碼
} else {
  console.log("You are a minor");
}

let isStudent = false;

if (isStudent) {
  console.log("You are a student");
} else {
  console.log("You are NOT a student"); // 會執行這段程式碼
}

let grade = 80;

if (grade == 100) {
  console.log("A+");
} else if (grade >= 90 && grade < 100) {
  console.log("A");
} else if (grade >= 80 && grade < 90) {
  console.log("B"); // 會執行這段程式碼
} else if (grade >= 70 && grade < 80) {
  console.log("C");
} else if (grade >= 60 && grade < 70) {
  console.log("D");
} else {
  console.log("F");
}
