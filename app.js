var person = {
    firstName: "Default",
    secondName: "Default",
    lastName: "Default",
    getFullName: function () {
        return this.firstName + " " + this.lastName;
    }
}

var mini = {
    firstName: "Mini",
    lastName: "Müller"
}

mini.__proto__ = person;

// FOR IN:  Eine Schleife über jede Eigenschaft im Objekt. Prop = Aktuelles Element
// KEY:     Der Name des Namen-wert Paares. "FirstName & LastName"

for (var prop in mini) {

    if (mini.hasOwnProperty(prop)) {
        console.log(prop + " <-- Eigenschaft / Wert der eigenschaft--> " + mini[prop]);
    }
    console.log( "Function getFullName: " + mini.getFullName()); 
}
// [] Bracket Notation
// Prop's Datentyp ist String da der Key als Zeichenkette in JS Interpretiert wird


var jane = {
    address: "Banana Street 111",
    getFormalFullName: function () {
        return this.lastName + ", " + this.firstName;
    }
}

var jim = {
    getFirstName: function () {
        return firstName;
    }
}

_.extend (mini, jane, jim);

// mini wird nun mit den Eigenschaften von Jane und Jim erweitert (_.extend(target, source1, source2, ...);) 
// ! Dies ist eine Funktion von Underscore. JavaScript besitzt schon eine interne Funktion die dasselbe tut: Object.assign()
// ! Das würde so aussehen: Object.assign(mini, jane, jim);

console.log(mini);

