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
// auch wenn makegreeting() schon ausgeführt und abgeschlossen wurde