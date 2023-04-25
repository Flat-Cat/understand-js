
//Callback-Funktion:
// Nachdem eine Funktion fertig aufgerufen wurde, ruft sie danach eine andere Funktion auf. 

function sayHiLater () {
    var greeting = "Heloo! ";
    setTimeout(function () {
        console.log (greeting);
    }, 3000)
} 

sayHiLater();

/* JQuery nutzt Funktionsanweisungen und first-class Funktionen

$("button").click(function() {
});

*/