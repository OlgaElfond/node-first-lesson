const todoModel = require("./todos-cmd");

function create() {
  appendFile("./index.js", dataFromFunc, function (err) {});
  console.log("Your task was added!");
}

function read() {}
