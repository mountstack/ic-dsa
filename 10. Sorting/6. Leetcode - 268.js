

function missingNumber(arr) {
    function sorting(arr) {
        let i = 0; 
        let temp; 
    
        while(i < arr.length) { 
            let value = arr[i]; 
            let correctIndex = value;
            
            if(value === arr.length) {
                i++; 
                continue; 
            } 

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

    sorting(arr); 

    for(let i = 0; i < arr.length; i++) {
        if(i !== arr[i]) {
            return i; 
        }
    } 

    return arr.length; 
}


let result = missingNumber([9,6,4,2,3,5,7,0,1]); 


result; 
