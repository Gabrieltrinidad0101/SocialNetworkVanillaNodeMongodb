import {SERVERURL} from "../../help/urls/serverUrl.js"
import getMessagesApi from "./services/getMessages.js";
class Message{
    receiverId = "";
    constructor(id){
        this.id = id
        this.io = io(SERVERURL)
        this.io.emit("addUser",{userId: this.id})
        this.messageToSendInput = document.getElementById("messageToSend")
        this.sendMessageButton = document.getElementById("sendMessage")
        this.sendMessageButton.addEventListener("click",_=>{this.sendMessage()})
        this.messagesText = document.querySelector(".messagesText")
        this.io.on("getMessage",data=>this.getSocketIoMessage(data))
    }

    set setReceiverId(id){
        this.receiverId = id
    }

    clearMessage(){
        this.messagesText.innerHTML = ""
    }

    sendMessage(){
        this.io.emit("sendMessage",{ 
            senderId: this.id,
            receiverId: this.receiverId, 
            text: this.messageToSendInput.value 
        })
        this.messagesText.innerHTML += `
        <div class="myMessage messageText">${this.messageToSendInput.value.toString()}</div>
        `
    }

    async setMessage(){
        const messages = await getMessagesApi(this.id,this.receiverId)
        messages.forEach(message => {
                const id = message.senderIdAndreceiverId.split(" ")[0]
                const className = id === this.id ? "myMessage" : "yourMessage"
                this.messagesText.innerHTML += `
                <div class="${className} messageText">${message.text}</div>
            `       
        });

    }

    getSocketIoMessage(data){
        if(data.senderId == this.receiverId){
            this.messagesText.innerHTML += `
            <div class="yourMessage messageText">${data.text.toString()}</div>
            `
        }
    }
}

export default Message