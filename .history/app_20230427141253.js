
function mapForEach(arr, fn) {

    var newArr = [];
    for (var i=0; i < arr.length ; i++){
    newArr.push (
        fn(arr[i])
        )
    };
    return newArr;
}
    //map: nehme ein Array, tue was darauf und erstelle ein neues Array daraus. 
//        fn(arr[i]) Ich 
var arr1 = [1,2,3,4];
    console.log(arr1);

var arr2 = [];
    for (var i=0; i < arr1.length ; i++){
    
        arr2.push(arr1[i] * 2);
    }
console.log(arr2)