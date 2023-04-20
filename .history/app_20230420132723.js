function buildFunctions() {
    var arr = [];
// free var 
    for (var i = 0; i < 3; i++) {
     
        arr.push (
            function() {
                console.log(i);
// Console.log wird hier nicht aufgerufen.
            }
        )
    }

    return arr;
}
var fs = buildFunctions();

fs[0]();
fs[1]();
fs[2]();
// => 3
// Erst wenn die For-schleife False ist (i ist nicht mehr < 3), wird die schleife verlassen und der nächste befehl durchgeführt (return arr)

//__BSP2__
function buildFunctions2() {
    var arr = [];
    for (var i = 0; i < 3; i++) {

        arr.push (
            //3 j gibts
            function(j) {
                return function() {
                    console.log(j)
                //Hier wird i J gespeichert und zwischendurch ausgegeben. Somit erschaffe
                }
            }(i))   
    }
    return arr;
}
var fs2 = buildFunctions2();

fs2[0]();
fs2[1]();
fs2[2]();
