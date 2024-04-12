

const arr = [10, 20, 30, 40, 50, 60, 70]; 
const target = 60; 

let mid; 
function binarySearch(arr, l, r) {
    if(l > r) {
        return 'NOT Found!!!'
    }


    mid = Math.floor(((l + r) / 2)); 
    if(arr[mid] === target) {
        return `Data found on index ${mid}!`; 
    }

    if(arr[mid] > target) {
        return binarySearch(arr, l, mid - 1); 
    }
    else {
        return binarySearch(arr, mid + 1, r); 
    }
}


console.log(binarySearch(arr, 0, arr.length-1));

