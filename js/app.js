// KURSORX SCRIPTS
var kursorx = new kursor({
    type: 2, //type to of 5
    color: 'rgba(251, 86, 7, 1)',
    removeDefaultCursor: true
})

// TOGGLE MENU SCRIPT
var open = document.getElementById('hamburger');
var changeIcon = true;

open.addEventListener("click", function(){

    var overlay = document.querySelector('.overlay');
    var nav = document.querySelector('nav');
    var icon = document.querySelector('.menu-toggle i');

    overlay.classList.toggle("menu-open");
    nav.classList.toggle("menu-open");

    if (changeIcon) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");

        changeIcon = false;
    }
    else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
        changeIcon = true;
    }
});

// JAVASCRIPT TEST

// let navContainer = document.getElementById("site-nav-bar");
// let navItems = navContainer.getElementsByClassName("nav-item");

// for (var i = 0; i < nav-DataTransferItem.length; i++) {
//     nav-navItems[i].addEventListener("click", function() {
//         let current = document.getElementsByClassName("active");
//         current[0].className = current[0].className.replace("active", "");
//         this.className += " active";
//     });
// }

let mainNavLinks = document.querySelectorAll("nav ul li a");
let mainSections = document.querySelectorAll("main section");

let lastId;
let cur = [];

window.addEventListener("scroll", event => {
    let fromTop = window.scrollY;

    mainNavLinks.forEach(link => {
        let section = document.querySelector(link.hash);

        if (
            section.offsetTop <= fromTop &&
            section.offsetTop + section.offsetHeight > fromTop
        ) {
            link.classList.add("current");
        } else {
            link.classList.remove("current");
        }
    });
});