
let arr = [3, 6, 2, 1, 5, 4]; 
// arr; 
function cyclicSort(arr) {
    let i = 0; 
    let temp; 

    while(i < arr.length) {
        // console.log({i});
        let value = arr[i]; 
        let correctIndex = value - 1;

        if(arr[correctIndex] !== value) { 
            temp = arr[i]; 
            arr[i] = arr[correctIndex]; 
            arr[correctIndex] = temp; 
        } 
        else {
            i++; 
        }
    }
}

cyclicSort(arr); 

console.log(arr);

