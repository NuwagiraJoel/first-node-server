const http = require('http');

port = 3000;
hostname = '127.0.0.1';

const server = http.createServer( (req, res)=>{

    res.write("<h1> this is my first server </h1>");
    res.end("<p>bye bye, little did i know  </p>");


})

server.listen(port,hostname, ()=>{

    console.log("you are at port numbeer 3000");
})