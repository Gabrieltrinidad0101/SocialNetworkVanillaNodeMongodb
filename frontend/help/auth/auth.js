import authenticationFecth from "../services/Authentication.js";
class Auth{
    constructor(url){
        this.url = url
        this.inputName = document.getElementById("name");
        this.inputPassword = document.getElementById("password");
        this.sendData = document.getElementById("sendData");
        this.sendData.addEventListener("click",_=>this.#sendDataToServer())
    }

    #getInputData(){
        const name = this.inputName.value
        const password = this.inputPassword.value
        return {name,password}
    }

    #saveTokenInLocalStorage(token){
        localStorage.setItem("token",token)
    }

    async #sendDataToServer(){
        const {name,password} = this.#getInputData()
        if(!name || !password) return alert(`write your ${name ? "password" : "name" }`)
        const {token,error} = await authenticationFecth({data: {name,password},url: this.url});
        if(error) return alert(error)
        this.#saveTokenInLocalStorage(token)
        console.log("ok")
        window.location = "/frontend/message/message.html"
    }
}

export default Auth