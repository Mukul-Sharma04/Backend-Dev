const express = require("express");
const router = express.Router();
const ownerModel = require("../models/ownerModel");

router.get("/", (req, res) => {
    res.send("hey its working");
})

console.log(process.env.NODE_ENV);
 
router.post("/create", (req, res)=>{

})

module.exports = router;