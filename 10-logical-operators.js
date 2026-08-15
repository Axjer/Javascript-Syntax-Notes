// 邏輯運算子:用來連接多個條件並做出對錯判斷，進行邏輯運算並回傳True或False的結果

// 邏輯與(AND):&&
// 邏輯或(OR):||
// 邏輯非(NOT):!

const isSunny = true;
const temp = 25;

if (isSunny && temp >= 20) {
  console.log("is sunny day"); // 執行這行
} else if (!isSunny || temp < 20) {
  console.log("is cloudy day");
}
