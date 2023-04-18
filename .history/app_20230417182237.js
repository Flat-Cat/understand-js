//__IIFE
(function (global, name) {

    global.greeting = "Hello!",
    var greeting = "Hello" ;
    console.log (greeting + " " + name );
 
}(window, "John"));

console.log(greeting);

