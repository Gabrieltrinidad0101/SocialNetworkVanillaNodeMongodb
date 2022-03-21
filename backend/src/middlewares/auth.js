const jwt =require("jsonwebtoken")
const User = require("../model/user")

const verifyAccount = async (req,res,next)=>{
    try {
        const token = req.headers['x-access-token'];
        if(!token) return res.status(401).json({error: "the token is required"});
        const decojwt = jwt.verify(token,process.env.KEY);
        req.userId = decojwt.id;
        const user = await User.findOne({_id: req.userId});
        if(!user) return res.status(401).json({error: "the user not existe"});
        next();
    } catch (error) {
        return res.status(401).json({error: "error with the token"})
    }
}

module.exports = verifyAccount