
function cat (greet) {

    return function(name) {
        console.log (greet + " " + name );
    }
}

var sayHi = cat ("Hi,");

sayHi ("Bibi!");

//_BSP______________________________________________________________
function dog (name) {

    return function(fur) {
        console.log (name + " " + fur );
    }
}
//_var____________
var specialDog = dog ("Tommy " + "has a nice");

//_1____________
specialDog ("Brown fur");

//_2____________
specialDog();
// Tommy has a nice undefined (Es wird ein Wert erwartet für den 2. Parameter "fur")

//_3____________
specialDog(name);
// Tommy has a nice (leer. Logisch, da "name" bereits einen Wert bekommen hat: "Tommy")

//_4____________
specialDog(fur)
// error: fur is not defined (Variable ist nicht in der Scope-Chain erreichbar)
// Die JS-Engine hat die Möglichkeit, das Kind- auf Elternklassen verweisen, auch wenn der Code bereits ausgeführt und beendet wurde.
