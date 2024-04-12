
class HashTable { 
    constructor(size) { 
        this.size = size; 
        this.arr = new Array(size); 
    } 

    hashFunction(value) { 
        value = value + ''; 

        let sum = 0; 
        for(let i = 0; i < value.length; i++) {
            sum = sum + value.charCodeAt(i); 
        } 

        return sum % this.size; 
    } 

    set(value) { 
        const index = this.hashFunction(value); 
        let data = this.arr[index]; 
        if(!data) { 
            data = [value]; 
        } 
        else {
            data.push(value); 
        }

        this.arr[index] = data; 
    } 

    get(value) {
        const index = this.hashFunction(value); 
        let dataArr = this.arr[index]; 

        for(let i = 0; i < dataArr?.length; i++) { 
            if(dataArr[i] === value) {
                return 'Found'
            }
        }

        return 'Not Found!'
    }
}

let table = new HashTable(5); 

table.set('apple'); 
table.set('banana'); 
table.set('cat'); 
table.set(10); 
table.set(100); 
table.set(106); 

console.log(table.get('Apple'));

console.log(table.arr); 