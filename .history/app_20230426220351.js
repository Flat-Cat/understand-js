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
    console.log("Arguments: " + lang1 + lang2);
    console.log("______________________________")
}

var logPersonName = logName.bind(person);
logPersonName("En ");

// LogName.bind: Nutzung des Funktions-Objekts (ohne es aufzurufen) mit bind.
// BIND: Kann Objekte übergeben (z.B. person).
// Person fungiert nun wie eine this-Variable: sie referenziert den benötigten Scope.
// Bind kopiert das Objekt, auf das referenziert wurde.


logName.call(person, "En ", "Es");
// Call ruft die Funktion auf und gibt Parameter mit.
logName.apply(person, ["En ", "Es "]);
// Apply ist genau dasselbe wie call, nur möchte er die Parameter in einem Array erhalten.

(function (lang1, lang2) {
    
    console.log ("Logged: " + this.getFullName());
    console.log("Arguments: " + lang1 + lang2);
    console.log("______________________________");
}).apply(person, ["Fr ", "De "]);

// Methoden ausleihen_______________________________________________________________________________________________
var person2 = {
    firstname: "Peter",
    lastname: "Lustig",
}

console.log(person.getFullName.apply(person2));

