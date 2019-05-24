// KURSORX SCRIPTS
// var kursorx = new kursor({
//     type: 2, //type to of 5
//     color: 'rgba(251, 86, 7, 1)',
//     removeDefaultCursor: true
// })


// ANCHOR LINKS ONE PAGE ACTIVE STATE SELECTOR
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


// ANIMATE ON SCROLL INITIALIZATION
AOS.init();