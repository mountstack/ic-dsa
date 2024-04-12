

function skipCharacter(str, i) { 
    if(i == str.length) {
        return ''; 
    } 

    if(str[i] == 'b') {
        return skipCharacter(str, i+1); 
    }
    else {
        return str[i] + skipCharacter(str, i+1); 
    }
}


console.log(skipCharacter('abba', 0));
console.log(skipCharacter('cat', 0));



// amarbanglaapplehouse
