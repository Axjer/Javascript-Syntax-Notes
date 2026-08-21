// map():對映
// 將陣列中的每個值執行一個函式，並把結果產出一個新的陣列
// 執行map()後產生的新陣列，與未執行map()前的陣列有一定的關係，可能是加法關係、減法關係、乘法關係...等等

// 用途:對陣列的每個元素使用回呼函式後的值，產出新的陣列
// 回傳值:新的陣列
// 使用時機:對每個值執行某種算法，並想要回傳值為新的陣列
// 是否改變原本陣列:不改變原始陣列

let nums = [2, 4, 6, 8, 10];

let result1 = nums.map(cube);
console.log(result1); // [ 4, 16, 36, 64, 100 ]

let result2 = nums.map(triple);
console.log(result2); // [ 6, 12, 18, 24, 30 ]

function cube(num) {
  return Math.pow(num, 2);
}

function triple(num) {
  return num * 3;
}
