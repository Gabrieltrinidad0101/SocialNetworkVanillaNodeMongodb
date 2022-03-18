const {Router} = require("express");
const User = require("../../model/user")
const jwt = require("jsonwebtoken")
const router = Router()
const verifyAccount = require("../../middlewares/auth")

router.post("/register",async (req,res)=>{
    try {
        const {name,password} = req.body
        if(!name || !password){
            return res.status(500).json({error: `Completely all the data`})
        }else if(password.length < 8){
            return res.status(500).json({error: `The password need to be more than 8 character`})
        }
        const existUser = await User.findOne({name})
        if(existUser){
            return res.status(500).json({error: `The user exists`})
        }

        const newUser = new User({
            name,
            password: await User.encryptPassword(password)
        })
        await newUser.save()
        const token = jwt.sign({id: newUser._id},process.env.KEY)
        return res.status(200).json({token})
    } catch (error) {
        console.log(error)
        res.status(500).json({error: "Error creating account"})        
    }
})

router.post("/login",async (req,res)=>{
    try {
        const {name,password} = req.body
        if(!name || !password){
            return res.status(500).json({error: `Completely all the data`})
        }

        const user = await User.findOne({name})
        if(!user){
            return res.status(500).json({error: `The username or password are incorrect`})
        }

        const macth = await User.comparePassword(password,user.password)
        if(!macth){
            return res.status(500).json({error: `The username or password are incorrect`})
        }

        const token = jwt.sign({id: user._id},process.env.KEY)
        return res.status(200).json({token})

    } catch (error) {
        console.log(error)
        res.status(500).json({error: "Error in login"})        
    }
})

router.get("/verify",verifyAccount,(req,res)=>{
    try {
        if(!req.userId) return res.status(400).json(false);
        res.send(true)    
    } catch (error) {
        res.status(500).json("Error to verify your account")
    }
})

module.exports = router


