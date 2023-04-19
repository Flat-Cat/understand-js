/*
function cat (greet) {

    return function(name) {
        console.log (greet + " " + name );
    }
}

var sayHi = cat ("Hi,");

sayHi ("Bibi!");
*/
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
// Tommy has a nice undefined (Fur gibt es tatsächlich aber hat keinen wert!) 

//_3_
specialDog(name);
// Tommy has a nice (leer. Logisch da die variable in unserer Scope chain erreichbar ist aber nicht mit einem wert gefüllt wurde)

//_4_
specialdog(fur)
// error: specialdog is not defined.(Logisch da es nicht in unserer Scrope-Chain erreichbar ist)
//In 2 erkennt er eine Variable, kennt aber dessen name nicht. (JS Engine besitzt die möglichkeit child und parent klasse zu referenzieren, auch wenn der code schon fertig ausgeführt wurde)
//_BSP2______________________________________________________________
/*
function urlaub (datum) {

    return function (mitarbeiter, genehmigt) {
        console.log (mitarbeiter + datum + genehmigt);

    }
}

var urlaubsAntrag = urlaub ("Fridolin weise");

urlaubsantrag ("12.04.3023" , true)
*/