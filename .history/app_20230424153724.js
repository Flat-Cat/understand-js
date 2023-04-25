
//Callback-Funktion:
// Nachdem eine Funktion fertig aufgerufen wurde, ruft sie danach eine andere Funktion auf. "Ruft zurück" 

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

    callback(); // der "Rückruf", es führt die Funktion aus die ich ihm gegeben habe
}

tellMeWhenDone(function() {
    console.log("I am done!")
});


tellMeWhenDone(function() {
    alert("I am done!")
});