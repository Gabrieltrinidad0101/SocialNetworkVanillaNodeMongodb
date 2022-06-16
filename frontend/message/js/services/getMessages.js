import {SERVERURL} from "../../../help/urls/serverUrl.js"
const PATH = "/message"
const URL = `${SERVERURL}${PATH}`
const getMessagesApi = async (senderId,receiverId) => {
    const token = localStorage.getItem("token");
    const res = await fetch(`${URL}/get`,{ 
            method: "post",
            headers: {
                "x-access-token": token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                senderId,
                receiverId
            })
        })
    const info = await res.json()
    return info
}

export default getMessagesApi