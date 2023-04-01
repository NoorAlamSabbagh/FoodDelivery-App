const express = require('express')
const router = express.Router()
const User = require('../models/User')
const { body, validationResult } = require('express-validator');//Signup

router.post("/creatuser", 
//SignUp code validator
body('email').isEmail(),
  body('name').isLength({ min: 5 }),
  body('password', 'Incorrect password').isLength({ min: 5 }),
  async (req, res) =>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
        await User.create({
            name: req.body.name,
            password: req.body.email,
            email: req.body.email,
            location: req.body.location
        })
        res.json({success:true})
        } catch (error){
            console.log(error)
            res.json({success:false});
        }
})

//
router.post("/loginuser", 
body('email').isEmail(),
  body('password', 'Incorrect password').isLength({ min: 5 }),
async (req, res) =>{
  const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
let email = req.body.email;
    try {
        let userData = await User.findOne({email});
        if(!userData){
          return res.status(400).json({ errors: "Try Logging With Correct Credentials"});
        }

        if(req.body.password !== userData.password){
          return res.status(400).json({ errors: "Try Logging With Correct Credentials"});
        }
        return res.json({ success:true});


        res.json({success:true})
        } catch (error){
            console.log(error)
            res.json({success:false});
        }
})
module.exports = router;