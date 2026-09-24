// 其餘參數：允許將傳入函數的多個參數「打包」成一個陣列，然後可以在函數內部進行操作

function showColor(...colors) {
  return colors;
}

const color1 = "white";
const color2 = "black";
const color3 = "red";
const color4 = "green";
const color5 = "blue";

const colors = showColor(color1, color2, color3, color4, color5);

console.log(colors); // [ 'white', 'black', 'red', 'green', 'blue' ]

// ------------------------------------------------------------------------

function averageScore(...scores) {
  let result = 0;

  for (let score of scores) {
    result += score;
  }

  return result / scores.length;
}

let score = averageScore(65, 90, 70, 55, 80);

console.log(score); // 72

// 注意事項：其餘參數必須放在參數列表中的最後一個位置，不然會導致語法錯誤
// 原因：因為其餘參數是收集剩下所有參數，若不放在最後，便無法正確判斷哪些參數被歸類為其餘參數
