
let memo = {}; 
let count = 0; 
function fibo(n) { 
    count++; 
    // if(n == 0 || n == 1) {
    //     return n; 
    // } 
    // return fibo(n-1) + fibo(n-2); 
    if(memo[n]) {
        return memo[n]; 
    } 

    if(n == 0 || n == 1) {
        return n; 
    } 
    memo[n] = fibo(n-1) + fibo(n-2); 
    return memo[n]; 
}

console.log(fibo(20));
console.log({count});

// 20: 21891 w/o memo
// 20: 39 with memo