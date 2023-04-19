function buildFunctions() {
    var arr = [];

    for (var i = 0; i < 3; i++) {
//Adde das in den Klammern zum array        
        arr.push(
            function(){
                console.log (i);
            }
        )
    }
    return arr;
}