

var firstRepeatedCharacter = function(s) { 
    let obj = {}; 

    for(let i = 0; i < s.length; i++) { 
        if(obj[s[i]]) {
            return s[i]; 
        }
        else {
            obj[s[i]] = 1; 
        }
    }
};

console.log(firstRepeatedCharacter('RijwanHossain'));

