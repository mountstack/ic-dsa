
class Queue {
    constructor(value) { 
        const node = {
            value, next: null
        }
        this.head = node; 
        this.tail = node; 
        this.length = 1; 
    } 

    enqueue(value) {
        const node = {
            value, next: null
        }
        this.tail.next = node; 
        this.tail = node; 
        this.length++; 
    }

    dequeue() {
        let data = this.head.value; 
        this.head = this.head.next; 
        return data; 
    }
}

const queue = new Queue(100); 
queue.enqueue(200);
queue.enqueue(300);

console.log(queue.head);
console.log(queue.dequeue());
console.log(queue.head);

