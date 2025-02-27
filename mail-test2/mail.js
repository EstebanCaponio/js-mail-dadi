// test-2
// - creazione lista array per email;
let list = [
    'mario@gmail.com',
    'luigi@gmail.com',
    'andrea@gmail.com',
    'luca@gmail.com',
    'giulio@gmail.com'
];
//creazione ciclo for che si deve interrompere quando l'utente inserisce una mail valida;
for (let i = 0; i < 1; i++) {
    //chiedi all'utente mail e nome con 2 prompt;
    let mailUser = prompt('Inserisci la tua mail:');
    //SE l'email non è nella lista;
    // crea un ciclo loop chiedendo di riprovare la mail finchè non è valida.
    if (mailUser !== list[i]) {
        for (let i = 0; i < 1; i++) {
            let retry = prompt('Mail non valida, RIPROVA:');
            if (retry !== list[i]){
            i = i - 1;
            }
        }
    }
}
//a fine ciclo stampa messaggio per invitato
console.log('La tua mail è presente nella lista degli invitati.')

//    - SE l'email è nella lista;
//       - stampa messaggio appropriato.
//       - test: stampa mail
//    - altrimenti:
//       - stampa messaggio per mail non nella lista
//       - togli un iterazione
//       - test: stampa mail

// - a fine ciclo stampa che gli invitati 