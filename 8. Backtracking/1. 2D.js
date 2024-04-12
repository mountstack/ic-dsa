
let arr2 = [1, 2, 3]

let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9] 
]; 

for(let row = 0; row < arr.length; row++) {
    for(let col = row; col < arr.length; col++) {
        console.log(arr[row][col]);
        break; 
    }
}


