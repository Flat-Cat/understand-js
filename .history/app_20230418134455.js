function cat (whichCat) {

    return function(name) {
        console.log (whichCat + " " + name );
    }
}

greet ("hi")