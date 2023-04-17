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
//Hier werden Werte kurzzeitig im Speicher abgelegt, aber nach dem Ausführungskontext wieder gelöscht. 
//Diese Werte haben keinen festen Speicherplatz und existieren nur vorübergehend, ohne einen Zweck zu erfüllen. Es tritt dabei auch keine Fehlermeldung auf.
3;
"Im a string"







