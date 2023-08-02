var person = {
    firstName: "Default",
    secondName: "Default",
    getFullName: function () {
        return this.firstName + " " + this.lastName;
    }
}

var mini = {
    firstName: "Mini",
    lastName: "Müller"
}

mini.__proto__ = person;

for (var prop in mini) {

    console.log( prop + "" mini(prop)); 
}


// FOR IN:  Eine Schleife über jede Eigenschaft im Objekt. Prop = Aktuelles Element
// KEY:     Der Name des Namen-wert Paares. "FirstName & LastName"


// [] = Bracket Notation
// Prop's Datentyp ist String da der Key als Zeichenkette in JS Interpretiert wird