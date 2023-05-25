
var person = {
    firstName: "Default",
    lastName: "Default",
    getFullName: function() {
        return this.firstName + " " + this.lastName;
    }
}

var sascha = {
    firstName: "Sascha",
    lastName: "Bärtiger"
}

//__Niemals das machen! Nur zum Demonstrieren! Da es ist Anwendung verlangsamern kann.
// Da moderne Browsers wege bieten direkt auf den Prototypen zuzugreifen. 
 
sascha.__proto__ = person;
console.log(sascha.getFullName());

console.log (sascha.firstName)
// Der Prototyp des sascha-Objekts wird zum Person-Objekt = Sascha erbt nun von Person
// = Falls es eine eigenschaft, die wir brauchen, nicht gibt in sascha, wird die Engine nun bei Person schauen. 
// This referenziert auf den Prototypen des Objekts
// Falls die Eigentschaft im Objekt (sascha) schon vorhanden ist, geht die engine 