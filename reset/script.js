import ansatte from "../ansatte/js/ansatte.js"


const sendBTN = document.querySelector(".reset")
const inputEmail = document.querySelector(".email")


console.log(ansatte[1].id)

const emailList = [
    "svend@cisco.com",
    "carlos@cisco.com",
    "michael@cisco.com",
    "julie@cisco.com",
    "bent@cisco.com",
    "mathilde@cisco.com",
    "herluf@cisco.com",
    "bente@cisco.com",
    "hans@cisco.com",
    "villy@cisco.com",
    "simon@cisco.com",
    "jason@cisco.com",
    "emil@cisco.com",

]


function validateEmail(){

    /* Opret variable med værdien fra input feltet når vi trykker på knappen */
    let inputValue = inputEmail.value;

    for( let i = 0; i < emailList.length; i++){

        console.log(emailList[i].toString() == inputValue)

    /* Tjekker om input mail findes i vores array og returnere true hvis den finder den  */
        if(emailList[i] == inputValue ){
            console.log("din mail findes")
            alert("Tilykke!")
            return true
        }

    /* Hvis den ikke findes giver den os false*/

        if(emailList[i] != inputValue ){
            console.log("din mail findes ikke")
        }
}
}






