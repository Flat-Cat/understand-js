//__IIFE
(function (global, name) {

    global.greeting = "Hello!";
    var greeting = "Hello" ;
    console.log (greeting + " " + name );
 
}(window, "John"));

console.log(greeting);

//In dieser Lernlektion geht er es an das es besser wäre global.