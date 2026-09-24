// 回呼函式：把函式當作另一個函式的參數傳入
// 不直接呼叫函式，而是傳遞給另一個函式，由另一個函式在特定的時機下（例如某些操作完成後）再呼叫它

hello(goodbye);

function hello(callback) {
  console.log("Hello !");
  callback();
}

function goodbye() {
  console.log("GoodBye !");
}

// 執行結果：
// Hello !
// GoodBye !

// ----------------------------------------

function openVScode(callback) {
  console.log("Open VScode");
  setTimeout(function () {
    console.log("Type some code..."); // 等待5秒後，執行這段程式碼
    callback();
  }, 5000);
}

function compiler() {
  console.log("Execute some code...");
}

openVScode(compiler);

// 執行結果：
// Open VScode
// （等待5秒）
// Type some code...
// Execute some code...
