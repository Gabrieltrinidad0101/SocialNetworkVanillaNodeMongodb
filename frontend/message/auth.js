import Fetch from "../help/fetch/fetch.js";
const auth = async _ => {
    const token = localStorage.getItem("token");
    await Fetch({ url: `/auth/verify/${token}`, method: "get" })
}

auth()