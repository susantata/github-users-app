//https://api.github.com/users/user_name/repos

const user_img = document.querySelector(".profile");
const userName = document.querySelector("#input").value;
const following = document.querySelector(".following");
const  followers = document.querySelector(".followers");
const repos = document.querySelector(".repos");
const  btn = document.querySelector("#btn");
const url = `https://api.github.com/user/${userName}`;
document.addEventListener("DOMContentLoaded",fetchInfo)