
function cat (greet) {

    return function(name) {
        console.log (greet + " " + name );
    }
}

var sayHi = cat ("Hi,");

sayHi ("Bibi!");

//_BSP1______________________________________________________________
function dog (name) {

    return function(fur) {
        console.log (name + " " + fur );
    }
}
//_0_
var specialDog = dog ("Tommy " + "has a nice");

//_1_
specialDog ("Brown fur");

//_2_
specialDog();
// Tommy has a nice undefined fur (Es wird ein Wert erwartet für den 2. Parameter "fur")

//_3_
specialDog(name);
// Tommy has a nice fur (leer. Logisch, da "name" bereits einen Wert bekommen hat: "Tommy")

//_4_
specialdog(fur)
// error: specialdog is not defined (da es nicht in unserer Scope-Chain erreichbar ist)
// Die JS-Engine hat die Möglichkeit, das Kind- auf Elternklassen verweisen, auch wenn der Code bereits ausgeführt und beendet wurde.
