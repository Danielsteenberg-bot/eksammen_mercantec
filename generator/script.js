
function getPassword(){
    const chars = 
    "0123456789QWERTYUIOPÅASDFGHJKLÆØZXCVBNMqwertyuiopåasdfghjklæøzxcvbnm@#$+";
//hvor mange cifre som den skal hente og ord fra Chars linket
    let passwordnummer = 6
    let password = '';

//Laver et for loop med matematik stykke og hiv alle ord i random rækkefølge fra min chars  
    for (let i= 0; i < passwordnummer; i++){ 
        let randomNummer = Math.floor(Math.random()  * chars.length);
        password += chars.substring(randomNummer,randomNummer + 1)
        console.log(randomNummer);
    }
//får html filen til JS fra Lavpassword og giver den en værdi   
    document.getElementById('Lavpassword').value = password;
} 