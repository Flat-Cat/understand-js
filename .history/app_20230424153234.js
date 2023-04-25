
//Callback-Funktion:
// Eine Funktion die zu einer anderen Funktion gegen
// Ich habe dich ausgeführt, und du fühst die funktion für mich aus.
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