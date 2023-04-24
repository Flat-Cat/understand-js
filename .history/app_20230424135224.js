function makeGreeting (language) {

    return function (firstname, lastname) {

        if (language === "es") {
            console.log ("Hola " + firstname + " " + lastname + "!"); 
        }
        if (language === "en") {
            console.log ("Hello " + firstname + " " + lastname + "!"); 
        }
    }
}

// 2 Funk.Objekte. 2 Ausführungskontexte, da die anonym. Funk 2 mal aufgerufen wird! 
var greetEnglish = makeGreeting("en");
var greetSpanish = makeGreeting("es");
// Greetenglish/Spanish führt language aus und gibt die anonym funk. zurück. dann wird beend
// Greetenglish/Spanish füh sind 2 ausführungskontext also 2 versch. plätze im speicher obwohl sie in
// der gleichen lexikalischen umgebung (makegreeting) erstellt wurden. während dem erstellen neue ausführungskontexts
// denk dran () ist das ausführung einer funk

greetEnglish ("Fifi"   , "Müller");
greetSpanish ("Alfonso", "Bronzo");


//Warum erwartet greetenglish/spanish die Argumente von firstname und lastname?? warum kann ich eine funktion zurück geben 
// makegreeting hat immer zugriff zur anonym.funk. durch die language param.