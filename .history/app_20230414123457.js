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
function greetEnglish (firstname, lastname) {
    greet (firstname, lastname, "en");
}
greet ("John", "doe", "en");
greet ("John", "doe", "es");