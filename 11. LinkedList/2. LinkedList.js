
class LinkedList { 
    constructor(value) {
        let node = {
            value: value, 
            next: null 
        }
        this.head = node; 
        this.tail = node; 
        this.length = 1; 
    }

    insert(value) {
        let node = {
            value: value, 
            next: null 
        } 

        this.tail.next = node; 
        this.tail = node; 
        this.length++; 
    }

    print() { 
        let currentNode = this.head; 
        while(currentNode) { 
            console.log(currentNode.value);
            currentNode = currentNode.next; 
        } 
    }

    recursiveDisplay(node) {
        if(!node) return; 

        console.log(node.value);
        this.recursiveDisplay(node.next); 
    } 

    update(n, value) { 
        if(n <= 0) {
            console.log({n});
            console.log('Update not possible...');
            return; 
        }
        if(this.length < n) { 
            console.log({n});
            console.log('Update not possible...');
            return; 
        } 

        let currentNode = this.head; 
        let count = 0; 
        while(currentNode) { 
            count++; 
            if(n == count) {
                currentNode.value = value; 
            }
            currentNode = currentNode.next; 
        } 
    } 

    deleteNode(n) {
        if(n == 1) { // Delete Head 
            this.head = this.head.next; 
            this.length--; 
        } 
        else if(n === this.length) { // Delete Tail
            let currentNode = this.head; 
            for(let i = 1; i <= n-2; i++) { 
                currentNode = currentNode.next; 
            } 
            currentNode.next = null; 
            this.length--; 
        }
        else { // Delete from inside 
            let currentNode = this.head; 
            for(let i = 1; i <= n-2; i++) { 
                currentNode = currentNode.next; 
            } 
            currentNode.next = currentNode.next.next; 
            this.length--; 
        }
    }
} 


let list = new LinkedList(100); 
list.insert(200); 
list.insert(300); 
list.insert(400); 
list.print(); 
list.recursiveDisplay(list.head); 
// list.update(3, 25); 
// list.update(5, 25); 
// list.update(-2, 25); 

list.deleteNode(3); 
console.log(list);

// list.deleteNode(1); 

// console.log(list);
