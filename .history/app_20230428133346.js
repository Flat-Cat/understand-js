
function mapForEach(arr, fn) {

    var newArr = [];
    for (var i=0; i < arr.length ; i++){
    newArr.push (
// Hier spiel die Funktionelle Programmierung eine Rolle:
        fn(arr[i])
        )
    };
    return newArr;
}
//_arr1________________________________________________________________________
var arr1 = [1,2,3,4];
    console.log("arr1: " + arr1);

//_arr2________________________________________________________________________
var arr2 = mapForEach(arr1, function(item){
    return item * 2;
});
console.log("arr2: " + arr2)
//_arr3________________________________________________________________________
var arr3 = mapForEach(arr1, function(item){
    return item > 2;
});
console.log("arr3: " + arr3)

//_Limiter_(Default_Parameter)mit_BIND____________________________________________

var checkPastLimit = function (limiter, item) {
    return item > limiter;
}
var arr4= mapForEach(arr1, checkPastLimit.bind(this, 1));
//Kopie dieser Funktion mit 1 als limiter

console.log("arr4: " + arr4);
