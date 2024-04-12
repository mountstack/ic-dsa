
// [ 1, 1, 2, 2, 3 ]

function majorityVoting(arr) { 
    let answerIndex = 0; 
    let count = 1; 

    for(let i = 1; i < arr.length; i++) { 
        if(arr[i] === arr[answerIndex]) {
            count++; 
        } 
        else { 
            count--; 
        } 

        if(count === 0) {
            answerIndex = i; 
            count = 1; 
        }
    } 

    return arr[answerIndex]; 
}

majorityVoting([1, 1, 2, 3, 5, 1, 1])

