const express = require("express");
const router = express.Router();

router.get("/", function (req, res, next){
    let user =[
        {
            name:'Luke', username:'Luke', password: '25cd6fb9faccb2f7f7bbb1e4d4a2825e'
        }
    ];
    res.json({ data: user })
})

module.exports = router;