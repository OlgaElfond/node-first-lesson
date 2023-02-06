const { getTodos, addTodo } = require("./todos");
const process = require("process");

function displayTodos() {
  const todos = getTodos()
    .map((item, index) => ` ${index + 1}. ${item}`)
    .join("\n");
  console.log(todos);
}

function init() {
  let newTodos = "";
  let args = process.argv;

  if (args.length <= 2) {
    getTodos();
  } else {
    args.forEach((element, index) => {
      if (index >= 2) {
        //console.log(`${index}: ${element}`);
        newTodos = newTodos + " " + element;
      }
    });
    console.log(newTodos);

    addTodo(newTodos + "\n");
  }
}

init();
