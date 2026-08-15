// 方法鏈結:在一行連續的程式碼中，接連呼叫(調用)一個又一個的方法

let username = window.prompt("Enter your username: ");

// 未使用方法鏈結

username = username.trim();
let firstChar = username.charAt(0);
firstChar = firstChar.toUpperCase();

let extraChars = username.slice(1);
extraChars = extraChars.toLowerCase();
username = firstChar + extraChars;

console.log(username);

// 使用方法鏈結

username =
  username.trim().charAt(0).toUpperCase() +
  username.trim().slice(1).toLowerCase();

console.log(username);

// 兩個寫法回傳的值相同，但使用方法鏈結可提升可讀性，也可減少冗餘變數、降低命名負擔
