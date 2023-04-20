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
// Die Schleife wird erst beendet, wenn der Wert von i nicht mehr kleiner als 3 ist.
// Erst wenn die For-schleife False ist, wird der wert 
//__BSP2__
function buildFunctions2() {
    var arr = [];
    for (var i = 0; i < 3; i++) {

        arr.push (
            //3 j gibts
            function(j) {
                return function() {
                    console.log(j)
                    //push wird das resultat des dieser ausführungskontexts pushen beim executen. und beim execut
                }
            }(i))   
    }
    return arr;
}
var fs2 = buildFunctions2();

fs2[0]();
fs2[1]();
fs2[2]();

//__BSP3__
function buildFunctions3() {
    var arr = [];
    for (var i = 0; i < 3; i++) {

        arr.push (
            //3 j gibts
            function(j) {
                return function() {
                    console.log(j)
                    //push wird das resultat des dieser ausführungskontexts pushen beim executen. und beim execut
                }
            }(i))   
    }
    return arr;
}
var fs3 = buildFunctions3();

fs3[0]();
fs3[1]();
fs3[2]();
