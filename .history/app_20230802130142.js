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

//--FOR-IN-Schleife--: Eine Schleife über jede Eigenschaft im Objekt. Prop = Aktuelles Element

for (var prop in mini) {
    if (mini.hasOwnProperty(prop)) {
        console.log(prop + " <- Eigenschaft / minis wert-> " + mini[prop]);
    }
}
// Wenn "mini" diese Eigenschaft besitzt, gebe sie aus. Die Funktion wird nicht angezeigt, da diese Eigenschaft dem Objekt "person" gehört.

//_Extend______________________________________________________________________________________________________________
// var jane = {
//     adress: "Straßennamen 123",

//     getFormalFullName: function () {
//         return this.lastName + ", " + this.lastName;
//     }
// }
// var jim = {
//     getFirstName: function () {
//         return firstname;
//     }
// }
// //Extend
// _.extend(mini, jane, jim)
// console.log(mini)

// /* __Proto__:
//     Das "proto" ist eine interne Eigenschaft in JavaScript-Objekten, die auf den Prototyp eines Objekts verweist.
//     Der Prototyp ist wiederum ein anderes Objekt, von dem das aktuelle Objekt erbt. Es ermöglicht die Vererbung von
//     Eigenschaften und Methoden von einem Objekt zum anderen. Allerdings wird die direkte Verwendung von "proto" nicht empfohlen,
//     da sie als veraltet gilt.
//     Stattdessen sollte die "Object.getPrototypeOf()" Methode verwendet werden, um auf den Prototyp eines Objekts zuzugreifen.
// */