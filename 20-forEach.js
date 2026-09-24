// forEach():遍歷
// for有對於的意思，Each有每個的意思，合起來就是對於每個的意思

// 用途:對陣列中的每個元素執行一個提供的函式
// 回傳值:undefined（它不接受回呼函式的回傳值，也不會回傳一個新陣列，也不會改變原始陣列）
// 使用時機:對每個值執行某些事情，且沒有要使用回傳值
// 注意事項:forEach()不能改變陣列的長度，但可以改變陣列中物件內部的屬性

let nums = [1, 2, 3, 4, 5];
nums.forEach(display); // 變數.forEach(函式名稱)

function display(element) {
  console.log(element);
}

// 執行結果：
// 1
// 2
// 3
// 4
// 5
