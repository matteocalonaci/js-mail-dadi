
// MAIL

// Chiedi all’utente la sua email per poi controllare che sia nella lista di chi può accedere.
// Stampa un messaggio SOLO SE l'utente è in lista.




// -inserisco la mail 
// -creo mail che fanno accedere alla pagina(lista)
// -creo la variabile booleana
// -faccio un for che mi controlla tutte le mail della lista e se trovo la mail allora setto la variabile booleana a true
// -esco dal ciclo e se vedo che la variabile booleana è ancora falsa allora ti scrivo access denied




let emailUtente = prompt("Inserisci la tua email");
console.log("email utente:" + emailUtente);

const emailList = [
    "matteo.calonaci.1994@gmail.com",
    "ugo@gmail.com",
    "giorgione@gmail.com",
];
console.log("email utenti:" + emailList);

let risultato = false

for (i = 0; i < emailList.length; i++) {
    if (emailUtente == emailList[i]) {
        risultato = true
    }
    if (risultato == true) {
        // console.log("Bentornato")
        alert("Bentornato");
    } else {
        // console.log("Per accedere devi registrare la tua email")
        alert("Per accedere devi registrare la tua email");
    }

}



