function makeGreeting (language) {

    return function (firstname, lastname) {

        if (language === "es") {
            console.log ("Hola" + firstname + " " + lastname + " !"); 
        }
        if (language === "en") {
            console.log ("Hello" + firstname + " " + lastname + " !"); 
        }
    }
}

//Language übergeben wir nicht der anonym funk. mit firstname,lastname
//sondern anpnym,