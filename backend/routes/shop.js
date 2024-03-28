const router = require("express").Router();
let medicine = require("../models/Medicine")
router.route("/shop").get( async (req,res)=>{

    medicine.find().then((medicine)=>{
        console.log(medicine)
        res.json(medicine)
    }).catch((err)=> {
        console.log(err)
    })

})

module.exports = router