

function reverse(arr) { 
    let i = 0, j = arr.length-1; 
    let temp; 

    while(i <= j) {
        temp = arr[i]; 
        arr[i] = arr[j]; 
        arr[j] = temp; 

        i++; 
        j--; 
    } 

    console.log(arr);
}


reverse([75, 10, 20, 30, -5, 40, 50, 60, 70, 80]); 

