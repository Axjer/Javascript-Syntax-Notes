// while 迴圈:當特定條件成立(true)時，重複執行一段程式碼(最少執行0次)

let username1 = "";

while (username1 === "") {
  console.log(`Your Name can't be empty`); // 執行這段(重複無限次)
}

console.log(`Hi ${username1}`);

// ----------------------------------------------------

// do-while 迴圈:先執行一次程式碼，再去檢查條件是否成立(最少執行1次)

let username2 = "user";

do {
  console.log(`Your Name can't be empty`); // 先執行這段
} while (username2 === "");

console.log(`Hi ${username2}`); // 再執行這段，Hi user
