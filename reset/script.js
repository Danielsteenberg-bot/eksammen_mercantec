import ansatte from "../ansatte/js/ansatte.js"


const inputEmail = document.querySelector(".email")
const sendBTN = document.querySelector(".reset");

function validateID(){

    /* Opret variable med værdien fra input feltet når vi trykker på knappen */
    let inputValue = inputEmail.value;

    for(let a = 0; a < ansatte.length; a++){

        console.log(ansatte[a].id.toString() == inputValue)

    /* Tjekker om input mail findes i vores array og returnere true hvis den finder den  */
        if(ansatte[a].id == inputValue ){
            console.log("din mail findes")
            alert("Tilykke!")
            return true
        }

    /* Hvis den ikke findes giver den os false*/

        if(ansatte[a].id != inputValue ){
            console.log("din mail findes ikke")
        }
    }
}

sendBTN.addEventListener("click", validateID); 

 





