class BFSGraph{
    constructor(size){
        this.size = size;
        this.adj = new Array(size);
        for (let index = 0; index < size; index++) {
            this.adj[index] = [];
        }
    }

    addEdge(startVertex, weight){
        this.adj[startVertex].push(weight);
    }

    BFS(startVertex){
        let visited = new Array(this.size);

        for (let index = 0; index < this.size; index++) {
            visited[index] =false;
        }

        
        let queue = [];
        visited[startVertex] = true;
        queue.push(startVertex);
        while(queue.length > 0){
            startVertex = queue[0];
            console.log(startVertex+" ");
            queue.shift();

            this.adj[startVertex].forEach((adjecent, i) => {
                if(!visited[adjecent]){
                    visited[adjecent] = true;
                    queue.push(adjecent); 
                }
            });
        }
    }

}


const g = new BFSGraph(4);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 2);
g.addEdge(2, 0);
g.addEdge(2, 3);
g.addEdge(3, 3);

g.BFS(2)