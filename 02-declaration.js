// var vs let vs const

// var 可重複宣告、可重新賦值、有提升(Hoisting)、作用域：函式(Function Scope)

var x = 1;
var x = 2;
console.log(x); // 2

console.log(hello);
var hello = "say hello"; // 宣告變數，但未初始化值，輸出：undefined

// let 不可重複宣告、可重新賦值、無提升、作用域：區塊(Block Scope)

let y = 3;
y = 4;
console.log(y); // 4

/*
若執行這段程式碼，此時會出現SyntaxError
let y = 4;
console.log(y);
*/

// const 為常數不可重複宣告、不可重新賦值、無提升、作用域：區塊(Block Scope)

const z = 5;
console.log(z); // 5
/*
若執行這段程式碼，此時會出現SyntaxError
const z = 6;
console.log(z);
*/

/*
若執行這段程式碼，此時會出現TypeError
z = 6;
console.log(z);
*/
