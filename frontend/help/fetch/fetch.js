import {SERVERURL} from "../urls/serverUrl.js"
const Fetch = async ({data,url,method = "post",})=>{
    const config = {
        method: method,
        headers: {'Content-Type': 'application/json'},
    }

    config === "post" ? config.body = JSON.stringify(data) : ""

    const res = await fetch(`${SERVERURL}${url}`,config)
    const info = await res.json()
    return info
}

export default Fetch