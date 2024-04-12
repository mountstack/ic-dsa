
const arr = [10, 20, 30, 40, 50];

function addition(arr, i) {
    if(i == arr.length) {
        return 0; 
    } 

    return arr[i] + addition(arr, i+1); 
}

console.log(addition(arr, 0));