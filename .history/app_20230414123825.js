function greet(firstname, lastname, language) {
    language = language || "en";

    if (language === "en") {
        console.log ("Hello" , firstname , lastname , "!");
    }

    if (language === "es") {
        console.log("Hola", firstname, lastname, "!");
    }
}

function greetEnglish (firstname, lastname) {
    greet (firstname, lastname, "en");
}

function greetSpanish (firstname, lastname) {
    greet (firstname, lastname, "es");
}
//Hier haben wir die Argumente der Paraneter firstname und Lastname. Der dritte Wert ist bereits in seiner Funktion enthalten.
greetEnglish ("John", "Doe");
greetSpanish ("John", "Doe");