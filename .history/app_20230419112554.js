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

var specialDog = dog ("Tommy " + "has a nice");

specialDog ("Brown fur");

specialDog();
// Tommy has a nice undefined (Fur gibt es tatsächlich aber hat keinen wert!)
specialDog(name);
// Tommy undefined (Fur gibt es tatsächlich aber hat keinen wert!)


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