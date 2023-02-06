//const fs = require("fs"); // full package

const { readFileSync, writeFileSync, appendFile } = require("fs"); // only read and write

//read  the file todostxt and return a arry
function getTodos() {
  const todosList = readFileSync("./todos1.txt")
    .toString()
    .split("\n")
    .map((str) => str.trim());
  //const todosList = readFileSync("./todos.txt", "utf-8"); utf-8 - encoding
  //.map((str) => "-" + str);
  //console.log(todosList);
  return todosList;
}

//get the todos from gettpdps() and display to the user

const todos = getTodos()
  .map((item, index) => index + 1 + ". " + item)
  //.map((item,index) =>`${(index +1). ${item}`)
  .join("\n");

//console.log(todos);

function addTodo(dataFromFunc) {
  appendFile("./todos1.txt", dataFromFunc, function (err) {});
  console.log("Your task was added!");
}

module.exports = {
  getTodos,
  addTodo,
};
//getTodos();
