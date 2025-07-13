const http = require("http");
const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "./db/todos.json");

const server = http.createServer((req, res) => {
  if (req.url === "/todos" && req.method === "GET") {
    const data = fs.readFileSync(filePath, { encoding: "utf-8" });
    res.writeHead(200, {
      "content-type": "application/json",
    });

    res.end(data);
  } else if (req.url === "/createTodo" && req.method === "POST") {
    let data = "";

    req.on("data", (chunk) => {
      data = data + chunk;
    });

    req.on("end", () => {
      const { title, details } = JSON.parse(data); // sent data received here

      const currentDate = new Date().toLocaleString();

      const allTodos = fs.readFileSync(filePath, { encoding: "utf-8" }); // getting previous stored todos
      const parsedAllTodos = JSON.parse(allTodos);

      parsedAllTodos.push({ title, details, currentDate }); // added sent data with all previous data

      fs.writeFileSync(filePath, JSON.stringify(parsedAllTodos), { encoding: "utf-8",}); // writing data on file

      res.end(JSON.stringify({ title, details, currentDate }));
    });
    res.end("Created todos successfully.");
  } else {
    res.end("Route Not Found.");
  }
});

server.listen(5000, "127.0.0.1", () => {
  console.log("Server listening port 5000");
});
