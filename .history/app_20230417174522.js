// Funktionsanweisung__________________________________________________________________________________________________________________________________
//Greet wird im Ausführungskontext gleich im Speicher angelegt.
function greet(name) {
    console.log("Hello " + name);   
}
greet("Fifi");

//__FunktionsAUSDRUCK__________________________________________________________________________________________________________________________________
//Wird nicht gleich im speicher angelegt In der ersten Phase des Ausführungskontext, 
//sondern Parallel erst bei der Ausführung des codes.
var greetFunc = function(name) {
    console.log("Hello " + name);
};
greetFunc("Minski");

// (IIFE) Unmittelbar aufgerufener Funktionsausdruck_________________________________________________________________________________________________________
var greeting = function (name) {
    console.log ("Hello " + name);
}("Maddin");

var greeting = function (name) {
    return "Hii " + name;
}("Soelen");
console.log (greeting);

var cat = function (catname, catage) {
    return ("Hi "+ catname + "you are" + catage + "old, are ya?")
}("mimi ", 22)

console.log (cat)










