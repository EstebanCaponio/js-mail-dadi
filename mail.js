// - creazione lista array per email;
let list = [
    'mario@gmail.com',
    'luigi@gmail.com',
    'andrea@gmail.com',
    'luca@gmail.com',
    'giulio@gmail.com'
];
//creazione ciclo for che si deve interrompere quando la lista degli invitati è finita;
for (let i = 0; i < list.length; i++) {
    //chiedi all'utente mail e nome con 2 prompt;
    let nameUser = prompt('Inserisci il tuo nome');
    let mailUser = prompt('Inserisci la tua mail');
    //SE l'email è nella lista;
    //stampa messaggio appropriato.
    if (mailUser === list[i]) {
        console.log(`Ciao ${nameUser}, la tua mail: ${mailUser} è nella lista della festa.`);
    }
    //stampa messaggio per mail non nella lista
    //togli un iterazione
    else {
        console.log(`Ciao ${nameUser}, la tua mail: ${mailUser} NON è sulla lista, non sei invitato.`);
        i = i - 1;
    }
}
//a fine ciclo stampa che gli invitati 
console.log('Tutti gli invitati si sono registrati.')

//    - SE l'email è nella lista;
//       - stampa messaggio appropriato.
//       - test: stampa mail
//    - altrimenti:
//       - stampa messaggio per mail non nella lista
//       - togli un iterazione
//       - test: stampa mail

// - a fine ciclo stampa che gli invitati 