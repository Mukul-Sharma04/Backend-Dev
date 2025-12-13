const express = require("express");
const app = express();

const userModel = require("./userModel");

app.get("/", (req, res) => {
  res.send("hey");
});

app.get("/create", async (req, res) => {
  let createdUser = await userModel.create({
    name: "Akshay",
    email: "akshay@gmail.com",
    username: "akshay",
  });

  res.send(createdUser)
});

app.get("/update", async (req, res) => {
  let updatedUser = await userModel.findOneAndUpdate({username: 'mukul'}, {name: 'Mukul Sharma'}, {new: true});

  res.send(updatedUser);
});

app.get('/read', async (req, res)=>{
    let user = await userModel.find()
    res.send(user)
})

app.get('/delete', async (req, res)=>{
    let deletedUser = await userModel.findOneAndDelete({username: 'mukul'})
    res.send(deletedUser)
})

app.listen(3000);
