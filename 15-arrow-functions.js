// 箭頭函式：函式宣告式的簡化寫法，去掉function改成=>
// (參數) => 程式碼

let add = (a, b) => {
  let ans = a + b;
  return ans;
};

console.log(add(10, 20)); // 30

// 箭頭函式再簡化：當函式中沒有return以外的程式碼時，可省略return和{}

let sum = (x, y) => x + y;
console.log(sum(20, 30)); // 50
