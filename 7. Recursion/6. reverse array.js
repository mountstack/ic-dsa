
const arr = [10, 20, 30, 40, 50];
let temp; 

function reverseArr(arr, i, j) {
    if(i > j) {
        return; 
    } 
    // Swapping
    temp = arr[i]; 
    arr[i] = arr[j]; 
    arr[j] = temp; 

    reverseArr(arr, i+1, j-1); 
}

reverseArr(arr, 0, arr.length-1); 

arr 
