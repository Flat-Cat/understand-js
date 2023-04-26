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
}.apply(person, ["En ", "Es "])

var logPersonName = logName.bind(person);
// LogName.bind: Nutzung des Funktions-Objekts (ohne es aufzurufen) mit bind.
// BIND: Kann Objekte übergeben (z.B. person).
// Person fungiert nun wie eine this-Variable: sie referenziert den benötigten Scope.
// Bind kopiert das Objekt, auf das referenziert wurde.

logPersonName("En ");

logName.call(person, "En ", "Es");
//In call gibst du erst die this-variable ein (person)
// call ruft die Funktion auf und gibt die Parameter mit.
logName.apply(person, ["En", "Es "])
// Apply ist genau dasselbe wie Call, nur möchte er die Parameter in einem Array erhalten.