const jwt =require("jsonwebtoken")
const User = require("../model/user")

const verifyAccount = async (req,res,next)=>{
    const token = req.headers['x-access-token'];
    if(!token) return res.status(401).json("error 1");

    const decojwt = jwt.verify(token,"product");
    req.userId = decojwt.id;
    const user = await User.findOne({_id: req.userId});
    if(!user) return res.status(401).json("error 2");
    next();
}

module.exports = verifyAccount