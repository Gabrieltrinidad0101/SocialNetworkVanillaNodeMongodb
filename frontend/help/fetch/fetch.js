import {SERVERURL} from "../urls/serverUrl.js"
const Fetch = async (data,url)=>{
    const res = await fetch(`${SERVERURL}${url}`,{
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data),
    })
    const info = await res.json()
    return info
}

export default Fetch