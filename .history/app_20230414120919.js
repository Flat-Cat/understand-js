function greet(firstname, lastname, language) {
    language = language || "en";

    if (language === "en") {
        console.log ("Hello" , firstname , " " , lastname , "!");
    }

    if (language === "es") {
        console.log("Hola", firstname, " ", lastname, "!");
    }
}

greet ("john", "doe", "en");

greet ("john", "doe", "es");