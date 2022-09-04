//https://api.github.com/users/user_name/repos

const user_img = document.querySelector(".profile");
const input = document.querySelector("#input");
const following = document.querySelector(".following");
const  followers = document.querySelector(".followers");
const repo = document.querySelector(".repos");
const  btn = document.querySelector(".btn");
const url = "https://api.github.com/users/";
const username = document.querySelector('.username');
const bio = document.querySelector('.bio')
const plink = document.querySelector('.plink');

 
document.addEventListener("DOMContentLoaded", () =>{
    btn.addEventListener('click', () => {
        fetchInfo();
        fetchRepos();
        fetchFollowers();
        fetchFollowing();
    })
});

function fetchInfo() {
   
    return fetch(url + input.value)
            .then(resp => resp.json())
        .then(data => {
                console.log(data)
                user_img.src = data.avatar_url;
                username.textContent = `Username:  ${data.login}`;
                bio.textContent = `Bio:  ${data.bio}`
                plink.textContent = `Github:  ${data.html_url}`

        })
}


function fetchRepos() {
    return fetch(url + input.value + `/repos?per_page=100`)
        .then(resp => resp.json())
        .then(repos => {
            console.log(repos)
            repo.textContent = repos.length;
    })
}

function fetchfollowing() {
    return fetch(url + input.value + `/following`)
        .then(resp => resp.json())
        .then(flw => {
            console.log(flw)
            following.textContent = flw.length;
    })
}

function fetchFollowers() {
    return fetch(url + input.value + `/followers`)
        .then(resp => resp.json())
        .then(folo => {
            console.log(folo)
            followers.textContent = folo.length;
    })
}