
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

//_arr4_Limiter__________________________________________________________________________________________________________________

var checkPastLimit = function (limiter, item) {
    return item > limiter;
}
var arr4= mapForEach(arr1, checkPastLimit.bind(this, 1));
//Kopie dieser Funktion mit 1 als limiter

console.log("arr4: " + arr4);



//_Aufgabe: Aufrufen und die zahl des Limiters nur angeben________________________________________________________________________
var defaultLimiterNumber = function (limiterNumber) {
   return limiterNumber;
}(2);

console.log("Default limiter number: " + defaultLimiterNumber)

//_arr5________________________________________________________________________
var arr5 = mapForEach(arr1, function(item){
    return item > defaultLimiterNumber;
});
console.log("arr5: " + arr5)

//_Lösung: Aufrufen und die zahl des Limiters nur angeben________________________________________________________________________

var checkPastLimitSimplified = function (limiter) {
    return function (limiter, item) {
        return item > limiter ;
    }
}