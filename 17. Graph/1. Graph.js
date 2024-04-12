
class Graph { 
    constructor() {
        this.graph = {}; 
        this.visited = {}; 
    }

    add(a, b) { 
        this.visited[a] = false; 
        this.visited[b] = false; 

        // 1 way 
        if(this.graph[a]) {
            this.graph[a].push(b); 
        } 
        else { 
            this.graph[a] = [b]; 
        }

        // 2 way 
        if(this.graph[b]) {
            this.graph[b].push(a); 
        } 
        else { 
            this.graph[b] = [a]; 
        }
    } 

    dfs(node) {
        this.visited[node] = true; 
        let arr = this.graph[node]; 
        console.log(node);

        for(let i = 0; i < arr.length; i++) { 
            if(!this.visited[arr[i]]) {
                this.dfs(arr[i]); 
            }
        } 
    } 

    bfs(src) {
        let queue = [src]; 
        this.visited[src] = true; 

        while(queue.length) { 
            let data = queue.shift(); 
            console.log(data);
            
            let arr = this.graph[data]; 
            for(let i = 0; i < arr.length; i++) {
                if(!this.visited[arr[i]]) { 
                    queue.push(arr[i]); 
                    this.visited[arr[i]] = true; 
                }
            }
        }
    }

    connectedComponent() {
        for(let key in this.visited) {
            if(!this.visited[key]) {
                this.bfs(key); 
            }
        }
    }

    shortestPath(src, dest) { 
        this.bfs(src); 
        // parent 
        // Loop 
        // return array
    }
}


const graph = new Graph(); 
// graph.add(1, 2); 
// graph.add(1, 3); 
// graph.add(4, 3); 
// graph.add(2, 4); 
// graph.add(2, 5); 
// graph.add(5, 4); 

graph.add(1, 2); 
graph.add(2, 3); 
graph.add(1, 4); 
graph.add(5, 4); 
graph.add(5, 6); 
graph.add(5, 8); 
graph.add(6, 7); 

// graph.connectedComponent(); 
// graph.bfs(7); 
graph.dfs(1); 

// console.log(graph.graph);

