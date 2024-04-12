
const arr = [1, 2, 3, 4, 4, 2, 1]

function isPalindrome(arr, i, j) {
    if(i > j) {
        return true; 
    } 
    if(arr[i] != arr[j]) {
        return false; 
    } 
    return isPalindrome(arr, i+1, j-1); 
}

console.log(isPalindrome(arr, 0, arr.length-1));

