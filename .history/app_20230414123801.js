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
//Hier senden wir einfach die Argumente an. Der dritte Wert ist bereits in seiner Funktion enthalten.
greetEnglish ("John", "Doe");
greetSpanish ("John", "Doe");