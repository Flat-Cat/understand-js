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
// da der Wert erst am Ende der for-Schleife mit return zurückgegeben wird. 
// Die Schleife wird erst beendet, wenn der Wert von i nicht mehr kleiner als 3 ist.

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
        )
    }

    return arr;
}
var fs2 = buildFunctions2();

fs[0]();
fs[1]();
fs[2]();
