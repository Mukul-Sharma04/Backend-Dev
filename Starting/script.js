// const fs = require("node:fs");
const http = require("http");

// writefile, appendfile, copyfile, rename, unlink

// fs.writeFile('hey.txt', "Hey Hello kaiso ho bhai", function(err){
//     if(err) console.error(err);
//     else console.log("done");
// })

// fs.appendFile("hey.txt" ,"M toh badhiya hun, tum kaise ho bhai", function(err){
//     if(err) console.error(err);
//     else console.log("done");
// })

// fs.rename("hey.txt", "hello.txt", function(err){
//     if(err) console.error(err);
//     else console.log("done");
// })

// fs.copyFile("hello.txt","./copy/copy.txt", function(err){
//     if(err) console.error(err);
//     else console.log("done");
// })

// fs.unlink("hello.txt", function(err){
//     if(err) console.error(err);
//     else console.log("done");
// })

// fs.unlink("./copy/copy.txt", function(err){
//     if(err) Console.error(err);
//     else console.log("done");
// })

// fs.rmdir("./copy", function(err){
//     if(err) console.error(err);
//     else console.log("removed");
// })

// Http modules :-
// const server = http.createServer(function(req, res){
//     res.end("hello world");
// })

// server.listen(3000);

// Express:-

// const express = require('express')
// const app = express()

// app.get('/', function(req, res){
//     res.send('Hello World')
// })

// app.listen(3000)

// Request Accepted:
const express = require('express')
const app = express()

// Middleware:
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.use(function(req, res, next){
    console.log("middleware chala")
    next()
})

// Route:
app.get("/", function(req, res){
    res.send("Home page hai yeee ")
})

// app.get("/profile", function(req, res){
//     res.send("Profile page")
// })

// Error Handler:
app.use((err, req, res, next)=>{
    console.error(err.stack)
    res.status(500).send("Something Broke!")
})

app.listen(3000)