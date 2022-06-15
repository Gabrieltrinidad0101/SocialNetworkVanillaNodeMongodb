import {SERVERURL} from "../../../help/urls/serverUrl.js"
const PATH = "/message"
const URL = `${SERVERURL}${PATH}`
const getMessagesApi = async (senderId,receiverId) => {
    const token = localStorage.getItem("token");
    console.log(`${senderId} ${receiverId}`)
    const res = await fetch(`${URL}/get`,{ 
            method: "POST",
            headers: {"x-access-token": token},
            body: JSON.stringify({
                senderId,
                receiverId
            })
        })
    const info = await res.json()
    return info
}

export default getMessagesApi