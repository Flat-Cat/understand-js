// Funktionsanweisung: Greet wird im Ausführungskontext gleich im Speicher angelegt.
function greet(name) {
    console.log("Hello " + name);   
}
greet("Fifi");

//FunktionsAUSDRUCK: Wird nicht gleich im speicher angelegt In der ersten Phase des Ausführungskontext, 
//sondern Parallel erst bei der Ausführung des codes.
var greetFunc = function(name) {
    console.log("Hello " + name);
};
greetFunc("Minski");
// ()
var greeting = function (name) {
    console.log ("Hello " + name);
}("Maddin");



















