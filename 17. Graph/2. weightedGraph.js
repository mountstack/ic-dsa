
class DisjointSet { 
    constructor() { 
        this.parent = []; 
    } 
    // make() 
    make(v) { 
        this.parent[v] = v; 
    }
    // find() 
    find(v) { 
        if(this.parent[v] == v) {
            return v;
        } 
        return this.find(this.parent[v]);
    }

    // Union() 
    union(a, b) { 
        let x = this.find(a);
        let y = this.find(b);

        if(x !== y) { 
            this.parent[y] = x;
        }
    } 
} 

const disjointset = new DisjointSet(); 

class Graph {
    constructor() {
        this.graph = {};
        this.visited = {};
    }

    add(a, b, w) {
        this.visited[a] = false;
        this.visited[b] = false;

        // 1 way 
        if (this.graph[a]) {
            this.graph[a].push({ node: b, weight: w });
        }
        else {
            this.graph[a] = [{ node: b, weight: w }];
        }

        // 2 way 
        if (this.graph[b]) {
            this.graph[b].push({ node: a, weight: w });
        }
        else {
            this.graph[b] = [{ node: a, weight: w }];
        }
    }

    bfs(src) {
        let queue = [{ node: src, weight: 0 }];
        this.visited[src] = true;

        while (queue.length) {
            let { node, weight } = queue.shift();
            console.log({ node, weight });

            let arr = this.graph[node];
            for (let i = 0; i < arr.length; i++) {
                if (!this.visited[arr[i].node]) {
                    queue.push({
                        node: arr[i].node,
                        weight: weight + arr[i].weight
                    });
                    this.visited[arr[i].node] = true;
                }
            }
        }
    }

    dfs(node) {
        this.visited[node] = true;
        let arr = this.graph[node];
        console.log(node);

        for (let i = 0; i < arr.length; i++) {
            if (!this.visited[arr[i].node]) {
                this.dfs(arr[i].node);
            }
        }
    }

    prims(src) {
        let keys = [];
        let mst = [];
        let parents = [];

        // console.log(this.graph);
        for (let key in this.graph) {
            keys.push(Infinity);
            mst.push(false);
            parents.push(null);
        }

        keys[src] = 0;

        for (let key in this.graph) {
            // 1. Find minimum value 
            let min = Infinity;
            let minIndex = -1;
            for (let i = 0; i < keys.length; i++) {
                if (keys[i] < min && mst[i] === false) {
                    min = keys[i];
                    minIndex = i;
                }
            }

            // 2. Mark true 
            mst[minIndex] = true;

            // 3. Adjacency List 
            let arr = this.graph[minIndex] || [];
            for (let i = 0; i < arr.length; i++) {
                let { node, weight } = arr[i];

                if (mst[node] === false && keys[node] > weight) {
                    keys[node] = weight;
                    parents[node] = minIndex;
                }
            }
        }


        // Print the output 
        for (let i = 0; i < parents.length; i++) {
            if (parents[i] != null) {
                console.log(`${parents[i]} -> ${i}`);
            }
        }
    }

    kruskal() { 
        for(let key in this.graph) { 
            disjointset.make(key);
        } 

        const edges = []; 
        for(let node in this.graph) { 
            let arr = this.graph[node] || [];

            for(let i = 0; i < arr.length; i++) {
                // console.log(arr[i]);
                edges.push({v1: node, v2: arr[i].node, weight: arr[i].weight});
            }
        }

        edges.sort((a, b) => a.weight - b.weight);

        let totalWeight = 0; 
        let subgraph = []; 

        for(let i = 0; i < edges.length; i++) { 
            let v1 = edges[i].v1;
            let v2 = edges[i].v2;
            let weight = edges[i].weight;

            let x = disjointset.find(v1); 
            let y = disjointset.find(v2); 

            if(x != y) { 
                totalWeight += weight; 
                subgraph.push({v1, v2}); 
                disjointset.union(v1, v2);
            }
        } 

        console.log({totalWeight});
        console.log({subgraph});
    } 
} 

const graph = new Graph();

graph.add(0, 1, 2);
graph.add(0, 3, 3);
graph.add(1, 2, 5);
graph.add(1, 3, 7);
graph.add(2, 3, 10);
graph.add(3, 4, 6);
graph.add(2, 4, 12);


// console.log(graph.graph);

// graph.bfs(1);
// graph.dfs(1);
// graph.prims(0); 

graph.kruskal()






















// kruskal() {
//     // console.log(this.graph);
//     for (let key in this.graph) {
//         disjointset.make(key);
//     }
//     console.log(disjointset.parent);

//     const edges = [];

//     // Convert the graph to an array of edges
//     for (let node in this.graph) {
//         // console.log(this.graph[node]);
//         for (let edge of this.graph[node]) { 
//             // console.log(edge);
//             edges.push({ 
//                 node1: parseInt(node), 
//                 node2: edge.node, 
//                 weight: edge.weight 
//             }); 
//         } 
//     } 

//     edges.sort((a, b) => a.weight - b.weight);

//     console.log(edges); 

//     let v1, v2, weight, totalWeight = 0; 
//     let subgraph = []; 
//     for(let i = 0; i < edges.length; i++) { 
//         v1 = edges[i].node1; 
//         v2 = edges[i].node2; 
//         weight = edges[i].weight; 

//         let a = disjointset.find(v1); 
//         let b = disjointset.find(v2); 
//         if(a !== b) { 
//             totalWeight += weight; 
//             subgraph.push({ v1, v2 }); 
//             disjointset.union(a, b); 
//         } 
//     } 

//     console.log({totalWeight}); 
//     console.log({subgraph}); 
// } 