
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

// Niemals "__proto__ " verändern! Hier wird es nur zum Demonstrieren genutzt. Da es ist Anwendung verlangsamen kann.
 
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
