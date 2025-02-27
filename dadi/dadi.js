//genero un numero random per il computer e lo stampo
let computerRandom = Math.floor(Math.random() * (6) + 1);
console.log(`computer: n.${computerRandom}`);
//genero un numero random per il giocatore e lo stampo
let userRandom = Math.floor(Math.random() * (6) + 1);
console.log(`Player 1: n.${userRandom}`);
//creo un if dove stabilisco il vincitore o se si verifica un pareggio. 
 if (computerRandom > userRandom){
    console.log(`Il computer ha vinto.`);
 } else if (computerRandom < userRandom){
    console.log(`Hai vinto.`);
 } else
 console.log(`Pareggio.`);