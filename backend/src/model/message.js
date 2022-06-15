const {Schema,model} = require("mongoose")

const messageSchama = new Schema({
    senderIdAndreceiverId: String,
    text: String,
},{
    timestamps: true
});

module.exports = model("message",messageSchama)