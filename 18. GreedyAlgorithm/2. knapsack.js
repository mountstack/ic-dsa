// function knapsackGreedy(weights, profits, capacity) { 
//     let n = weights.length;
//     let ratios = [];
//     for (let i = 0; i < n; i++) {
//         ratios.push({ ratio: profits[i] / weights[i], weight: weights[i], profit: profits[i] });
//     }

//     ratios.sort((a, b) => b.ratio - a.ratio);

//     let totalProfit = 0;
//     for (let ratio of ratios) {
//         const { weight, profit } = ratio;
//         if (capacity >= weight) {
//             totalProfit += profit; 
//             capacity -= weight;
//         } 
//         else {
//             let fraction = (capacity / weight) * profit;
//             totalProfit += fraction; 
//             capacity = 0;
//             break; 
//         }
//     }

//     return totalProfit;
// } 











// Input data
let capacity = 22; 
let weights = [18, 13, 10]; 
let profits = [20, 12, 18]; 


function calculateKnapsack(capacity, weights, profits) {
    const ratios = []; 
    for (let i = 0; i < weights.length; i++) {
        ratios.push({ 
            ratio: profits[i] / weights[i], 
            weight: weights[i], 
            profit: profits[i] 
        });
    } // O(N) 

    ratios.sort((a, b) => b.ratio - a.ratio);  // O(N * log(N))

    let totalProfit = 0;
    
    for (let ratio of ratios) {
        const { weight, profit } = ratio;
        if (capacity >= weight && capacity > 0) { 
            totalProfit += profit; 
            capacity -= weight;
        } 
        else {
            let fraction = (capacity / weight) * profit;
            totalProfit += fraction; 
            break; 
        }
    } // O(N)

    return totalProfit; 
}


const result = calculateKnapsack(capacity, weights, profits); 

console.log({result});


// Time Complexity Calculation 

// O(N) + O(N) + O(N * log(N))
// 2 O(N) + O(N * log(N))
// O(N) + O(N * log(N))
// O(N * log(N)) 

