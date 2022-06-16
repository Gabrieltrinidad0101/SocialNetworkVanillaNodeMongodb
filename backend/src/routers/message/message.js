const Message = require("../../model/message")
const router = require("express").Router()


router.post("/get",async (req,res)=> {
    try{
        const {senderId,receiverId} = req.body
        const messages = await Message.find({$or: [
            {senderIdAndreceiverId: `${senderId} ${receiverId}`}, 
            {senderIdAndreceiverId: `${receiverId} ${senderId}`}, 
        ]})
        res.status(200).json(messages)
    }catch{
        res.status(500).json({message: "error conversation"})
    }
})

module.exports = router