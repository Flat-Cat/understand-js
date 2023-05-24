
function mapForEach(obst, fn) {

    var newArr = [];
    for (var i=0; i < obst.length ; i++){
    newArr.push (
// call a Function (obst i = neues item)
        fn(obst[i])
        )
    };
    return newArr;
}
// OBST = ARRAY

// Map: nehme ein Array, tue was darauf und erstelle ein neues Array daraus. 
// fn(obst[i]) Ich rufe eine Funk. auf, und passe mein neues Array Item rein.

var arr1 = [1,2,3,4];
    console.log(arr1);

var arr2 = [];
    for (var i=0; i < arr1.length ; i++){
    
        arr2.push(arr1[i] * 2);
    }
console.log(arr2)

/*__BSP: So würde der Code aussehen wenn wir OHNE der Funktionellen Programmierung Arbeiten.
var arr1 = [1,2,3,4];
    console.log(arr1);

var arr2 = [];
    for (var i=0; i < arr1.length ; i++){
    
        arr2.push(arr1[i] * 2);
    }
console.log(arr2)
*/