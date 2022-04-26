const logoDiv = document.querySelector(".logo-div")
const landingPage = document.querySelector(".landing-page");
const paraCompany = document.querySelector(".pararosetta-company");
const paraCompID = document.querySelector("#para-com");
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
const imageCont = document.querySelector(".img-container");
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

logoDiv.addEventListener("mouseover", function () {
    logoDiv.setAttribute("style", "display: none;")
    imgCover.classList.add("landing-opacity")
    landingPage.style.border = "0";
    landingPage.style.outline = "0";
    landingPage.style.backgroundImage = "url(https://imgs.search.brave.com/gGgHdE9eZPG1Jb0mcliMC732QjX6bI-_xbFfWKL9NTs/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pbWcu/ZXRzeXN0YXRpYy5j/b20vaWwvNTRmMWUy/LzEyMjc5OTY2OTQv/aWxfZnVsbHhmdWxs/LjEyMjc5OTY2OTRf/cGU3ai5qcGc_dmVy/c2lvbj0x)";
    paraCompID.classList.add("pararosetta-company")
    paraCompID.innerText = "ParaRosetta"
    badass.classList.add("paracord-badass");
    badass.innerText = "Fashion";
    paraStyle.classList.add("paracord-style")
    paraStyle.innerText = "That Translates"
});

braceletsText.addEventListener("mouseover", function () {
   braceletsText.textContent = "More Info";
   braceletsText.classList.add("more-info-button")
    braceletsText.addEventListener("click", function () {
        document.body.appendChild(braceletsDiv);
        braceletsDiv.style.display = "flex";
        braceletsDiv.classList.add("more-info-div");
        let h3Bracelet = document.createElement("h3");
        braceletsDiv.append(h3Bracelet);
        let closeBtn = document.createElement("button");
        braceletsDiv.append(closeBtn);
        closeBtn.classList.add("close-button")
        closeBtn.textContent = "Close";
        closeBtn.addEventListener("click", function(){
            braceletsDiv.style.display = "none";
            pictureSection.style.opacity = "1";
        })
        pictureSection.style.opacity = ".5";
        h3Bracelet.classList.add("more-info-div-header")
        h3Bracelet.textContent = "Bracelets";
        let braceletList = document.createElement("ul");
        braceletsDiv.append(braceletList);
        braceletList.classList.add("more-info-list");
        let braceletListBullet1 = document.createElement("li");
        braceletListBullet1.textContent = "Various Signature Styles";
        braceletList.append(braceletListBullet1);
        let braceletListBullet2 = document.createElement("li");
        braceletListBullet2.textContent = "Small & Large Sizes";
        braceletList.append(braceletListBullet2);
        let braceletListBullet3 = document.createElement("li");
        braceletListBullet3.textContent = "Adjustable";
        braceletList.append(braceletListBullet3);
        let braceletListBullet4 = document.createElement("li");
        braceletListBullet4.textContent = "Buckle";
        braceletList.append(braceletListBullet4);
        let braceletListBullet5 = document.createElement("li");
        braceletListBullet5.textContent = "Adjustable Clasp";
        braceletList.append(braceletListBullet5);
    })
    braceletsText.addEventListener("mouseout", function(){
        braceletsText.classList.remove("more-info-button")
        braceletsText.textContent = "Bracelets";
    })
})

keychainsText.addEventListener("mouseover", function () {
    keychainsText.textContent = "More Info";
    keychainsText.classList.add("more-info-button")
    keychainsText.addEventListener("click", function () {
        document.body.appendChild(keychainsDiv);
        keychainsDiv.style.display = "flex";
        keychainsDiv.classList.add("more-info-div");
        let h3keychains = document.createElement("h3");
        keychainsDiv.append(h3keychains);
        let closeBtn = document.createElement("button");
        keychainsDiv.append(closeBtn);
        closeBtn.classList.add("close-button")
        closeBtn.textContent = "Close";
        closeBtn.addEventListener("click", function () {
            keychainsDiv.style.display = "none";
            pictureSection.style.opacity = "1";
        })
        pictureSection.style.opacity = ".5";
        h3keychains.classList.add("more-info-div-header")
        h3keychains.textContent = "Keychains";
        let keychainsList = document.createElement("ul");
        keychainsDiv.append(keychainsList);
        keychainsList.classList.add("more-info-list");
        let keychainsListBullet1 = document.createElement("li");
        keychainsListBullet1.textContent = "Various Signature Styles";
        keychainsList.append(keychainsListBullet1);
        let keychainsListBullet2 = document.createElement("li");
        keychainsListBullet2.textContent = "Lanyard Clip";
        keychainsList.append(keychainsListBullet2);
        let keychainsListBullet3 = document.createElement("li");
        keychainsListBullet3.textContent = "Keyring";
        keychainsList.append(keychainsListBullet3);
        let keychainsListBullet4 = document.createElement("li");
        keychainsListBullet4.textContent = "Stylish Beads";
        keychainsList.append(keychainsListBullet4);
        let keychainsListBullet5 = document.createElement("li");
        keychainsListBullet5.textContent = "Multiple Colors";
        keychainsList.append(keychainsListBullet5);
    })
    keychainsText.addEventListener("mouseout", function () {
        keychainsText.classList.remove("more-info-button")
        keychainsText.textContent = "Keychains";
    })
})

