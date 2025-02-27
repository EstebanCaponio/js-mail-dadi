// - creazione lista array per email;
let list = [
    'mario@gmail.com',
    'luigi@gmail.com',
    'andrea@gmail.com',
    'luca@gmail.com',
    'giulio@gmail.com'
];

//chiedi all'utente mail;
let mailUser = prompt('Inserisci la tua mail');
//creo valore booleano
let found = false;
//creazione ciclo for che si deve interrompere quando la lista degli invitati viene esaminata tutta oppure quando la mail viene trovata;
for (let i = 0; i < list.length; i++) {
    //SE l'email è nella lista interrompi il cico;
    if (mailUser === list[i]) {
        found = true;
        break
    }
}
//se la mail è stata trovata stampa un messaggio positivo altrimenti stampane uno negativo.
if(found===true){
    console.log('La tua mail è presente nella lista degli invitati.');
} else
console.log('La tua mail non è nella lista degli invitati.');