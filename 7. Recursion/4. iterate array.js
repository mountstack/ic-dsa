
const arr = [10, 20, 30, 40, 50];

function iterate(arr, i) { 
    if(i === arr.length) {
        return; 
    }
    console.log(arr[i]);
    iterate(arr, i+1); 
}

iterate(arr, 0); 