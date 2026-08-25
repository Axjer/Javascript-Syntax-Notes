// filter()：篩選、過濾
// 會根據條件函式，來回傳結果為true的值。若無值，則回傳[]空陣列

// 用途：對陣列的每個值執行回呼函式，回呼函式可以包含任何程式碼邏輯，但它最後的return語句必須產生一個布林值
// 回傳值：經過執行回呼函式後，得到符合條件的新陣列結果
// 使用時機：從現有陣列中，創建一個只包含符合特定條件元素的新陣列

let nums = [3, 5, 8, 13, 10];

let isEven = (num) => {
  return num % 2 === 0;
};
let evenNum = nums.filter(isEven);
console.log(evenNum); // [ 8, 10 ]

let bigNum = (num) => {
  return num >= 10;
};
let biggerNum = nums.filter(bigNum);
console.log(biggerNum); // [ 13, 10 ]
