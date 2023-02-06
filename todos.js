const { readFileSync } = require("fs");

// read the file todos.txt and return an array of todos.
function getTodos() {
  const value = readFileSync("./todos.txt")
    .toString()
    .split("\n")
    .map((str) => str.trim());

  return value;
}

// // get the todos from getTodos() and display properly to the user
// function displayTodos() {
//   const todos = getTodos()
//     .map((item, index) => ` ${index + 1}. ${item}`)
//     .join("\n");

//   console.log(todos);
// }

// displayTodos();

module.export = { displayTodos };
