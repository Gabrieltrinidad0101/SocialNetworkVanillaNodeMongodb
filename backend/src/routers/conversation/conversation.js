const router = require("express").Router()
const Conversation = require("../../model/conversation")


router.post("/", async (req,res)=>{
    try{
        const {serderId,receiverId} = req.body
        const newConvertion = new Conversation(
            {
                members: [serderId,receiverId]
            }
        )
        await newConvertion.save()
    }catch{
        res.status(500).json({message: "error conversation"})
    }
})

router.get("/:userId",async (req,res)=>{
    try {
        const conversation = await Conversation.find({
          members: { $in: [req.params.userId] },
        });
        res.status(200).json(conversation);
      } catch (err) {
        res.status(500).json(err);
      }
})

module.exports = router