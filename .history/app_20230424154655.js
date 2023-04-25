
//Callback-Funktion:
// Nachdem eine Funktion erfolgreich aufgerufen wurde, ruft sie im Anschluss eine weitere Funktion auf. Dies nennt man auch "Callback".

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

function tellMeWhenDone (callback) {

    var a = 1000; //some work
    var b = 2000; //some work

    callback(); // es führt die Funktion aus die ich ihm gegeben habe
}
// Callback-Funktion
tellMeWhenDone(function() {
    console.log("I am done!")
});

// Callback-Funktion
tellMeWhenDone(function() {
    console.log("All done...")
});