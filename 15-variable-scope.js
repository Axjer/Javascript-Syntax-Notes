// 全域變數 VS 區域變數

let x = 0; // 全域變數

function f1() {
  let x = 1; // 區域變數
  console.log(x);
}

function f2() {
  let x = 2; // 區域變數
  console.log(x);
}

// 優先調用區域變數，如果調用f1()，回傳1；如果調用f2()，回傳2
// 如果函式內沒有區域變數，則會調用全域變數
