var person = {
    firstname: "Domi",
    lastname: "Bebi",

    gerFullName: function() {
        
        var fullname = this.firstname + " " + this.lastname;
        return fullname;

    }
}

var logName = function (lang1, lang2) {
    
    console.log ("Logged: " + this.getFullName());
}

var logPersonName = logName.bind
//  Nutzung der Funktion wie ein Objekt (ohne es aufzurufen) mit bind 
logName();