import ansatte from "../ansatte/js/ansatte.js"


const inputText = document.querySelector(".text")
const sendBTN = document.querySelector(".reset");

/* Main container hide landing og hvis succes hvis det hele går godt  */
const hideContainer = document.querySelector(".lock-container")
const succesContainer = document.querySelector(".lock-container-succes")

/* fejl besked */
const error = document.querySelector(".error");

function validateID(){

    /* Opret variable med værdien fra input feltet når vi trykker på knappen */
    let inputValue = inputText.value;

    for(let a = 0; a < ansatte.length; a++){

        console.log(ansatte[a].id.toString() == inputValue)

    /* Tjekker om input mail findes i vores array og returnere true hvis den finder den  */
        if(ansatte[a].id == inputValue ){
            succesContainer.classList.add("active")
            hideContainer.classList.add("remove")
/*             return true
 */        }

    /* Hvis den ikke findes giver den os false*/

        if(ansatte[a].id != inputValue ){
            inputText.classList.add("fejl")
            error.classList.add("eror-active")
        }
    }
}

sendBTN.addEventListener("click", validateID); 

 





