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
const body = document.querySelector("body");
const closeButtonClass = document.querySelector(".close-button");
const etsy = document.querySelector("#etsy");
const backOp = document.querySelector(".background-opacity");
const stylePics = document.querySelectorAll(".style-pics");

/* Picture containers that are divs */
const braceletsCont = document.querySelector("#bracelets-container");
const keychainsCont = document.querySelector("#keychains-container");
const beltsCont = document.querySelector("#belts-container");
const walletsCont = document.querySelector("#wallets-container");
const zippersCont = document.querySelector("#zippers-container");
const moreInfoBtn = document.querySelector(".more-info-button");

imgCover.addEventListener("mouseover", function () {
    logoDiv.setAttribute("style", "display: none;")
    imgCover.style.display = "flex";
    imgCover.style.justifyContent = "center";
    landingPage.classList.add("background-opacity")
    logoImg.setAttribute("style", "display: none;")
    landingPage.style.border = "0";
    landingPage.style.outline = "0";
    landingPage.style.backgroundImage = "url(WolfBraceletFrontPageWebsite.jpeg)";
    paraCompID.classList.add("para-com")
    paraCompID.classList.add("paracord-header")
    paraCompID.innerHTML = "ParaRosetta"
    badass.classList.add("paracord-badass");
    badass.innerText = "Fashion";
    paraStyle.classList.add("paracord-style");
    paraStyle.innerText = "That Translates";
    etsy.classList.add("etsy-animate");
    etsy.innerText = "Visit ParaRosetta on Etsy";
});

/* H3 variables created for pictures */
const braceletsH3 = document.createElement("h3");
const keychainsH3 = document.createElement("h3");
const beltsH3 = document.createElement("h3");
const walletsH3 = document.createElement("h3");
const zippersH3 = document.createElement("h3");

/* Add class to each H3 */
braceletsH3.classList.add("img-text");
keychainsH3.classList.add("img-text");
beltsH3.classList.add("img-text");
walletsH3.classList.add("img-text");
zippersH3.classList.add("img-text");

/* Place text in each H3 */
braceletsH3.textContent = "Bracelets";
keychainsH3.textContent = "Keychains";
beltsH3.textContent = "Belts";
walletsH3.textContent = "Wallets";
zippersH3.textContent = "Zipper Pulls";

/* Append H3 to appropriate container */
braceletsCont.appendChild(braceletsH3);
keychainsCont.appendChild(keychainsH3);
beltsCont.appendChild(beltsH3);
walletsCont.appendChild(walletsH3);
zippersCont.appendChild(zippersH3);

/* Bracelets More Info Div */
const braceletsMoreDiv = document.createElement("div");
braceletsMoreDiv.classList.add("more-info-div");
braceletsMoreDiv.id = "bracelets-more-div";
const braceletsCloseBtn = document.createElement("button");
braceletsCloseBtn.classList.add("close-button");
braceletsCloseBtn.textContent = "Close";
braceletsMoreDiv.appendChild(braceletsCloseBtn);
const braceletsMoreH3 = document.createElement("h3");
braceletsMoreH3.classList.add("more-info-div-header");
braceletsMoreH3.textContent = "Bracelets";
braceletsMoreDiv.appendChild(braceletsMoreH3);
const braceletsList = document.createElement("ul");
braceletsMoreDiv.appendChild(braceletsList);
braceletsList.classList.add("more-info-list")
const bList1 = document.createElement("li");
const bList2 = document.createElement("li");
const bList3 = document.createElement("li");
const bList4 = document.createElement("li");
const bList5 = document.createElement("li");

bList1.textContent = "Adjustable";
bList2.textContent = "Buckles";
bList3.textContent = "Shackle Clasp";
bList4.textContent = "Beads";
bList5.textContent = "Custom Sizes";
braceletsList.appendChild(bList1)
braceletsList.appendChild(bList2)
braceletsList.appendChild(bList3)
braceletsList.appendChild(bList4)
braceletsList.appendChild(bList5)



/* Bracelets Button Variables - text, add classes, append elements */
const braceletsBtn = document.createElement("button");
braceletsBtn.classList.add("more-info-button");
braceletsBtn.textContent = "More Info"
braceletsCont.appendChild(braceletsBtn);
braceletsBtn.style.display = "none";

/* Events added to Bracelets Picture */
braceletsCont.addEventListener("mouseover", function () {
    braceletsPic.style.transform = "scale(1.3)";
    braceletsH3.style.display = "none";
    braceletsBtn.style.display = "flex";
    braceletsBtn.addEventListener("click", function () {
        pictureSection.append(braceletsMoreDiv)
        braceletsMoreDiv.style.display = "flex";
        braceletsCloseBtn.addEventListener("click", function () {
            braceletsMoreDiv.style.display = "none";
        })
    })
    braceletsCont.addEventListener("mouseout", function () {
        braceletsPic.style.transform = "scale(1)";
        braceletsH3.style.display = "flex";
        braceletsBtn.style.display = "none";
    })
})

