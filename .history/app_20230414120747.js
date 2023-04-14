function greet(firstname, lastname, language) {
    language = language || "en";

    if (language === "en") {
        console.log ("hello" , firstname , " " , lastname , "!");
    }

    if (language === "es") {
        console.log("Hola", firstname, " ", lastname, "!");
    }
}