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
const products = document.querySelectorAll(".product");
const offer = document.querySelector(".discount");
const closeBtn = document.querySelector(".close-btn");
let loaded = false;
let scrolled = false;

// Main Function
const main = (e) => {
    loaded = true;
    if (loaded){
        const spinner = document.querySelector(".loader");
        spinner.classList.add("hide");
    }
    e.preventDefault();
    // FUNCTIONS

    // GSAP animations
    const gsapAnimations = () => {
        gsap.registerPlugin(ScrollTrigger);
        let tl = gsap.timeline();
        // Home animations
        tl.from(logo, {scrollTrigger: "#home", duration: 1.5, opacity: 0, x: -50, y: -50});
        tl.from(logoText, {scrollTrigger: "#home", duration: 0.5, opacity: 0, stagger: 0.1});
        tl.from(shortText, {scrollTrigger: "#home", duration: 0.5, opacity: 0, y: 20});
        tl.from(btns, {scrollTrigger: "#home", duration: 0.5, opacity: 0, stagger: 0.25});
        tl.from(links, {scrollTrigger: "#home", duration: 0.5, opacity: 0, stagger: 0.25, y: 50});

        // products aniamtion
        gsap.from(products, {scrollTrigger: "#products", duration: 2, opacity: 0, stagger: 0.15});
    }

    // Calling functions
    gsapAnimations();

    // prikaze naj se popust
    const offerpopup = () => {
        if (window.scrollY > 350 && scrolled === false){
            offer.style.transform = "translateY(0)";
            scrolled = true;
        }
    }

    window.addEventListener("scroll", offerpopup);
    closeBtn.addEventListener("click", () => {
        offer.style.transform = "translateY(100%)";
    });
}


// Event listeners
window.addEventListener("load", main);
document.body.addEventListener("click", () => {
    console.log(window.innerWidth);
});