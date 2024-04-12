

class HashMap { 
    constructor() {
        this.map = {}; 
    } 

    set(key, value) { 
        this.map[key] = value; 
        // Time Complexity: O(1)
        // Space Complexity: O(N)
    }

    get(key) {
        return this.map[key]; 
        // Time Complexity: O(1)
    }
}


const map = new HashMap(); 
map.set('name', 'Rijwan Hossain');
map.set('age', 30); 
map.set('by', 1993); 

console.log(map.get('name'));
console.log(map.get('age'));
console.log(map.get('dob'));

console.log(map); 
