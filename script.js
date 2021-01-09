// Variables
const logo = document.querySelector("#logo");
const logoText = document.querySelectorAll(".logo-sign-text span");
const shortText = document.querySelector(".short-text");
const btns = document.querySelectorAll(".buttons button");
const links = document.querySelectorAll(".home-box-3 div");
const burger = document.querySelector(".burger");
const bars = document.querySelectorAll(".burger div");
const homePage = document.querySelector("#home");
const productBtn = document.querySelector(".product-btn")


// Main Function
const main = (e) => {
    e.preventDefault();
    // FUNCTIONS

    // GSAP animations
    const gsapAnimations = () => {
        let tl = gsap.timeline();
        tl.from(logo, {duration: 1.5, opacity: 0, x: -50, y: -50});
        tl.from(logoText, {duration: 0.5, opacity: 0, stagger: 0.1});
        tl.from(shortText, {duration: 0.5, opacity: 0});
        tl.from(btns, {duration: 0.5, opacity: 0, stagger: 0.25});
        tl.from(links, {duration: 0.5, opacity: 0, stagger: 0.25, y: 50});
        tl.to(homePage, {duration: 1, minHeight: "85vh"});
    }

    // Calling functions
    if (window.scrollY < 350){
        gsapAnimations();
    }
}


// Event listeners
window.addEventListener("load", main);
document.body.addEventListener("click", () => {
    console.log(window.innerWidth);
});