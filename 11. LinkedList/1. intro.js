
// 100  ->  200  -> 300  -> X 
// 1k   ->  1.5k -> 2k

// (100, 1.5k)  ->  (200, 2k)  -> (300, X)


// let obj = {
//     value: 100, 
//     next: {
//         value: 200, 
//         next: {
//             value: 300, 
//             next: null
//         }
//     }
// }


let LinkedList = { 
    head: {
        value: 100, 
        next: {
            value: 200, 
            next: {
                value: 300, 
                next: null
            }
        }
    }, 
    tail: {
        value: 300, 
        next: null
    }, 
    length: 3
}




