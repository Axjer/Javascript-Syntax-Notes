// 字串方法用來處理和操作文字資料，常見的用途包含尋找內容、切割與組合、以及變更大小寫

let name1 = "Verstappen";
let name2 = "Verstappen    ";
let email = "test123@gmail.com";
let phoneNumber = "123-456-789";

console.log(name1.charAt(0)); // V，charAt():尋找該數字位置的字元

console.log(name1.indexOf("p")); // 6，indexOf():尋找子字串第一次出現的位置，找不到回傳 -1

console.log(name1.lastIndexOf("p")); // 8，lastIndexOf():尋找子字串最後一次出現的位置，找不到回傳 -1

console.log(name1.length); // 10，.length:計算字串長度

console.log(name2.trim()); // trim:去除空格

//-------------------------------------------------------------------------------------------------------

console.log(name1.toUpperCase()); // VERSTAPPEN，toUpperCase():把整個字串變成大寫

console.log(name1.toLowerCase()); // verstappen，toLowerCase():把整個字串變成小寫

console.log(name1.repeat(2)); // VerstappenVerstappen，repeat():把字串做重複，括號內為想重複的次數

console.log(name1.startsWith(" ")); // false，startsWith():檢查該字串開頭是否有包含括號內的子字串

console.log(name2.endsWith(" ")); // true，endsWith():檢查該字串結尾是否有包含括號內的子字串

console.log(email.includes("@")); // true，includes():檢查該字串是否有包含括號內的子字串

//-------------------------------------------------------------------------------------------------------

console.log(phoneNumber.replaceAll("-", "/")); // 123 / 456 / 789，replaceAll(要被取代的字串, 想要替代的字串)

console.log(phoneNumber.padStart(15, "0")); // 0000123-456-789，padStart(要湊到的字串長度, 湊長度的子字串)，從原字串的前面開始湊

console.log(phoneNumber.padEnd(15, "0")); // 123-456-7890000，padEnd(要湊到的字串長度, 湊長度的子字串)，從原字串的後面開始湊
