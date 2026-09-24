// 陣列：可存放多個變數的結構

let colors1 = ["black", "white", "gray"];
colors1.pop(); // 移除陣列中最後一個元素
console.log(colors1); // [ 'black', 'white' ]

let colors2 = ["black", "white", "gray"];
colors2.push("blue"); // 在陣列中最後一個位置增加元素
console.log(colors2); // [ 'black', 'white', 'gray', 'blue' ]

let colors3 = ["black", "white", "gray"];
colors3.unshift("yellow"); // 在陣列中第一個位置增加元素
console.log(colors3); // [ 'yellow', 'black', 'white', 'gray' ]

let colors4 = ["black", "white", "gray"];
colors4.shift(); // 移除陣列中第一個的元素
console.log(colors4); // [ 'white', 'gray' ]

// --------------------------------------------------------------------

for (let i = 0; i < colors2.length; i++) {
  console.log(colors2[i]);
}

// 執行結果：
// black
// white
// gray
// blue
