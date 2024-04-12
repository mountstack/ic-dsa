
class Stack {
    constructor(value) {
        let node = {
            value: value, 
            next: null
        }

        this.head = node; 
        this.tail = node; 
        this.length = 1; 
    }

    push(value) {
        let node = {
            value: value, 
            next: null
        } 
        this.tail.next = node; 
        this.tail = node; 
        this.length++; 
    } 

    pop() {
        let currentNode = this.head; 
        for(let i = 1; i < this.length-1; i++) { 
            currentNode = currentNode.next; 
        }

        const result = currentNode.next.value; 
        currentNode.next = null; 
        this.length--; 

        return result; 
    }
}

const stack = new Stack(100); 
stack.push(200); 
stack.push(300); 
stack.push(400); 

console.log(stack.pop());
console.log(stack.pop());

console.log(stack.head);
