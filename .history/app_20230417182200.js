//__IIFE
(function (global, name) {

    var greeting = "Hello" ;
    console.log (greeting + " " + name );
 
}(window, "John"));

console.log(greeting);

