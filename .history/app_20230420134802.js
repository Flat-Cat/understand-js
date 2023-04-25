function makeGreeting (language) {

    return function (firstname, lastname) {

        if (language === "es") {
            console.log ("Hola" + firstname + " " + lastname + " !"); 
        }
        if (language === "en") {
            console.log ("Hello" + firstname + " " + lastname + " !"); 
        }
    }
}

//Language übergeben wir nicht der anonym funk. mit firstname,lastname
//sondern zur äußeren Funktion und gebe die innere funktion zurück
// alsow ird language in den klammern gefangen sein 
// wenn ich anonym funk. ausführe wird er hoch auf seine scop chain schauen
// auch wenn makegreeting() schon ausgeführt und abgeschlossen wurde und dessen ausführungskontext verschwunden ist, hab ich zu language noch zugriff

var greetEnglish = makeGreeting("en");
var greetSpanish = makeGreeting("es");
// Greetenglish/Spanish führt language aus und gibt die anonym funk. zurück. dann wird beend
// Greetenglish/Spanish füh sind 2 ausführungskontext also 2 versch. plätze im speicher obwohl sie in
// der gleichen umgebung 