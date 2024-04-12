

function binarySearch(arr, target) {
    // left, right & mid
    // Solution: match, left/ right update

    let left = 0, right = arr.length - 1; 
    let mid; 

    while(left <= right) {
        mid = Math.floor((left + right) / 2); 

        if(arr[mid] === target) {
            return { index: mid }
        }
        else if(arr[mid] > target) {
            right = mid - 1; 
        }
        else {
            left = left + 1; 
        }
    } 

    return {index: -1}; 
}

console.log(binarySearch([1, 20, 35, 48, 60, 72, 86, 95, 100, 200, 220], 100));


