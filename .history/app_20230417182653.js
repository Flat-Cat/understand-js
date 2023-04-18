//__IIFE
(function (global, name) {

    global.greeting = "Hello!";
    var greeting = "Hello" ;
    console.log (greeting + " " + name );
 
}(window, "John"));

console.log(greeting);

//In dieser Lernlektion geht er es an das es besser wäre global. ... zu schreiben
// da wir dann bewusst eine globale variable benutzen und nicht per zufall.
//doch Hola wird mir nicht angezeigt bei console.log greetings. ob es an einer neueren version von JS handelt?