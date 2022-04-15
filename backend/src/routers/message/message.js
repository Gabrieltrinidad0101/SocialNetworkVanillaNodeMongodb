const router = require("express").Router()
const Conversation = require("../../model/message")


router.post("/",(req,res)=>{
    try{
        const {conversationId,sender,text} = req.body
        const newMessage = new Message(
            {
                conversationId,sender,text
            }
        )
        await newMessage.save()
    }catch{
        res.status(500).json({message: "error conversation"})
    }
})

module.exports = router