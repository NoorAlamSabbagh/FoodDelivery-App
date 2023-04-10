const express = require('express')
const router = express.Router();

router.post('/FoodItems', (req, res)=>{
    try{
        console.log(global.FoodItems, global.FoodCategory)

        res.send([global.FoodItems, global.FoodCategory])
    }catch(error){
        console.log(error.message);
        res.send("Server Error")
    }

})

module.exports = router