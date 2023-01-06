import ansatte from "./ansatte.js";

const inputTemplate = ansatte.map(ansat => `
    <div>
        <div class="container-content">
            <h2 class="container-content-txt">Id: ${ansat.id}</h2>
            <h2 class="container-content-txt">Navn: ${ansat.fornavn} ${ansat.efternavn}</h2>
            <h2 class="container-content-txt">Stilling: ${ansat.stilling}</h2>
            <h2 class="container-content-txt">Email: ${ansat.email}</h2>
            <h2 class="container-content-txt">Kode: ${ansat.kode.slice(0, -6) + 'XXXXXX'}</h2>
            <h2 class="container-content-txt">Rettigheder: ${ansat.rettigheder}</h2>
            <h2 class="container-content-txt">Ip: ${ansat.network.ip}</h2>
            <h2 class="container-content-txt">Subnet: ${ansat.network.subnet}</h2>
        </div> 
    </div>
    `
);
const inputContent = document.querySelector('.root_script');
inputContent.insertAdjacentHTML('beforebegin', inputTemplate);

console.log(ansatte)


