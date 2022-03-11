const {Router} = require("express");
const UserModel = require("../../model/user")
const jwt = require("jsonwebtoken")
const router = Router()


router.post("/register",async (req,res)=>{
    try {
        const {name,password} = req.body
        if(!name || !password){
            return res.status(500).json({error: `Completely all the data`})
        }else if(password.length < 8){
            return res.status(500).json({error: `The password need to be more than 8 character`})
        }
        const existUser = await UserModel.findOne({name})
        if(existUser){
            return res.status(500).json({error: `The user exists`})
        }

        console.log(UserModel.encryptPassword(password))

        const newUser = new UserModel({
            name,
            password: await UserModel.encryptPassword(password)
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

        const user = await UserModel.findOne({name})
        if(!user){
            return res.status(500).json({error: `The username or password are incorrect`})
        }

        const macth = await UserModel.comparePassword(password,user.password)
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

module.exports = router


