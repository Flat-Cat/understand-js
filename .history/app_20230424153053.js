

function sayHiLater () {
    var greeting = "Heloo! ";
    setTimeout(function () {
        console.log (greeting);
    }, 3000)
} 

sayHiLater();

/* 
JQuery nutzt Funktionsanweisungen und first-class Funktionen

$("button").click(function() {

});

*/