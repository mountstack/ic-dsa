

let arr = [4, 6, 1, 7, 2, 0, 0];

function partitioning() {
    // 1. Pick 1st value 
    // 2. Count small value 
    // 3. Place the picked value on correct position 
    // 4. small value <= value < larger 
    // 5. Return the index of the position 
} 

function quickSort(arr, left, right) {
    if(left >= right) { 
        return; 
    } 

    let index = partitioning(); 
    quickSort(arr, left, index-1); 
    quickSort(arr, index+1, right); 
} 

console.log(arr); // [0, 0, 1, 2, 4, 6, 7]


