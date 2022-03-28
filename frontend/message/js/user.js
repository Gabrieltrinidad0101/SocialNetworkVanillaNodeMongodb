import { getUsers } from "./services/getUser.js";

class User{
    constructor(){
        this.containerUsers = document.querySelector(".users");
        this.currentName = document.getElementById("currentName");
        this.insert()
    }


    async insert(){
        const users = await getUsers()
        const fragment = new DocumentFragment()
        users.forEach(({name,_id})=>{
            const div = document.createElement("div");
            div.innerText = name
            div.addEventListener("click",_=>this.updateCurrentName(name))
            fragment.appendChild(div)
        })
        this.containerUsers.appendChild(fragment)
    }


    updateCurrentName(name){
        this.currentName.innerText = name
    }
}


new User()
