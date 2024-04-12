

let coins = [1, 2, 5, 10, 20, 50, 100]; 
let num = 47; 
let count = 0; 
let arr = []; 

function findFinimumCoin() { 
    if(num == 0) return;  

    for(let i = coins.length-1; i >= 0; i--) { 
        while(coins[i] <= num) { 
            if(coins[i] <= num) {
                num = num - coins[i]; 
                arr.push(coins[i]); 
                count++;
            } 
        }
    } 
} 

findFinimumCoin(); 

console.log({count, arr}); 