const {} = require("./todos.js");
function displayTodos() {
  const todos = getTodos()
    .map((item, index) => ` ${index + 1}. ${item}`)
    .join("\n");

  console.log(todos);
}
displayTodos();
