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
// Die For-Schleife wird solange ausgeführt, solange i kleiner als 3 ist. Sobald i den Wert 3 erreicht hat, 
// wird die Schleife verlassen und der nächste Befehl ausgeführt, der arr[] zurückgibt.

//__BSP2__
function buildFunctions2() {
    var arr = [];
    for (var i = 0; i < 3; i++) {

        arr.push (
            //3 j gibts
            function(j) {
                return function() {
                    console.log(j)
              // In der nächsten Zeile wird der Wert von i in j gespeichert und zwischendurch ausgegeben. 
              //Dies führt jedoch nicht dazu, dass bei jedem Rückgabewert ein neuer Ausführungskontext erstellt wird. Stattdessen wird der gleiche Kontext beibehalten, und die Schleife wird erneut durchlaufen, bis die Bedingung nicht mehr erfüllt ist und das Array zurückgegeben wird.
                }
            }(i))   
    }
    return arr;
}
var fs2 = buildFunctions2();

fs2[0]();
fs2[1]();
fs2[2]();
