// 型別轉換：將一個值的資料轉換成另一種型別（Number, String, Boolean）

let age1 = window.prompt("How old are you?");
age1 += 1;

console.log(age1); // 假設輸入20，輸出則會是201（因為型別為字串，非數字）
console.log(typeof age1); // 可使用typeof來檢查型別狀態，此時為string

let age2 = window.prompt("How old are you?");
age2 = Number(age2); // 此時已將age2從字串轉為數字
age2 += 1;

console.log(age2); // 假設輸入20，輸出則會是21
console.log(typeof age2); // 可使用typeof來檢查型別狀態，此時為number

let x = "0";
let y = "0";
let z = "0";

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x); // 輸出：0 'number'，若變數值為字串，則會變成NaN(Not a Number) 'number'
console.log(y, typeof y); // 輸出：0 string
console.log(z, typeof z); // 輸出：true 'boolean'

// 在「未對變數進行賦值」和同時進行「型別轉換」的情況下，Number會變成NaN，Stirng會變成undefined，Boolean會變成false
