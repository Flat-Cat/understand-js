//__IIFE
(function (name) {

    greeting = "Hello!";
    var greeting = "Hello" ;
    console.log (greeting + " " + name );
 
}(window, "John"));

console.log(greeting);