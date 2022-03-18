require('dotenv').config()
const express = require("express");
const cors = require("cors")
const auth = require("./routers/auth/auth")
const app = express()
const morgan = require("morgan")

//database connection
require("./database")

//middlewares
app.use(cors())
app.use(express.json())
app.use(morgan("dev"))
//routers
app.use("/auth",auth)

const server = async _=>{
    await app.listen(3000)
    console.log("Start the server")
} 
server()