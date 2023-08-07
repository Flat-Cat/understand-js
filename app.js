function a() {
    console.log(this);
//=> Window http://127.0.0.1:5500/index.html
    this.newvariable = 'hello';
}


var b = function() {
    console.log(this);   
}

a();
//=> hello
console.log(newvariable); // not good!

b();
//=> Window http://127.0.0.1:5500/index.html

var c = {
    name: 'The c object',
    log: function() {

        var self = this;
        
        self.name = 'Updated c object';
        console.log(self);
// Object { name: "Updated c object", log: log()}
        
        var setname = function(newname) {
            self.name = newname;   
        }
        setname('Updated again! The c object');
        console.log(self);
//Object { name: "Updated again! The c object", log: log()}
    }
}
c.log();

/* ausgabe:

Window http://127.0.0.1:5500/index.html
hello 
Window http://127.0.0.1:5500/index.html

Object { name: "Updated c object", log: log()
}
Object { name: "Updated again! The c object", log: log() 
}

/** ___________________________________self = this___________________________________________________________
 * self = this; speichert eine Referenz auf das aktuelle Objekt in der Variablen self.
 * Dadurch behält man den Zugriff auf das ursprüngliche Objekt, selbst wenn man innerhalb verschachtelter Funktionen ist.
 * Das verhindert, dass this in verschachtelten Funktionen auf das globale Objekt(Window) verweist und hilft, unerwartete 
 * Probleme zu vermeiden, die durch den Kontextverlust entstehen können.
 */