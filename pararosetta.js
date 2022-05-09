const logoDiv = document.querySelector(".logo-div")
const landingPage = document.querySelector(".landing-page");
const paraCompany = document.querySelector(".pararosetta-company");
const paraCompID = document.querySelector("#para-head");
const logoImg = document.querySelector("#logo");
const badass = document.querySelector("#badass");
const hardcore = document.querySelector("#hardcore");
const paraStyle = document.querySelector("#paracord-style");
const imgCover = document.querySelector("#image-cover");
const braceletsPic = document.querySelector("#bracelets-pic");
const keychainsPic = document.querySelector("#keychains-pic");
const lanyardsPic = document.querySelector("#lanyards-pic");
const beltsPic = document.querySelector("#belts-pic");
const walletsPic = document.querySelector("#wallets-pic");
const zippersPic = document.querySelector("#zipper-pulls-pic");
const braceletsText = document.querySelector("#bracelets-text");
const keychainsText = document.querySelector("#keychains-text");
const lanyardsText = document.querySelector("#lanyards-text");
const beltsText = document.querySelector("#belts-text");
const walletsText = document.querySelector("#wallets-text");
const zippersText = document.querySelector("#zipper-pulls-text");
const moreInfo = document.querySelector(".more-info-div");
const imageCont = document.querySelectorAll(".img-container");
const pictureSection = document.querySelector("#pictures");
const moreHeader = document.querySelector(".more-info-div-header");
const moreFirst = document.querySelector(".more-info-first-container");
const closeButtonClass = document.querySelector(".close-button");
const braceletsDiv = document.createElement("div");
const keychainsDiv = document.createElement("div");
const lanyardsDiv = document.createElement("div");
const beltsDiv = document.createElement("div");
const walletsDiv = document.createElement("div");
const zippersDiv = document.createElement("div");
const backOp = document.querySelector(".background-opacity");
const stylePics = document.querySelectorAll(".style-pics");

imgCover.addEventListener("mouseover", function () {
    logoDiv.setAttribute("style", "display: none;")
    imgCover.style.display = "flex";
    imgCover.style.justifyContent = "center";
    landingPage.classList.add("background-opacity")
    logoImg.setAttribute("style", "display: none;")
    landingPage.style.border = "0";
    landingPage.style.outline = "0";
    landingPage.style.backgroundImage = "url(Images/WolfBraceletFrontPageWebsite.jpeg)";
    paraCompID.classList.add("para-com")
    paraCompID.classList.add("paracord-header")
    paraCompID.innerHTML = "ParaRosetta"
    badass.classList.add("paracord-badass");
    badass.innerText = "Fashion";
    paraStyle.classList.add("paracord-style")
    paraStyle.innerText = "That Translates"
});

for(let x of imageCont){
    x.addEventListener("mouseover", function(){
        for(let y of stylePics){
            y.addEventListener("mouseover", function(){
                y.style.transform = "scale(1.3)"
                const btn = document.createElement("button");
                y.appendChild(btn)
                btn.classList.add("more-info-button")
            })
            y.addEventListener("mouseout", function () {
                y.style.transform = "scale(1)"
            })
        }
        
    })
}