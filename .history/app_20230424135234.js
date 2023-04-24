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

var greetEnglish = makeGreeting("en");
var greetSpanish = makeGreeting("es");

greetEnglish ("Fifi"   , "Müller");
greetSpanish ("Alfonso", "Bronzo");


//Warum erwartet greetenglish/spanish die Argumente von firstname und lastname?? warum kann ich eine funktion zurück geben 
// makegreeting hat immer zugriff zur anonym.funk. durch die language param.