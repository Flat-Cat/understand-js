function cat (greet) {

    return function(name) {
        console.log (greet + " " + name );
    }
}

var sayHi = cat ("Hi,");

sayHi ("Bibi!");


function dog (gender, fur) {
    return function (name) {
        console.log (name + gender)
    }
}
var specialDog = dog ("female") 
specialDog = ("blue")

function urlaub (mitarbeiter) {

    return function ()
}