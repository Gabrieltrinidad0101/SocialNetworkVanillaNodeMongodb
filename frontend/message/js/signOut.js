const signOutButton = document.getElementById("signOut");
signOutButton.addEventListener("click",_=>{
    localStorage.setItem("token","");
    window.location = "/frontend/register/register.html"
})