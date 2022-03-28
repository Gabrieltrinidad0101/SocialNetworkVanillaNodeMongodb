import {SERVERURL} from "../../../help/urls/serverUrl.js"
const PATH = "/auth"
const URL = `${SERVERURL}${PATH}`
const auth = async _ => {
    const token = localStorage.getItem("token");
    const res = await fetch(`${URL}/verify`,{ 
            headers: {"x-access-token": token}
        })
    const info = await res.json()
    if(info.error) window.location = "/frontend/register/register.html"
}

auth()