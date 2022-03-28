const {Router} = require("express");
const verifyAccount = require("../../middlewares/auth")
const User = require("../../model/user")
const router = Router();

router.get("/get",verifyAccount,async (req,res)=>{
    const users = await User.find({_id: {$ne: req.userId }},{name: 1})
    res.status(200).json({message: users});
})





module.exports = router