lanyardsText.addEventListener("mouseover", function () {
    lanyardsText.textContent = "More Info";
    lanyardsText.classList.add("more-info-button")
    lanyardsText.addEventListener("click", function () {
        document.body.appendChild(lanyardsDiv);
        lanyardsDiv.style.display = "flex";
        lanyardsDiv.classList.add("more-info-div");
        let h3lanyards = document.createElement("h3");
        lanyardsDiv.append(h3lanyards);
        let closeBtn = document.createElement("button");
        lanyardsDiv.append(closeBtn);
        closeBtn.classList.add("close-button")
        closeBtn.textContent = "Close";
        closeBtn.addEventListener("click", function () {
            lanyardsDiv.style.display = "none";
            pictureSection.style.opacity = "1";
        })
        pictureSection.style.opacity = ".5";
        h3lanyards.classList.add("more-info-div-header")
        h3lanyards.textContent = "Lanyards";
        let lanyardsList = document.createElement("ul");
        lanyardsDiv.append(lanyardsList);
        lanyardsList.classList.add("more-info-list");
        let lanyardsListBullet1 = document.createElement("li");
        lanyardsListBullet1.textContent = "Various Signature Styles";
        lanyardsList.append(lanyardsListBullet1);
        let lanyardsListBullet2 = document.createElement("li");
        lanyardsListBullet2.textContent = "Breakaway";
        lanyardsList.append(lanyardsListBullet2);
        let lanyardsListBullet3 = document.createElement("li");
        lanyardsListBullet3.textContent = "Stylish Beads";
        lanyardsList.append(lanyardsListBullet3);
        let lanyardsListBullet4 = document.createElement("li");
        lanyardsListBullet4.textContent = "Multiple Colors";
        lanyardsList.append(lanyardsListBullet4);
        let lanyardsListBullet5 = document.createElement("li");
        lanyardsListBullet5.textContent = "Lanyard Clip";
        lanyardsList.append(lanyardsListBullet5);
    })
    lanyardsText.addEventListener("mouseout", function () {
        lanyardsText.classList.remove("more-info-button")
        lanyardsText.textContent = "Lanyards";
    })
})

beltsText.addEventListener("mouseover", function () {
    beltsText.textContent = "More Info";
    beltsText.classList.add("more-info-button")
    beltsText.addEventListener("click", function () {
        document.body.appendChild(beltsDiv);
        beltsDiv.style.display = "flex";
        beltsDiv.classList.add("more-info-div");
        let h3Belts = document.createElement("h3");
        beltsDiv.append(h3Belts);
        let closeBtn = document.createElement("button");
        beltsDiv.append(closeBtn);
        closeBtn.classList.add("close-button")
        closeBtn.textContent = "Close";
        closeBtn.addEventListener("click", function () {
            beltsDiv.style.display = "none";
            pictureSection.style.opacity = "1";
        })
        pictureSection.style.opacity = ".5";
        h3Belts.classList.add("more-info-div-header")
        h3Belts.textContent = "Belts";
        let beltsList = document.createElement("ul");
        beltsDiv.append(beltsList);
        beltsList.classList.add("more-info-list");
        let beltsListBullet1 = document.createElement("li");
        beltsListBullet1.textContent = "Various Signature Styles";
        beltsList.append(beltsListBullet1);
        let beltsListBullet2 = document.createElement("li");
        beltsListBullet2.textContent = "Small & Large Sizes";
        beltsList.append(beltsListBullet2);
        let beltsListBullet3 = document.createElement("li");
        beltsListBullet3.textContent = "Multiple Colors";
        beltsList.append(beltsListBullet3);
        let beltsListBullet4 = document.createElement("li");
        beltsListBullet4.textContent = "Premium Buckles";
        beltsList.append(beltsListBullet4);
        let beltsListBullet5 = document.createElement("li");
        beltsListBullet5.textContent = "Standard Buckles";
        beltsList.append(beltsListBullet5);
    })
    beltsText.addEventListener("mouseout", function () {
        beltsText.classList.remove("more-info-button")
        beltsText.textContent = "Belts";
    })
})

