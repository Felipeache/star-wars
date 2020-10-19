const express = require("express");
const router = express.Router();
const axios = require('axios')

//API Call pour avoir la data des planets

router.get("/", function (req, res, next){
    const planets_call = async () =>{ 
        try{
            const response = await axios.get(api_url+'planets')
            res.json({data:response.data})
        }
        catch (e){
            console.log("Il y a eu une erreur! Nous avons envoyé un Lutin pour le réparer. ")
        }
    };
    planets_call();    
})

router.get("/:id", function (req, res, next){
    const id_planets_call = async () =>{ 
        try{
            const response = await axios.get(api_url+`planets/${req.params.id}`)
            res.json({data:response.data})
        }
        catch (e){
            console.log("Il y a eu une erreur! Nous avons envoyé un Lutin pour le réparer. ")
        }
    };
    id_planets_call();    
})


module.exports = router;