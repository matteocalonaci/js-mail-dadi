
// DADI

// Genera due numeri random tra 1 e 6(inclusi).

// Uno per il giocatore e uno per il computer.

// Stabilisci il vincitore, in base a chi ha ottenuto il punteggio più alto.

// Creiamo un array con il numero delle faccie di un dado
const dadiUtente = [
    1, 2, 3, 4, 5, 6
];

const dadiComputer = [
    1, 2, 3, 4, 5, 6
];



//Uso un ciclo per stampare ogni faccia del dado
console.log(dadiUtente);

// i < 6 oppure i < studenti.length
for (let i = 0; i < dadiUtente.length; i++) {

    const dadiUtenteAttuale = dadiUtente[i];
    document.getElementById("dadiUtente").innerHTML += `<li>${dadiUtenteAttuale}</li>`;
    console.log(dadiUtenteAttuale);
}

let casualeUtente = Math.floor(Math.random() * 6)
let text = `Numero generato:`;
console.log(`Numero generato:`, dadiUtente[casualeUtente]);
document.getElementById("numGen").innerHTML += `<div>${text} ${casualeUtente}</div>`;

//Uso un ciclo per stampare ogni faccia del dado
console.log(dadiComputer);

// i < 6 oppure i < studenti.length
for (let i = 0; i < dadiComputer.length; i++) {

    const dadiComputetAttuale = dadiComputer[i];
    document.getElementById("dadiComputer").innerHTML += `<li>${dadiComputetAttuale}</li>`;
    console.log(dadiComputetAttuale);
}

let casualeCpu = Math.floor(Math.random() * 6)
console.log(`Numero generato:`, dadiComputer[casualeCpu]);
document.getElementById("numGenCpu").innerHTML += `<div>${text} ${casualeCpu}</div>`;


