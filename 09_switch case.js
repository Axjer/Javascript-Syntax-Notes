// 條件判斷:可以用來有效替代許多if{} else{} 陳述式的語法

let day = 1;

switch (day) {
  case 1:
    console.log("Monday"); // 會執行這行
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log(`${day} is not a day`);
}

// 如果沒有加上break，就會輸出多個結果，例如day = 2，會輸出case 2 ~ case 7和default的結果

let score = 91;
let grade;

switch (true) {
  case score >= 90:
    grade = "A";
    break;
  case score >= 80:
    grade = "B";
    break;
  case score >= 70:
    grade = "C";
    break;
  case score >= 60:
    grade = "D";
    break;
  default:
    grade = "F";
}

console.log(grade); // A
