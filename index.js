//https://api.github.com/users/user_name/repos

const user_img = document.querySelector(".profile");
const userName = document.querySelector("#input").value;
const following = document.querySelector(".following");
const  followers = document.querySelector(".followers");
const repos = document.querySelector(".repos");
const  btn = document.querySelector("#btn");
const url = `https://api.github.com/user/${userName}`;


document.addEventListener("DOMContentLoaded",fetchInfo) => {
    searchbutton.addEventListener('click',() => {
       
    })
}

function fetchInfo{
fetch("https://api.github.com/users/user_name/repos")
.then(res => res.json())
.then(Input => {
    Input.value = userName;
    img.src = `${img.profile}`;
    searchbutton.querySelector('click',() => {
Input.following = Input.following +1;
Input.followers = Input.folowers +1;
Input.repos = Input.repos +1;
    })
})
}