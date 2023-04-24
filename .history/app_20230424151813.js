

function makeGreeting (language) {
// Function Factory = "Make" => Produziert neue Funktionen
    return function (firstname, lastname) {

        if (language === "es") {
            console.log ("Hola " + firstname + " " + lastname + "!"); 
        }
        if (language === "en") {
            console.log ("Hello " + firstname + " " + lastname + "!"); 
        }
        if (language == "de") {
            console.log ("Hallo " + firstname + " " + lastname + "!");
        }
    }
}

var greetEnglish = makeGreeting("en");
var greetSpanish = makeGreeting("es");
var greetGerman = makeGreeting ("de");
// Hier erhält die anonyme Funktion eine Variable, die auf sich selbst verweist (greetEnglish).
greetEnglish ("Fifi"   , "Müller");
greetSpanish ("Alfonso", "Bronzo");
greetGerman ("Conni" , "Fleder");
// Ausführung der 3 neuen Ausführungskontexte


/*
function sayHiLater () {
    var greeting = "Heloo! ";
    setTimeout(function () {
        console.log (greeting);
    }, 3000)
} 

sayHiLater();
*/