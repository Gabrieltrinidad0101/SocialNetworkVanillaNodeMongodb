import { getUsers } from "./services/getUser.js";

const containerUserName = document.querySelector(".users");

console.log(getUsers())

getUsers().forEach(({name}) => {
    containerUserName.innerHTML = `<div>${name}</div>`
});
