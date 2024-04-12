
// 1580215 = One Five Eight zero Two One Five

let numbers = {
    0: "Zero", 
    1: "One", 
    2: "Two", 
    3: "three", 
    4: "Four", 
    5: "Five", 
    6: "Six", 
    7: "Seven", 
    8: "Eight", 
    9: "Nine"
}

function numberToString(num) {
    let result = ''; 
    for(let i = 0; i < num.length; i++) { 
        result = result + numbers[num[i]] + ' '; 
    } 

    console.log(result);
} 

numberToString('12345'); 