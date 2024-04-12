

let arr = [5, 8, 0, 1, 9, 3]; 
let temp; 

for(let z = 0; z < arr.length; z++) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > arr[i+1]) {
            // swap
            temp = arr[i]; 
            arr[i] = arr[i+1]; 
            arr[i+1] = temp; 
        } 
    } 
} 

arr; 
