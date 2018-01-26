function numbersOnly(arr) {
    // newArray is [1, -3, 0.5]
    var newArr=[];
    typeof 1==="number";
    typeof -3==="number";
    typeof .5==="number";
    

    for(var i=0; i<arr.length;i++){
        if(typeof(arr[i] !="number")){
        newArr.push(arr[i]);
            }
        }    
    return newArr;
}

var old= [1, "apple", -3, "orange", 0.5];
var somethingelse = numbersOnly(old);
console.log(somethingelse);