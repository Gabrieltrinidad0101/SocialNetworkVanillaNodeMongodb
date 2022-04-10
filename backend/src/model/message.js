const {Schema,model} = require("mongoose")

const messageSchama = new Schema({
    conversationId: String,
    sender: String,
    text: String,
},{
    timestamps: true
});

module.exports = model("message",messageSchama)