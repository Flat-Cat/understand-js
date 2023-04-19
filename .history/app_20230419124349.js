function buildFunctions() {
    // Free variables : außerhalb der funk. wo ich zugriff hab 
    var arr = [];

    for (var i = 0; i < 3; i++) {
//push das in den Klammern zum array        
        arr.push (
            function() {
                console.log(i);
// Console.log wird hier nicht aufgerufen!
            }
        )
    }

    return arr;
}
var fs = buildFunctions();

fs[0]();
fs[1]();
fs[2]();
