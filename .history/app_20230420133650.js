function makeGreeting (language) {

    return function (firstname, lastname) {

        if (language === "en") {
            console.log ("H" + firstname + " " +lastname); 
        }
        if (language === "de") {
            console.log ("Hello" + firstname + " " +lastname); 
        }
    }
}