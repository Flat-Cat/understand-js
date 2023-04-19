function cat (greet) {

    return function(name) {
        console.log (greet + " " + name );
    }
}

cat ("Hi")("Fifi")