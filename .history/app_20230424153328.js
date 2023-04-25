
//Callback-Funktion:
// Eine Funktion die zu einer anderen Funktion gegenben wird, 
// Ich habe dich ausgeführt, und du fühst die funktion für mich aus.

// Wenn eine Funktion aufgerufen wird, wird eine andere Funktion danach ausgeführt
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