function alwaysHungry(arr){
    for(var i =0; i < arr.length; i++){
        if(arr[i] == "food"){
            console.log("yummy")
        }
        else if(arr[i] != 'food'){
            console.log(arr[i])
        }
    }
}

alwaysHungry([1,2,3,4,5,"food", "food","food","food"])

function highPass(arr, cutoff) {
    var filteredArr = [];
    for(i = 0; i < arr.length; i++){
        if(arr[i]>cutoff)
        filteredArr.push(arr[i])
    }

    return filteredArr
}
var result = highPass([6,8,3,10,-2,5,9],5);
console.log(result)

function betterThanAverage(arr){
    var sum = 0;
    for(i=0; i<arr.length; i++){
        sum = sum + arr[i]
        }   
        return sum;
        console.log(sum)
    }
var result = betterThanAverage([6,8,3,10,-2,5,9]);
console.log(result)

function alpha(arr) {
    arr.reverse()
    return arr;
}
   
var result = alpha(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]

function fibonacciArray(n) {
    var fibArr = [0, 1];
    for(i = 0; i<n; i++){
        if(i>fibArr[0])
        fibArr.push(fibArr[i] + fibArr[i-1])
    }

    return fibArr;
}
   
var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
