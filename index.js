const input = document.querySelector ("input");
const btn = document.querySelector ("viwerbtn");
const viwer = document.querySelector ("githubviwer");
const logi = document.querySelector ("githubusername");
const joined = document.querySelector ("githubjoineddata");
const repo = document.querySelector ("repoTotal");
const follower = document.querySelector ("followerTotal");
const following = document.querySelector ("followingTotal");
const location = document.querySelector ("location");
const twit = document.querySelector ("twit");
const website = document.querySelector ("website");
const companies = document.querySelector ("companies");
const gitbio= document.querySelector ("githubbio");


let img = document.createElement("img");
let block = document.querySelector("mailing");


btn.addEventListener("click", funtion);
const url = "https://api.github.com/users/s{input,value}";