var person = {
    firstname: "Dominik",
    lastname: "Schäfer",

    getFullName: function() {
        
        var fullname = this.firstname + " " + this.lastname;
        return fullname;

    }
}

var logName = function (lang1, lang2) {
    
    console.log ("Logged: " + this.getFullName());
}

var logPersonName = logName.bind(person);
// LogName.bind: Nutzung des Funktions-Objekts (ohne es aufzurufen) mit bind.
// BIND: Kann Objekte übergeben (z.B. person).
// Person fungiert nun wie eine this-Variable: sie referenziert den benötigten Scope.
// Bind kopiert das Objekt, auf das referenziert wurde.

logPersonName();