
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
//Der Prototyp des sascha-Objekts wird zum Person-Objekt. Das bedeutet, dass Sascha nun von Person erbt. 
//Falls es eine Eigenschaft gibt, die wir in Sascha benötigen, aber dort nicht vorhanden ist, sucht die Engine nun im Person-Objekt(Prototyp) danach.

var fifi = {
    firstName : "Fifi"
}

fifi.__proto__ = person;
console.log(fifi.getFullName());