
class DEQueue {
    constructor(value) { 
        const node = { value, next: null }; 
        this.head = node; 
        this.tail = node; 
        this.length = 1; 
    } 

    push_back(value) {
        let node = {
            value: value, 
            next: null
        } 
        this.tail.next = node; 
        this.tail = node; 
        this.length++; 
    } 

    push_front(value) {
        let node = {
            value: value, 
            next: this.head
        } 
        this.head = node; 
        this.length++; 
    }

    pop_front() {
        let data = this.head.value; 
        this.head = this.head.next; 
        this.length--; 
        return data; 
    }

    pop_back() {
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

const dequeue = new DEQueue(100); 
dequeue.push_back(200); 
dequeue.push_back(300); 
dequeue.push_front(50); 

console.log(dequeue.head); 

console.log(dequeue.pop_front());

console.log(dequeue.head); 

console.log(dequeue.pop_back());

console.log(dequeue.head); 

