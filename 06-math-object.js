// 數學物件:一個內建的物件，用來提供一系列的屬性與方法

console.log(Math.PI); // 3.14159...
console.log(Math.E); // 2.7182818...

let n1 = 3.23;
let n2 = 4.99;
let n3 = 3.33;
let n4 = 5.67;

let x = 2;
let y = 3;
let z = 81;

let a;
let b;
let c;
let d;
let result1;
let result2;

a = Math.round(n1); // 四捨五入
console.log(a); // 3

b = Math.floor(n2); // 無條件捨去
console.log(b); // 4

c = Math.ceil(n3); // 無條件進位
console.log(c); // 4

d = Math.trunc(n4); // 無條件捨去小數部分，保留整數
console.log(d); // 5

result1 = Math.pow(x, y); // pow = power，x^y，x的y次方
console.log(result1); // 2^3 = 8

result2 = Math.sqrt(z); // 開根號
console.log(result2); // 9

console.log(Math.max(x, y, z)); // 回傳最大值:81
console.log(Math.min(x, y, z)); // 回傳最小值:2

// 一些可能比較不常用到的:

// 計算正弦值:Math.sin()、計算餘弦值:Math.cos()、計算正切值:Math.tan()
// 計算對數:Math.log()、計算絕對值:Math.abs()、判斷數字符號:Math.sign()，負數回傳-1，正數回傳1，0回傳0，非數字回傳NaN
