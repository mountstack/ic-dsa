

class Heap {
    constructor(value) { 
        this.list = [null, value]; 
    } 

    insert(value) {
        let length = this.list.push(value); 
        this.upHeap(length-1); 
    } 

    upHeap(index) { 
        if(index == 0) { 
            return; 
        } 

        let p = Math.floor(index/2);
        if(this.list[p] >= this.list[index]) {
            // swap 
            let temp = this.list[p]; 
            this.list[p] = this.list[index]; 
            this.list[index] = temp; 

            this.upHeap(p); 
        }
    }
}

const heap = new Heap(7); 
heap.insert(8); 
heap.insert(12); 
heap.insert(6); 
heap.insert(3); 
heap.insert(1); 

console.log(heap.list);





