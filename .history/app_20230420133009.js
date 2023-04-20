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
// Die For-Schleife wird solange ausgeführt, wie i kleiner als 3 ist. Sobald i den Wert 3 erreicht hat, 
// wird die Schleife verlassen und der nächste Befehl ausgeführt, der das Array arr zurückgibt.
//__BSP2__
function buildFunctions2() {
    var arr = [];
    for (var i = 0; i < 3; i++) {

        arr.push (
            //3 j gibts
            function(j) {
                return function() {
                    console.log(j)
                //Hier wird i in j gespeichert und zwischendurch ausgegeben. Somit wird bei jedem return ein neuer Ausführungskontext erschaffen. 
                }
            }(i))   
    }
    return arr;
}
var fs2 = buildFunctions2();

fs2[0]();
fs2[1]();
fs2[2]();
