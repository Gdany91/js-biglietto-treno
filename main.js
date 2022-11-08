/* Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.BONUS possibili:

    elaborazione dell’output come detto, più articolata del semplice prezzo;
    interfaccia un pò eleaorata con CSS. */

    const distanza = parseInt(prompt("quanti chilometri vuoi percorrere?"));

    const anni = parseInt(prompt('qual è la tua età?'));

    let prezzo = 2 * distanza;

    

    if (anni < 18) {
        
        prezzo -= prezzo * 0.2;
         document.getElementById("ticket").innerHTML= "il tuo biglietto costa " + prezzo + "€" ;
    }

    if (anni > 64) {
        
        prezzo -= prezzo * 0.4;
        document.getElementById("ticket").innerHTML= "il tuo biglietto costa " + prezzo + "€" ;
    }