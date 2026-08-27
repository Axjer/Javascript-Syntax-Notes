// 展開運算子：用於展開陣列和物件，使得在處理數據時更加靈活和方便

// 1. 展開陣列
// 將一個陣列的元素展開成個別的值

// 複製陣列：建立一個新的陣列，把舊陣列的值放進去，兩個陣列互不影響
// 合併陣列：把多個陣列串接組合成一個新陣列
// 傳入函式：將陣列的元素依序當作參數傳入函數中

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

let maxNum = Math.max(...array1);
let minNum = Math.min(...array2);
let combinedNum = [...array1, ...array2]; // 合併陣列

console.log(maxNum); // 3
console.log(minNum); // 4
console.log(combinedNum); // [ 1, 2, 3, 4, 5, 6 ]

let sum = (x, y, z) => x + y + z;
let result = sum(...array2); // 將陣列作為參數傳入函式，可看作：add(4, 5, 6)
console.log(result); // 15

// ------------------------------------------------------------------------------

// 2. 展開物件
// 將一個物件的所有鍵值對展開，並複製到另一個新物件中

// 淺拷貝物件：快速複製舊物件的屬性來建立新物件
// 合併物件：將多個物件的屬性組合成一個新物件
// 覆寫屬性：在展開時加入同名屬性，後面的值會覆寫前面的值

let RedBullDrivers = ["Max Verstappen", "Isack Hadjar"];
let FerrariDrivers = ["Charles Leclerc", "Lewis Hamilton"];

let copyDrivers = [...FerrariDrivers]; // 淺拷貝物件
let allDrivers = [...RedBullDrivers, ...FerrariDrivers]; // 合併物件

console.log(copyDrivers); // [ 'Charles Leclerc', 'Lewis Hamilton' ]
console.log(allDrivers); // [ 'Max Verstappen', 'Isack Hadjar', 'Charles Leclerc', 'Lewis Hamilton' ]