/* Keychains More Info Div */
const keychainsMoreDiv = document.createElement("div");
keychainsMoreDiv.classList.add("more-info-div");
keychainsMoreDiv.id = "keychains-more-div";
const keychainsCloseBtn = document.createElement("button");
keychainsCloseBtn.classList.add("close-button");
keychainsCloseBtn.textContent = "Close";
keychainsMoreDiv.appendChild(keychainsCloseBtn);
const keychainsMoreH3 = document.createElement("h3");
keychainsMoreH3.classList.add("more-info-div-header");
keychainsMoreH3.textContent = "Keychains";
keychainsMoreDiv.appendChild(keychainsMoreH3);
const keychainsList = document.createElement("ul");
keychainsMoreDiv.appendChild(keychainsList);
keychainsList.classList.add("more-info-list")
const kList1 = document.createElement("li");
const kList2 = document.createElement("li");
const kList3 = document.createElement("li");
const kList4 = document.createElement("li");

kList1.textContent = "Various Styles";
kList2.textContent = "Beads";
kList3.textContent = "Key Ring";
kList4.textContent = "Lobster/Lanyard Clip";
keychainsList.appendChild(kList1)
keychainsList.appendChild(kList2)
keychainsList.appendChild(kList3)
keychainsList.appendChild(kList4)



/* Keychains Button Variables - text, add classes, append elements */
const keychainsBtn = document.createElement("button");
keychainsBtn.classList.add("more-info-button");
keychainsBtn.textContent = "More Info"
keychainsCont.appendChild(keychainsBtn);
keychainsBtn.style.display = "none";

/* Events added to Keychains Picture */
keychainsCont.addEventListener("mouseover", function () {
    keychainsPic.style.transform = "scale(1.3)";
    keychainsH3.style.display = "none";
    keychainsBtn.style.display = "flex";
    keychainsBtn.addEventListener("click", function () {
        pictureSection.append(keychainsMoreDiv)
        keychainsMoreDiv.style.display = "flex";
        keychainsCloseBtn.addEventListener("click", function () {
            keychainsMoreDiv.style.display = "none";
        })
    })
    keychainsCont.addEventListener("mouseout", function () {
        keychainsPic.style.transform = "scale(1)";
        keychainsH3.style.display = "flex";
        keychainsBtn.style.display = "none";
    })
})

/* Belts More Info Div */
const beltsMoreDiv = document.createElement("div");
beltsMoreDiv.classList.add("more-info-div");
beltsMoreDiv.id = "belts-more-div";
const beltsCloseBtn = document.createElement("button");
beltsCloseBtn.classList.add("close-button");
beltsCloseBtn.textContent = "Close";
beltsMoreDiv.appendChild(beltsCloseBtn);
const beltsMoreH3 = document.createElement("h3");
beltsMoreH3.classList.add("more-info-div-header");
beltsMoreH3.textContent = "Belts";
beltsMoreDiv.appendChild(beltsMoreH3);
const beltsList = document.createElement("ul");
beltsMoreDiv.appendChild(beltsList);
beltsList.classList.add("more-info-list")
const beList1 = document.createElement("li");
const beList2 = document.createElement("li");
const beList3 = document.createElement("li");
const beList4 = document.createElement("li");
const beList5 = document.createElement("li");

beList1.textContent = "Various Styles";
beList2.textContent = "Stylish Belt Clips";
beList3.textContent = "Different Lengths";
beList4.textContent = "40 inches";
beList5.textContent = "34 inches";
beltsList.appendChild(beList1)
beltsList.appendChild(beList2)
beltsList.appendChild(beList3)
beltsList.appendChild(beList4)
beltsList.appendChild(beList5)



/* Belts Button Variables - text, add classes, append elements */
const beltsBtn = document.createElement("button");
beltsBtn.classList.add("more-info-button");
beltsBtn.textContent = "More Info"
beltsCont.appendChild(beltsBtn);
beltsBtn.style.display = "none";

/* Events added to Belts Picture */
beltsCont.addEventListener("mouseover", function () {
    beltsPic.style.transform = "scale(1.3)";
    beltsH3.style.display = "none";
    beltsBtn.style.display = "flex";
    beltsBtn.addEventListener("click", function () {
        pictureSection.append(beltsMoreDiv)
        beltsMoreDiv.style.display = "flex";
        beltsCloseBtn.addEventListener("click", function () {
            beltsMoreDiv.style.display = "none";
        })
    })
    beltsCont.addEventListener("mouseout", function () {
        beltsPic.style.transform = "scale(1)";
        beltsH3.style.display = "flex";
        beltsBtn.style.display = "none";
    })
})

