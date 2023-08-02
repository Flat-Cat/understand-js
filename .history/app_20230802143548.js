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

for (var prop in mini) {

    if (mini.hasOwnProperty(prop)) {
        console.log(prop + " <-- Eigenschaft / Wert der eigenschaft--> " + mini[prop]);
    }
    console.log( "Function getFullName: " + mini.getFullName()); 
}
// [] = Bracket Notation
// Prop's Datentyp ist String da der Key als Zeichenkette in JS Interpretiert wird