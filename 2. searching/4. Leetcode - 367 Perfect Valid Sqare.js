

function binarySearch(num) { 
    if(num === 1) {
        return 1; 
    }

    let left = 1, right = num; 
    let mid; 

    while(left <= right) {
        mid = Math.floor((left + right) / 2); 

        if(mid*mid === num) {
            return true; 
        }
        else if(mid*mid > num) {
            right = mid - 1; 
        }
        else {
            left = left + 1; 
        }
    } 

    return false; 
}

console.log(binarySearch(14));





