const express = require("express");
const router = express.Router();

router.get("/", function (req, res, next){
    console.log(req, res)
    res.send("API is at your service my lord!");
})

module.exports = router;