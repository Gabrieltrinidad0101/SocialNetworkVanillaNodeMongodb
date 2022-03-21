import Fetch from "../../help/fetch/fetch.js";
const auth = async _ => {
    const token = localStorage.getItem("token");
    const info = await Fetch({ 
            url: `/auth/verify`, 
            method: "get",
            headers: {"x-access-token": token}
        })
    if(info.error) window.location = "/frontend/register/register.html"
}

auth()