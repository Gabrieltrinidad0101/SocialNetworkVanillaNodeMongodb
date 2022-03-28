import {SERVERURL} from "../urls/serverUrl.js"
const authenticationFecth = async ({data,url,method = "post"})=>{
    const config = {
        method: method,
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    }

    const res = await fetch(`${SERVERURL}${url}`,config)
    const info = await res.json()
    return info
}

export default authenticationFecth