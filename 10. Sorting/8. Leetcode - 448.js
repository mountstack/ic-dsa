
function findDisappearedNumbers(arr) {
    function sorting(arr) {
        let i = 0; 
        let temp; 
    
        while(i < arr.length) { 
            let value = arr[i]; 
            let correctIndex = value-1;

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

    let result = []; 
    for(let i = 0; i < arr.length; i++) { 
        if(i !== arr[i]-1) { 
            result.push(i+1); 
        }
    } 
    
    return result; 
}


const result = findDisappearedNumbers([4,3,2,7,8,2,3,1]); 

console.log(result);



