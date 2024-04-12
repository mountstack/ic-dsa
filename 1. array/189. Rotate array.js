

let rotate = function(nums, k) { 
    while(k > nums.length) {
        k = k - nums.length; 
    } 
    if(k <= 0) return; 

    let n = nums.length - k; 
    console.log({n});

    let i, j, newArr = []; 
    for(i = n, j = 0; i < nums.length; i++, j++) { 
        newArr[j] = nums[i]; 
    } 

    for(i = 0; i < n; i++, j++) {
        newArr[j] = nums[i]; 
    }


    for(i = 0; i < nums.length; i++) {
        nums[i] = newArr[i]; 
    } 
}


rotate([10, 20, 30, 40, 50], 2)
