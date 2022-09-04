let menuBar = document.getElementById("menu-bar");
let headerMobile = document.getElementById("header-mobile");
let menuDropdown = document.getElementById("menu-mobile-dropdown");

headerMobile.addEventListener("click", function () {
    if (menuBar.src.match("../images/menu-bar.png")) {
        menuBar.src = "../images/menu-close.png";
        menuDropdown.style.visibility = "visible";
        menuDropdown.style.opacity = "1";
    } else {
        menuBar.src = "../images/menu-bar.png"
        menuDropdown.style.visibility = "hidden";
        menuDropdown.style.opacity = "0";
    }
});

let playBtns = document.querySelectorAll(".playBtn");
let playSection = document.getElementById("playSection");
let playOverlay = document.getElementById("playOverlay");

function playFunction() {
    if(playSection.style.opacity == "0") {
        playSection.style.opacity = "1";
        playSection.style.visibility = "visible";
        playOverlay.style.opacity = "1";
        playOverlay.style.visibility = "visible";
    }else {
        playSection.style.opacity = "0";
        playSection.style.visibility = "hidden";
        playOverlay.style.opacity = "0";
        playOverlay.style.visibility = "hidden";
    }
}

playOverlay.addEventListener("click", function () {
    playFunction();
});

playBtns.forEach(e => e.addEventListener("click", function() {
    playFunction();
}));