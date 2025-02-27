//genero un numero random per il computer
let computerRandom = Math.floor(Math.random() * (6) + 1);
//genero un numero random per il giocatore
let userNumber = parseFloat(prompt('Inserisci un numero intero da 1 a 6'));
//creo 3 variabili per controlla che abbia inserito un numero intero da 1 a 6
let notNumber = isNaN(userNumber) === true;
let notRange = userNumber < 1 || userNumber > 6;
let notInteger = Number.isInteger(userNumber) === false;
if ((notNumber || notRange) || notInteger) {
    alert('Il valore inserito non è corretto, partita annullata.');
} else {
    // stampo il nummero dell'utente
    console.log(`Player 1: n.${userNumber}`);
    // stampo il nummero del computer
    console.log(`computer: n.${computerRandom}`);
    //creo un if dove stabilisco il vincitore o se si verifica un pareggio. 
    if (computerRandom > userNumber) {
        console.log('Il computer ha vinto.');
    } else if (computerRandom < userNumber) {
        console.log('Hai vinto.');
    } else
        console.log('Pareggio.');
}