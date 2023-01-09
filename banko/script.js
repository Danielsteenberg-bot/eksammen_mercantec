
const randomNumb = Math.floor(Math.random() * 9);
const randomNumb20 = Math.floor(Math.random() * 19);
const randomNumb30 = Math.floor(Math.random() * 29);
const randomNumb40 = Math.floor(Math.random() * 39);
const randomNumb50 = Math.floor(Math.random() * 49);
const randomNumb60 = Math.floor(Math.random() * 59);
const randomNumb70 = Math.floor(Math.random() * 69);
const randomNumb80 = Math.floor(Math.random() * 79);
const randomNumb90 = Math.floor(Math.random() * 89);
const randomNumb100 = Math.floor(Math.random() * 99);




/* Her laver vi et template over hvordan banko kortene skal være  */
function generateBanko(){    
    return  `
    <div class="banko-first-row">
        <div class="banko-card"></div>
        <div class="banko-card"></div>
        <div class="banko-card"></div>
        <div class="banko-card"></div>
        <div class="banko-card"></div>
        <div class="banko-card"></div>
        <div class="banko-card"></div>
        <div class="banko-card"></div>
        <div class="banko-card"></div>
    </div>
    `

}

/* Functionen der generer banko plader osv */
function getBanko(){
    
/* Her henter vi vores containere inde fra HTML */
const bankorow1 = document.querySelector(".banko-row-1");
const bankorow2 = document.querySelector(".banko-row-2");
const bankorow3 = document.querySelector(".banko-row-3");

const generateBTN = document.querySelector(".generateBTN")
const resetBTN = document.querySelector(".resetBTN")
 
/* Vi vil gerne have 3 rækker derfor looper vi 3 gange  */
 for(let i = 0; i < 3; i++){
    bankorow1.innerHTML += generateBanko()
    bankorow2.innerHTML += generateBanko()
    bankorow3.innerHTML += generateBanko()
 }

 const bankoCards = document.querySelectorAll(".banko-card");

/* Loop over alle "kortene" */
for(let i = 0; i < bankoCards.length; i++){

    /* tilføj random nummer i felterne  */
    bankoCards[i].classList.add("card"+[i])

    bankoCards[i].innerHTML = `<h1 class="cardValue${i}">${randomNumber()}</h1>`

    const bankoCardValue = bankoCards[i].innerText.valueOf();

    /* Udkommenter linjen nedenfor (78), for at se values i "kortene og indekset" */
/*     console.log("kort value " + bankoCardValue + " indekset " + i)
 */


    /* Slet nogle af felterne  */
        if(bankoCardValue > randomNumb20 && bankoCardValue > randomNumb30 && bankoCardValue > randomNumb40 && bankoCardValue > randomNumb50 && bankoCardValue > randomNumb60 && bankoCardValue > randomNumb70){
            bankoCards[i].innerHTML = `<h1></h1>`
        }

    /* Tilføj click animation */
        else{
            bankoCards[i].addEventListener("click", function() {
        
                bankoCards[i].classList.toggle("clicked")
        
            })

        }

}

/* Her tilføjer vi klasser så knapperne vises/fjernes */
generateBTN.classList.add("remove")
resetBTN.classList.add("show")

}


function randomNumber(){
    return Math.floor(Math.random() * 100)
}