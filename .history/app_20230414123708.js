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
// Hier passen wir einfach die Argumente dazu. der Dritte wert steht schon in 
greetEnglish ("John", "Doe");
greetSpanish ("John", "Doe");