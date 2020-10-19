const express = require("express");
const router = express.Router();
const axios = require('axios')

//API Call pour avoir la data des personnages 

router.get("/", function (req, res, next){
    const people_call = async () =>{ 
        try{
            let response = await axios.get(api_url+'people')
            res.json({data:response.data});
        }
        catch (e){
            console.log("Il y a eu une erreur! Nous avons envoyé un Lutin pour le réparer.")
        }
    };
    people_call();    
})

router.get("/:id", function (req, res, next){
    const id_people_call = async () =>{ 
        try{
            let response = await axios.get(api_url+`people/${req.params.id}`)
            res.json({data:response.data});
        }
        catch (e){
            console.log("Il y a eu une erreur! Nous avons envoyé un Lutin pour le réparer.")
        }
    };
    id_people_call();    
})

module.exports = router;