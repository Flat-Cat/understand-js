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

//__(IIFE) Unmittelbar aufgerufener Funktionsausdruck_________________________________________________________________________________________________________
var greeting = function (name) {
    console.log ("Hello " + name);
}("Maddin");

var greeting = function (name) {
    return "Hii " + name;
}("Soelen");
console.log (greeting);

//__Bsp__
var cat = function (catname, catage) {
    return ("Hi "+ catname + "you are " + catage + " years old, are ya?")
}("Mimi ", 2)

console.log (cat)

(function (dogname, dogfur, dogbark) {
    var greeting = "Hellooo " 
    console.log (greeting + dogname + "you have such a great " + dogfur + "!")
 
}("Lucky " , " Brown " , "Bark!"))









