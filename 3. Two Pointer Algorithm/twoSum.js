

function twoSum(arr, target) { 
    let i = 0, j = arr.length - 1, sum = 0; 

    while(i <= j) { 
        sum = arr[i] + arr[j]; 

        if(target == sum) { 
            return [i+1, j+1]; 
        }
        else if(target < sum) { 
            j--; 
        } 
        else {
            i++; 
        }
    }
}

twoSum([-1,0], -1); 


