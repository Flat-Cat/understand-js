//__IIFE
(function (global, name) {

    var greeting = "Hello" ;

    global.greeting = "Hello";
    console.log (greeting + " " + name );
 
}(window, "John"));
// Window = Objekt der Globalen Scope darstellt.
console.log(greeting);
// Hier wird "Hola" ausgegeben, weil in unserer HTML-Datei "greet.js" vor "app.js" geladen wird. 
// Der Code aus "greet.js" steht wortwörtlich über dem Code von "app.js".