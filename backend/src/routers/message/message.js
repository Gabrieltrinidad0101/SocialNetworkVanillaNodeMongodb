const Message = require("../../model/message")
const router = require("express").Router()


router.post("/get",async (req,res)=> {
    try{
        const {senderId,receiverId} = req.body
        var messages = await Message.find({senderIdAndreceiverId: `${senderId} ${receiverId}`})
        res.status(200).json(messages)
    }catch{
        res.status(500).json({message: "error conversation"})
    }
})

module.exports = router