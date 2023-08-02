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

//--FOR-IN-: Eine Schleife über jede Eigenschaft im Objekt. Prop = Aktuelles Element
//

for (var prop in mini) {
    if (mini.hasOwnProperty(prop)) {
        console.log(prop + " <-- Eigenschaft / Wert der eigenschaft--> " + mini[prop]);
    }
}
