import { getUsers } from "./services/getUser.js";
import Message from "./message.js"
class User{
    constructor(id){
        this.containerUsers = document.querySelector(".users");
        this.currentName = document.getElementById("currentName");
        this.insert()
        this.message = new Message(id)
    }


    async insert(){
        const users = await getUsers()
        const fragment = new DocumentFragment()
        users.forEach((user)=>{
            const div = document.createElement("div");
            div.innerText = user.name
            div.addEventListener("click",_=>{
                this.message.setReceiverId = user._id
                this.message.clearMessage()
                this.message.setMessage()
                this.updateCurrentName(user.name)
            })
            fragment.appendChild(div)
        })
        this.containerUsers.appendChild(fragment)
    }

    updateCurrentName(name){
        this.currentName.innerText = name
    }
}


export default User