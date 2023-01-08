/* Knapper */
const firstBTN = document.querySelector(".firstBTN");
const secoundBTN = document.querySelector(".secoundBTN");

/* Billeder */
const firstIMG = document.querySelector(".first-img-container")
const secoundIMG = document.querySelector(".secound-img-container")

/* Default container */
const container = document.querySelector(".default-container");

/* Tilføjer eventlisterner der tjekker på click på vores knapper og derefter tilføjer eller fjerner active klassen så billederne fjernes eller vises */
firstBTN.addEventListener("click", function(){
    firstIMG.classList.add("active");
    secoundIMG.classList.remove("active");
    container.classList.add("remove")
})

secoundBTN.addEventListener("click", function(){
    secoundIMG.classList.add("active");
    firstIMG.classList.remove("active");
    container.classList.add("remove")

})