walletsText.addEventListener("mouseover", function () {
    walletsText.textContent = "More Info";
    walletsText.classList.add("more-info-button")
    walletsText.addEventListener("click", function () {
        document.body.appendChild(walletsDiv);
        walletsDiv.style.display = "flex";
        walletsDiv.classList.add("more-info-div");
        let h3wallets = document.createElement("h3");
        walletsDiv.append(h3wallets);
        let closeBtn = document.createElement("button");
        walletsDiv.append(closeBtn);
        closeBtn.classList.add("close-button")
        closeBtn.textContent = "Close";
        closeBtn.addEventListener("click", function () {
            walletsDiv.style.display = "none";
            pictureSection.style.opacity = "1";
        })
        pictureSection.style.opacity = ".5";
        h3wallets.classList.add("more-info-div-header")
        h3wallets.textContent = "Wallets";
        let walletsList = document.createElement("ul");
        walletsDiv.append(walletsList);
        walletsList.classList.add("more-info-list");
        let walletsListBullet1 = document.createElement("li");
        walletsListBullet1.textContent = "Various Signature Styles";
        walletsList.append(walletsListBullet1);
        let walletsListBullet2 = document.createElement("li");
        walletsListBullet2.textContent = "Minimalist Slim";
        walletsList.append(walletsListBullet2);
        let walletsListBullet3 = document.createElement("li");
        walletsListBullet3.textContent = "Large Fold";
        walletsList.append(walletsListBullet3);
        let walletsListBullet4 = document.createElement("li");
        walletsListBullet4.textContent = "Multiple Colors";
        walletsList.append(walletsListBullet4);
        
    })
    walletsText.addEventListener("mouseout", function () {
        walletsText.classList.remove("more-info-button")
        walletsText.textContent = "Wallets";
    })
})

zippersText.addEventListener("mouseover", function () {
    zippersText.textContent = "More Info";
    zippersText.classList.add("more-info-button")
    zippersText.addEventListener("click", function () {
        document.body.appendChild(zippersDiv);
        zippersDiv.style.display = "flex";
        zippersDiv.classList.add("more-info-div");
        let h3zippers = document.createElement("h3");
        zippersDiv.append(h3zippers);
        let closeBtn = document.createElement("button");
        zippersDiv.append(closeBtn);
        closeBtn.classList.add("close-button")
        closeBtn.textContent = "Close";
        closeBtn.addEventListener("click", function () {
            zippersDiv.style.display = "none";
            pictureSection.style.opacity = "1";
        })
        pictureSection.style.opacity = ".5";
        h3zippers.classList.add("more-info-div-header")
        h3zippers.textContent = "Zipper Pulls";
        let zippersList = document.createElement("ul");
        zippersDiv.append(zippersList);
        zippersList.classList.add("more-info-list");
        let zippersListBullet1 = document.createElement("li");
        zippersListBullet1.textContent = "Various Signature Styles";
        zippersList.append(zippersListBullet1);
        let zippersListBullet2 = document.createElement("li");
        zippersListBullet2.textContent = "Multiple Colors";
        zippersList.append(zippersListBullet2);
        let zippersListBullet3 = document.createElement("li");
        zippersListBullet3.textContent = "Stylish Beads";
        zippersList.append(zippersListBullet3);
        let zippersListBullet4 = document.createElement("li");
        zippersListBullet4.textContent = "Bulk Assortment";
        zippersList.append(zippersListBullet4);
    })
    zippersText.addEventListener("mouseout", function () {
        zippersText.classList.remove("more-info-button")
        zippersText.textContent = "Zipper Pulls";
    })
})