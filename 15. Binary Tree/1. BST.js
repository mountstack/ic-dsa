
class BST {
    constructor(value) {
        let node = {
            value: value, 
            left: null, 
            right: null
        }

        this.root = node; 
    } 

    insert(value) {
        let node = {
            value: value, 
            left: null, 
            right: null
        } 

        let current = this.root; 
        while(true) { 
            if(current.value > value) { // Left
                if(!current.left) {
                    current.left = node; 
                    break; 
                }
                current = current.left; 
            } 
            else { // Right
                if(!current.right) {
                    current.right = node; 
                    break; 
                } 
                current = current.right;
            }
        } 
    } 

    search(target) { 
        let current = this.root; 

        while(true) { 
            if(current.value === target) {
                return 'Found !!!'
            }
            else if(current.value < target) { // Right
                current = current.right; 
            }
            else { // Left 
                current = current.left;
            }

            if(!current) {
                break; 
            }
        }
        return 'NOT Found !!!'
    } 

    recursiveSearch(node, target) {
        if(!node) {
            return 'Not Found!!!'
        }

        if(node.value === target) {
            return 'Found!!!'
        }
        else if(node.value < target) { // Right
            return this.recursiveSearch(node.right, target); 
        }
        else { // Left
            return this.recursiveSearch(node.left, target); 
        }
    }

    BFS() {
        let queue = []; 
        queue.push(this.root); 

        while(queue.length) {
            let current = queue[0]; 
            console.log(current.value);

            if(current.left) {
                queue.push(current.left);
            }
            if(current.right) {
                queue.push(current.right);
            }
            
            queue.shift();
        }
    }

    preOrderDFS(node) {
        // Current Node
        console.log(node.value);
        // Left Node 
        if(node.left) {
            this.preOrderDFS(node.left); 
        }
        // Right Node 
        if(node.right) {
            this.preOrderDFS(node.right); 
        }
    }

    inOrderDFS(node) {
        // Left Node 
        if(node.left) {
            this.inOrderDFS(node.left); 
        }

        // Current Node
        console.log(node.value);

        // Right Node 
        if(node.right) {
            this.inOrderDFS(node.right); 
        }
    }

    postOrderDFS(node) {
        // Left Node 
        if(node.left) {
            this.postOrderDFS(node.left); 
        }

        // Right Node 
        if(node.right) {
            this.postOrderDFS(node.right); 
        }

        // Current Node
        console.log(node.value);
    }
}

let bst = new BST(10); 

bst.insert(15); 
bst.insert(13); 
bst.insert(20); 
bst.insert(5); 
bst.insert(3); 
bst.insert(8); 
bst.insert(25); 

// console.log(bst.search(6)); 
// console.log(bst.recursiveSearch(bst.root, 8));
// bst.BFS(); 
bst.postOrderDFS(bst.root); 

// console.log(bst.root);


// BST  --> 
//  Small Data  -> Left 
//  Large Data  -> Right

//              10
//          20      30
//      40    50       60 
// 
// 
// 
// 
// 

