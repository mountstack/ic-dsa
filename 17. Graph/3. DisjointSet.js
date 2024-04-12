

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

disjointset.make(0)
disjointset.make(1)
disjointset.make(2)
disjointset.make(3)
disjointset.make(4)

disjointset.union(1, 2)
disjointset.union(3, 4)
disjointset.union(2, 4) 

console.log(disjointset.find(1));
console.log(disjointset.find(2));
console.log(disjointset.find(3));
console.log(disjointset.find(4));

console.log(disjointset.parent);



