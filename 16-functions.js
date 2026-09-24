// 函式：一段可重複使用的程式碼
// 只需宣告一次程式碼，即可隨時調用
// 呼叫函式來執行其中的程式碼

// 函式宣告(Function Declaration)

// 結構：
// function 名稱(參數){
// 做某事
// }

function add1(x, y) {
  let sum = x + y;
  console.log(sum);
}

add1(5, 6); // 11

function add2(x, y) {
  return x + y;
}

console.log(add2("Java", "Script")); // JavaScript

// --------------------------------------------------

// 函式宣告式(Function Expressions)

// 結構：
// 變數名稱 = function(參數){
// 做某事
// };

let minus = function (x, y) {
  let ans = x - y;
  console.log(ans);
};

minus(90, 20); // 70

let greeting = function (name) {
  return `Hello ${name}`;
};

console.log(greeting("User")); // Hello User
