var person = {
    firstname: "Domi",
    lastname: "Bebi",

    getFullName: function() {
        
        var fullname = this.firstname + " " + this.lastname;
        return fullname;

    }
}

var logName = function (lang1, lang2) {
    
    console.log ("Logged: " + this.getFullName());
}

var logPersonName = logName.bind(person);
// logName.bind: Nutzung des Funktions-Objekt (ohne es aufzurufen) mit bind
// BIND: Kann Objekte übergeben (person). Es ist wie eine this-variable:
logPersonName();