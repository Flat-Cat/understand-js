//__IIFE
(function (name) {

    var greeting = "Hello" ;
    console.log (greeting + " " + name );
 
}("John"));

console.log(greeting);
//Hier wird Hola ausgegeben. Wieso? Da in unserer Html Datei "greet.js" VOR "app.js" steht. 
//Kann man sich genauso vorstellen wie 