/* Wallets More Info Div */
const walletsMoreDiv = document.createElement("div");
walletsMoreDiv.classList.add("more-info-div");
walletsMoreDiv.id = "wallets-more-div";
const walletsCloseBtn = document.createElement("button");
walletsCloseBtn.classList.add("close-button");
walletsCloseBtn.textContent = "Close";
walletsMoreDiv.appendChild(walletsCloseBtn);
const walletsMoreH3 = document.createElement("h3");
walletsMoreH3.classList.add("more-info-div-header");
walletsMoreH3.textContent = "Wallets";
walletsMoreDiv.appendChild(walletsMoreH3);
const walletsList = document.createElement("ul");
walletsMoreDiv.appendChild(walletsList);
walletsList.classList.add("more-info-list")
const wList1 = document.createElement("li");
const wList2 = document.createElement("li");
const wList3 = document.createElement("li");
const wList4 = document.createElement("li");

wList1.textContent = "Various Styles";
wList2.textContent = "Slim Minimalist";
wList3.textContent = "Bifold";
wList4.textContent = "Custom Colors";
walletsList.appendChild(wList1)
walletsList.appendChild(wList2)
walletsList.appendChild(wList3)
walletsList.appendChild(wList4)



/* Wallets Button Variables - text, add classes, append elements */
const walletsBtn = document.createElement("button");
walletsBtn.classList.add("more-info-button");
walletsBtn.textContent = "More Info"
walletsCont.appendChild(walletsBtn);
walletsBtn.style.display = "none";

/* Events added to Wallets Picture */
walletsCont.addEventListener("mouseover", function () {
    walletsPic.style.transform = "scale(1.3)";
    walletsH3.style.display = "none";
    walletsBtn.style.display = "flex";
    walletsBtn.addEventListener("click", function () {
        pictureSection.append(walletsMoreDiv)
        walletsMoreDiv.style.display = "flex";
        walletsCloseBtn.addEventListener("click", function () {
            walletsMoreDiv.style.display = "none";
        })
    })
    walletsCont.addEventListener("mouseout", function () {
        walletsPic.style.transform = "scale(1)";
        walletsH3.style.display = "flex";
        walletsBtn.style.display = "none";
    })
})

/* Zippers More Info Div */
const zippersMoreDiv = document.createElement("div");
zippersMoreDiv.classList.add("more-info-div");
zippersMoreDiv.id = "zippers-more-div";
const zippersCloseBtn = document.createElement("button");
zippersCloseBtn.classList.add("close-button");
zippersCloseBtn.textContent = "Close";
zippersMoreDiv.appendChild(zippersCloseBtn);
const zippersMoreH3 = document.createElement("h3");
zippersMoreH3.classList.add("more-info-div-header");
zippersMoreH3.textContent = "Zippers";
zippersMoreDiv.appendChild(zippersMoreH3);
const zippersList = document.createElement("ul");
zippersMoreDiv.appendChild(zippersList);
zippersList.classList.add("more-info-list")
const zList1 = document.createElement("li");
const zList2 = document.createElement("li");
const zList3 = document.createElement("li");
const zList4 = document.createElement("li");
const zList5 = document.createElement("li");

zList1.textContent = "Various Styles";
zList2.textContent = "Beads";
zList3.textContent = "Bright";
zList4.textContent = "Dark";
zList5.textContent = "Assorted";
zippersList.appendChild(zList1)
zippersList.appendChild(zList2)
zippersList.appendChild(zList3)
zippersList.appendChild(zList4)
zippersList.appendChild(zList5)



/* Zippers Button Variables - text, add classes, append elements */
const zippersBtn = document.createElement("button");
zippersBtn.classList.add("more-info-button");
zippersBtn.textContent = "More Info"
zippersCont.appendChild(zippersBtn);
zippersBtn.style.display = "none";

/* Events added to Zippers Picture */
zippersCont.addEventListener("mouseover", function () {
    zippersPic.style.transform = "scale(1.3)";
    zippersH3.style.display = "none";
    zippersBtn.style.display = "flex";
    zippersBtn.addEventListener("click", function () {
        pictureSection.append(zippersMoreDiv)
        zippersMoreDiv.style.display = "flex";
        zippersCloseBtn.addEventListener("click", function () {
            zippersMoreDiv.style.display = "none";
        })
    })
    zippersCont.addEventListener("mouseout", function () {
        zippersPic.style.transform = "scale(1)";
        zippersH3.style.display = "flex";
        zippersBtn.style.display = "none";
    })
})