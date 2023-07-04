/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const int1 = 3;
const int2 = 5;
if (int1 < int2) {
  console.log(`1) ${int2} è più grande di ${int1}`);
} else if (int1 > int2) {
  console.log(`1) ${int1} è più grande di ${int2}`);
} else {
  console.log(`1) ${int1} è uguale a ${int2}`);
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const num3 = 12;
if (num3 !== 5) {
  console.log("2) not equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const num4 = 20;
if (num4 % 5 === 0) {
  console.log("3) divisibile per 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
if (int1 === 8 || int2 === 8) {
  console.log("4) Uno dei due numeri è uguale a 8.");
} else if (int1 - int2 === 8) {
  console.log("4) La loro sottrazione è uguale a 8.");
} else if (int2 - int1 === 8) {
  console.log("4) La loro sottrazione è uguale a 8.");
} else if (int1 + int2 === 8) {
  console.log("4) La loro addizipone è uguale a 8.");
} else {
  console.log("4) Prova con altri numeri interi.");
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart = 45;
if (totalShoppingCart > 50) {
  console.log(`5) Hai diritto alla spedizione gratuita! Saldo: ${totalShoppingCart}€`);
} else {
  console.log(`5) Saldo: ${totalShoppingCart + 10}€`);
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
if (totalShoppingCart > 50) {
  totalShoppingCart = totalShoppingCart - totalShoppingCart * 0.2;
  console.log(`6) Hai diritto alla spedizione gratuita! Saldo: ${totalShoppingCart}€`);
} else {
  totalShoppingCart = totalShoppingCart - totalShoppingCart * 0.2;
  console.log(`6) Saldo: ${totalShoppingCart + 10}€`);
}

let totalShoppingCartBlackFriday = totalShoppingCart - totalShoppingCart * 0.2;
if (totalShoppingCartBlackFriday > 50) {
  console.log(`6) Hai diritto alla spedizione gratuita! Saldo: ${totalShoppingCartBlackFriday}€`);
} else {
  console.log(`6) Saldo: ${totalShoppingCartBlackFriday + 10}€`);
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
if (int1 >= int2) {
  if (int2 >= num3) {
    console.log(`7) ${int1} è maggiore o uguale a ${int2} che è maggiore o uguale a ${num3}`);
  } else if (int1 >= num3) {
    console.log(`7) ${int1} è maggiore o ouguale a ${num3} che è maggiore o uguale a ${int2}`);
  } else {
    console.log(`7) ${num3} è maggiore o ouguale a ${int1} che è maggiore o uguale a ${int2}`);
  }
} else {
  if (int1 >= num3) {
    console.log(`7) ${int2} è maggiore o uguale a ${int1} che è maggiore o uguale a ${num3}`);
  } else if (int2 >= num3) {
    console.log(`7) ${int2} è maggiore o ouguale a ${num3} che è maggiore o uguale a ${int1}`);
  } else {
    console.log(`7) ${num3} è maggiore o ouguale a ${int2} che è maggiore o uguale a ${int1}`);
  }
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x = int1;
if (typeof x === "number") {
  console.log(`8) l'input ${x} è un numero`);
} else if (x === NaN) {
  console.log(`8) l'input ${x} non è un numero`);
} else {
  console.log(`8) l'input ${x} non è un numero`);
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let y = int1;
if (y % 2 === 0) {
  console.log(`9) ${y} è un numero pari`);
} else {
  console.log(`9) ${y} è un numero dispari`);
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let val = 7;
if (val < 5) {
  console.log("10) Meno di 5");
} else if (val < 10) {
  console.log("10) Meno di 10");
} else {
  console.log("10) Uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

/* SCRIVI QUI LA TUA RISPOSTA */
me.city = "Toronto";
console.log("11) ", me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName;
console.log("12) ", me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.skills[me.skills.length - 1];
console.log("13) ", me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const emptyArray2 = [];
emptyArray2.push(1);
emptyArray2.push(2);
emptyArray2.push(3);
emptyArray2.push(4);
emptyArray2.push(5);
emptyArray2.push(6);
emptyArray2.push(7);
emptyArray2.push(8);
emptyArray2.push(9);
emptyArray2.push(10);
console.log(`14) `, emptyArray2);

const emptyArray = [];
let z = 1;
while (z <= 10) {
  emptyArray.push(z);
  z = z + 1;
}
console.log(`14) `, emptyArray);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
emptyArray2.splice(emptyArray2.length - 1, 1, 100);
console.log(`15) `, emptyArray2);
