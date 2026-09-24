// for迴圈：重複執行一段有次數限制的程式碼

for (let i = 0; i <= 10; i++) {
  console.log(i); // 1~10
}

for (let i = 10; i > 0; i--) {
  console.log(i); // 10~1
}

for (let i = 0; i <= 20; i++) {
  if (i === 12) {
    continue; // 跳過12
  } else {
    console.log(i); // 1~20，但中間會跳過12
  }
}

for (let i = 0; i <= 20; i++) {
  if (i === 12) {
    break; // 數到11便結束迴圈
  } else {
    console.log(i); // 1~11
  }
}

// ----------------------------------------------------------------

// for...in：遍歷屬性（陣列中的鍵值）或索引值

const student = {
  name: "student1",
  age: 20,
  department: "CS",
};

for (const data in student) {
  console.log(data); // 印出鍵值：name age department
}

const num = [10, 25, 40, 55];

for (let x in num) {
  console.log(x); // 印出索引值：0 1 2 3 4
}

// ----------------------------------------------------------------

// for...of：遍歷鍵值

const colors = ["black", "white", "gray"];

for (const color of colors) {
  console.log(color); // black white gray
}
