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

// tue das NIEMALS!! Das hier dient nur zur demonstration.
mini.__proto__ = person; 



/** __Proto__:
 * 
 * 
 */