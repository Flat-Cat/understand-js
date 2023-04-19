function cat (greet) {

    return function(name) {
        console.log (whichCat + " " + name );
    }
}

cat ("hi")("Fifi")