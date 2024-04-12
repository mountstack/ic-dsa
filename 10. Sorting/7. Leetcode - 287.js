
function findDuplicate(arr) {
    function sorting(arr) {
        let i = 0; 
        let temp; 
    
        while(i < arr.length) { 
            let value = arr[i]; 
            let correctIndex = value-1;
            
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

    arr; 

    for(let i = 0; i < arr.length; i++) {
        if(i !== arr[i]-1) {
            return arr[i]; 
        }
    }
}


findDuplicate([3,1,3,4,2]); 




