
function binarySearch(arr, target) { 
    if(target < arr[0]) {
        return 0; 
    }
    if(target > arr[arr.length-1]) {
        return arr.length; 
    }

    let left = 0, right = arr.length - 1; 
    let mid; 

    while(left <= right) {
        mid = Math.floor((left + right) / 2); 

        if(arr[mid] === target) {
            return mid; 
        }
        else if(arr[mid] > target) {
            right = mid - 1; 
        }
        else {
            left = left + 1; 
        }
    } 

    if(arr[mid] > target) {
        return mid; 
    } 
    else {
        return mid + 1; 
    }
}

console.log(binarySearch([1, 3, 5, 6], 4));




