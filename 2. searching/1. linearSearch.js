


function linearSearch(arr, value) { 
    for(let i = 0; i <= arr.length-1; i++) {
        if(value === arr[i]) {
            return { index: i } 
        }
    }

    return {index: -1}; 
}


console.log(linearSearch([10, 20, 30, 40, 50], 1400));


