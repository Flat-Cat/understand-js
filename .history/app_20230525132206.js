
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
 
sascha