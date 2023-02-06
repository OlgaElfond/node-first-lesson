const todosCmd = require("./index");
const http = require("http");

http
  .createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write("The date and time are currently: " + todosCmd.myDateTime());
    response.end();
  })
  .listen(9090);
