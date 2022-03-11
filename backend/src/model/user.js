const bcrypt = require("bcrypt")
const {Schema,model} = require("mongoose")


const userSchama = new Schema({
    name: String,
    password: String
});

userSchama.statics.encryptPassword = async (password) =>{
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password,salt);
}

userSchama.statics.comparePassword = async (password,receivePassword) =>{
    return await bcrypt.compare(password,receivePassword);
}
module.exports = model("user",userSchama)