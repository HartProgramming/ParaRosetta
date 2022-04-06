const logoDiv = document.querySelector(".logo-div")
const landingPage = document.querySelector(".landing-page");
const paraCompany = document.querySelector(".pararosetta-company");
const paraCompID = document.querySelector("#para-com");
const badass = document.querySelector("#badass");
const hardcore = document.querySelector("#hardcore");
const paraStyle = document.querySelector("#paracord-style");




logoDiv.addEventListener("mouseover", function(){
    logoDiv.setAttribute("style", "display: none;")
    landingPage.classList.add("landing-opacity")
    landingPage.style.backgroundImage = "url(https://imgs.search.brave.com/gGgHdE9eZPG1Jb0mcliMC732QjX6bI-_xbFfWKL9NTs/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pbWcu/ZXRzeXN0YXRpYy5j/b20vaWwvNTRmMWUy/LzEyMjc5OTY2OTQv/aWxfZnVsbHhmdWxs/LjEyMjc5OTY2OTRf/cGU3ai5qcGc_dmVy/c2lvbj0x)";
    paraCompID.classList.add("pararosetta-company")
    paraCompID.innerHTML = "ParaRosetta"
    badass.classList.add("paracord-badass");
    badass.innerHTML = "Badass";
    hardcore.classList.add("paracord-hardcore");
    hardcore.innerHTML = "Hardcore";
})