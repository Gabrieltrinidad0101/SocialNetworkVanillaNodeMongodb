require('dotenv').config()
const express = require("express");
const cors = require("cors")
const morgan = require("morgan")
const authRouter = require("./routers/auth/auth")
const userRouter = require("./routers/user/user")
const messageRouter = require("./routers/message/message")
const socket = require("socket.io")
const Message = require("./model/message")

const app = express()
app.use(cors())

//database connection
require("./database")

//middlewares
app.use(cors())
app.use(express.json())
app.use(morgan("dev"))

//routers
app.use("/auth",authRouter)
app.use("/user",userRouter)
app.use("/message",messageRouter)

const server = app.listen(3001,_=>{
    console.log("Start the server")
})

const io = socket(server, {
  cors: {
    origin: "*",
  },
});
const users = {}
io.on('connection', (socket) => {

  socket.on("addUser",({ userId }) => {
    users[userId] = socket.id
  })

  socket.on("sendMessage",async ({ senderId,receiverId, text }) =>{
    const message = Message({
      senderIdAndreceiverId: `${senderId} ${receiverId}`,
      text
    })
    await message.save()
    io.to(users[receiverId]).emit("getMessage",{text,senderId})
  })
});