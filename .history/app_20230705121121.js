var person = {
    firstName: "Default",
    lastName: "Default",
    getFullName: function() {
        return this.firstName + " " + this.lastName;
    }
}

var mini = {
    firstName: "Mini", 
    lastName: "Müller"
}

// tue das NIE! Das hier dient nur zur demonstration.
mini.__proto__ = person; 

//--FOR-IN--: eine schleife über jede eigenschaft im Objekt. Prop = Aktuelles Element

for ( var prop in mini) {
    if (mini.hasOwnProperty(prop))
    console.log (prop + ":: " + mini[prop]);

}
//  Wenn Mini seine diese Eigenschaft hat, Gebe sie aus. Demensprechend wird die Funktion nicht in der Konsole angezeigt, Da diese Eigenschaft dem Objekt Person gehört. 



/* __Proto__:

 * Das "proto" ist eine interne Eigenschaft in JavaScript-Objekten, die auf den Prototyp eines Objekts verweist. 
 * Der Prototyp ist wiederum ein anderes Objekt, von dem das aktuelle Objekt erbt. Es ermöglicht die Vererbung von 
 * Eigenschaften und Methoden von einem Objekt zum anderen. Allerdings wird die direkte Verwendung von "proto" nicht empfohlen, 
 * da sie als veraltet gilt. 
 * 
 * Stattdessen sollte die "Object.getPrototypeOf()"-Methode verwendet werden, um auf den Prototyp eines Objekts zuzugreifen.
 */