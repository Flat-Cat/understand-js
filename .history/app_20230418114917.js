//__IIFE
(function (name) {

    var greeting = "Hello" ;
    console.log (greeting + " " + name );
 
}("John"));

console.log(greeting);
Hier wird "Hola" ausgegeben, weil in unserer HTML-Datei "greet.js" vor "app.js" geladen wird. Der Code von "greet.js" steht wortwörtlich über dem Code von "app.js".