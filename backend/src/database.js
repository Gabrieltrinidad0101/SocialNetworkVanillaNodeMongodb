const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/VanillaNodeMongodb")
    .then(res => console.log("db is connect"))
    .catch(error => console.log(error))