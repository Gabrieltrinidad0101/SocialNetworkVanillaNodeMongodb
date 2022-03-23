require('dotenv').config()
const express = require("express");
const cors = require("cors")
const app = express()
const morgan = require("morgan")
const auth = require("./routers/auth/auth")
const user = require("./routers/user/user")
//database connection
require("./database")

//middlewares
app.use(cors())
app.use(express.json())
app.use(morgan("dev"))
//routers
app.use("/auth",auth)
app.use("/user",user)

const server = async _=>{
    await app.listen(3000)
    console.log("Start the server")
} 
server()