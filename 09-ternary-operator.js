// 三元運算子(條件運算子):一種特殊的運算子，需要三個運算元來執行判斷
// if{} else{} 條件判斷式的簡短寫法
// 條件 ? 成立時(True)回傳的值 : 不成立(False)時回傳的值;

let age = 20;
let message = age >= 18 ? "You are an adult" : "You are a minor";
console.log(message); // You are an adult

let time = 12;
let greeting = time < 12 ? "Good morning !" : "Good afternoon !";
console.log(greeting); // Good morning !

let signIn = false;
let checkText = signIn ? "You can enter this site" : "You need to sign up";
console.log(checkText); // You need to sign up
