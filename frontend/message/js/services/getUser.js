import {SERVERURL} from "../../../help/urls/serverUrl.js"

const URL = SERVERURL + "/user"
const token = localStorage.getItem("token")
export const getUsers =  async _=>{
    const res = await fetch(`${URL}/get`,
    {
        headers:  {"x-access-token": token}
    }
    )
    const info = await res.json()
    return info.message
}
