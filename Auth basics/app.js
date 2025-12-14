const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

app.use(cookieParser())

app.get("/", (req, res)=>{
    // res.cookie("name", "mukul")
    // res.send("done")

    // bcrypt.genSalt(10, function(err, salt){
    //     // console.log(salt)
    //     bcrypt.hash("12345678pass", salt, function(err, hash){
    //         console.log(hash)
    //     })
    // })
    
    let token = jwt.sign({email: "mukul@test.com"}, "secret")
    res.cookie("token", token)
    // console.log(token);
    res.send("done")
    

    
})

app.get("/read", (req, res)=>{
    // console.log(req.cookies.token)
    let data = jwt.verify(req.cookies.token, "secret")
    console.log(data)
    res.send("read page")
})


app.listen(3000)