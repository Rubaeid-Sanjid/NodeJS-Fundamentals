const http = require("http");

const data = [
    {
        title: "Node JS",
        createdTime: "13/07/2025"
    },
    {
        title: "Typescript",
        createdTime: "05/07/2025"
    },
    
]

const server = http.createServer((req, res)=>{
    // console.log(req.url, req.method);
    
    if(req.url === "/todos" && req.method === "GET"){
        res.writeHead(200, {
            "content-type": "application/json",
            "email": "sanjid@gmail.com"
        })
        // res.setHeader("content-type", "text/plain");
        // res.statusCode = 200;
        res.end(JSON.stringify(data));

    }else if(req.url === "/createTodo" && req.method === "POST"){
        res.end("Creating todos");
    }else{
        res.end("Route Not Found.");
    }    
})

server.listen(5000, "127.0.0.1", ()=>{
    console.log("Server listening port 5000");
})