function cat (greet) {

    return function(name) {
        console.log (greet + " " + name );
    }
}

var sayHi = cat ("Hi,");

sayHi ("Bibi!");

//_BSP1______________________________________________________________
function dog (gender, fur) {
    return function (name) {
        console.log (name + gender + fur)
    }
}
var specialDog = dog ("female") 
specialDog = ("w", "blue")

//_BSP2______________________________________________________________
/*
function urlaub (datum) {

    return function (mitarbeiter, genehmigt) {
        console.log (mitarbeiter + datum + genehmigt);

    }
}

var urlaubsAntrag = urlaub ("Fridolin weise");

urlaubsantrag ("12.04.3023" , true)
+7