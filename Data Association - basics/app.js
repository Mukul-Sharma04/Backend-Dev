const express = require('express')
const app = express()
const userModel = require("./models/user")
const postModel = require("./models/post")

app.get("/", (req, res)=>{
    res.send("hey")
})


app.get("/create", async (req, res) => {
  let user = await userModel.create({
    username: "mukul",
    age: 21,
    email: "mukul@gmail.com"
  })

  res.send(user)
});

app.get("/post/create", async (req, res)=>{
    let post = await postModel.create({
      postdata: "hello kaise ho sab",
      user: "694239e66517a61e7e089b96",
    });

    let user = await userModel.findOne({ _id: "694239e66517a61e7e089b96" });
    user.posts.push(post._id)
    await user.save()

    res.send({post, user})
})

app.listen(3000)