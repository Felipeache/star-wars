const { response } = require("express");
const express = require("express");
const router = express.Router();

// Pour faker le login j'ai créé cette const avec le password encrypte en MD5
// Oui, nous ne faisons pas ça normalement 🙂 
router.get("/", function (req, res, next){
    const user =[
        {
            id: 1, name:'Luke', username:'Luke', password: '25cd6fb9faccb2f7f7bbb1e4d4a2825e'
        }
    ];
    //console.log("buscando", user[0].name)
    if (user[0].username == req.query.username && user[0].password == req.query.password) {
        res.json({ response: "Welcome great master "+user[0].username })
    } else {
        console.log("unauthorized")
        res.json()
    }
    
})


module.exports = router;