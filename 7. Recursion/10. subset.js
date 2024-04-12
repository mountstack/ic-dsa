
let answer = []; 
let ch; 

function subset(str, rst) {
    if(str.length == 0) {
        if(rst) {
            answer.push(rst); 
        }
        return; 
    } 

    // Take it 
    ch = str[0]; 
    subset(str.slice(1), rst+ch); 
    

    // Leave it 
    subset(str.slice(1), rst); 
}

subset('abc', ''); 

console.log(answer.length);
console.log(answer);
