let profile = document.getElementById("profile");
let views = document.getElementById("views");
let card = document.getElementById("card");
let close = document.getElementById("close");

let bollywood = document.getElementById("bollywood");
let dance = document.getElementById("dance");
let phone = document.getElementById("phone");
let page = document.getElementById("page");
let btn = document.getElementById("btn");
let musicbtn = document.getElementById("music-btn");
let music = document.getElementById("music");


profile.addEventListener("click", function() {
    views.style.display = "flex";
    card.style.display = "none";
});


close.addEventListener("click", function() {
    views.style.display = "none";
    card.style.display = "grid";
    dance.style.display = "none";
});


bollywood.addEventListener("click", function() {
    dance.style.display = "flex";
    card.style.display = "none";
    btn.style.display = "none";
    phone.style.background = "linear-gradient(90deg, #101310, #252a27)";
});


page.addEventListener("click", function() {
    dance.style.display = "none";
    card.style.display = "grid";
    btn.style.display = "flex";
    phone.style.background = "linear-gradient(90deg, #343634, #127332)";
});

musicbtn.addEventListener("click", function() {
    if(music.paused){
        music.play();
        musicbtn.innerHTML = "&#xe034";
    }
    else{
        music.pause();
        musicbtn.innerHTML = "&#9654";
    }
});

