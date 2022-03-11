require('dotenv').config()
const express = require("express");
const cors = require("cors")
const auth = require("./routers/auth/auth")
const app = express()

//database connection
require("./database")

//middlewares
app.use(cors())
app.use(express.json())

//routers
app.use("/auth",auth)

const server = async _=>{
    await app.listen(3000)
    console.log("Start the server")
} 
server()