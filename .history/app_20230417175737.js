//Funktionsanweisung_________________________________________________________________________________________________________
//Die Greet-Funktion wird im Ausführungskontext direkt im Speicher angelegt.
function greet(name) {
    console.log("Hello " + name);   
}
greet("Fifi");

//Funktionsausdruck_________________________________________________________________________________________________________
//Im Gegensatz zur Funktionsanweisung wird der Funktionsausdruck nicht direkt im Speicher angelegt. 
//Erst bei der Ausführung des Codes in der zweiten Phase des Ausführungskontexts wird er parallel erstellt.
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

//__Bsp_1
var cat = function (catname, catage) {
    return ("Hi "+ catname + "!" + " you are " + catage + " years old, are ya?")
}("Mimi", 2)

console.log (cat)

//__Bsp_2
(function (dogname, dogfur, dogbark) {
    var greeting = "Hello " 
    console.log (greeting + dogname + "! " + "You have such a great" + dogfur + "fur! " + "Thank you " + dogbark)
 
}("Lucky" , " brown " , "Bark!"))

//__Bsp_3 
// Hier sehen wir werte die zwar kurz abgespeichert aber nach dem ausführungskontext wieder gelöscht werden. 
// Es sind werte die da sind, aber die nicht wirklich einen festen Speicherplatz besitzen. Sie sind nur da, ohne Sinn. (Es gibt auch keine Fehlermeldung)
3;
"Im a string"







