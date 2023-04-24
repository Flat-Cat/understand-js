function makeGreeting (language) {
// Function Factory
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

greetEnglish ("Fifi"   , "Müller");
greetSpanish ("Alfonso", "Bronzo");
greetGerman ("Conni" , "Fleder");