const fs = require('fs');

const path = './graph.txt'

if (fs.existsSync(path)) {
    console.log('Read file started!');
    var data = fs.readFileSync(path, 'utf8').replace(/\r?\n|\r/g, " ").split(' ');
    console.log('Read file succses!');
} else {
    console.log('File does not exists at path: ', path);
}

// remove number of edges
data.shift();
// get start vertex
const startNode = data.shift(); 
const edges = data;
// console.log('Start point: ', startNode);
// console.log('Edges: ', edges);

class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(source, destination) {
        if (!this.adjacencyList[source]) {
            this.addVertex(source);
        }
        if (!this.adjacencyList[destination]) {
            this.addVertex(destination);
        }
        this.adjacencyList[source].push(destination);
        // for undirected graph
        // this.adjacencyList[destination].push(source); 
    }

    removeEdge(source, destination) {
        this.adjacencyList[source] = this.adjacencyList[source].filter(vertex => vertex !== destination);
        this.adjacencyList[destination] = this.adjacencyList[destination].filter(vertex => vertex !== source);
    }

    removeVertex(vertex) {
        while (this.adjacencyList[vertex]) {
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex];
    }  
}

Graph.prototype.bfs = function(start) {
    const queue = [start];
    const result = [];
    const visited = {};
    visited[start] = true;
    let currentVertex;
    while (queue.length) {
        currentVertex = queue.shift();
        result.push(currentVertex);
        this.adjacencyList[currentVertex].forEach(neighbor => {
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                queue.push(neighbor);
            }
        });
    }
    return result;
}

// if tail = queue.length ? target = queue[-1]
// tail != queue.length

Graph.prototype.shortestPath = function(graph, source, target) {
    if (source == target) {   // Delete these four lines if
      console.log((source));  // you want to look for a cycle
      return;                 // when the source is equal to
    }                         // the target
    var queue = [ source ],
        visited = { source: true }, // is node visited
        predecessor = {},           // prev nodes
        tail = 0;                   // element that ready go off the queue
    while (tail < queue.length) {
        var u = queue[tail++],                          // Pop a vertex off the queue
        adjacencyList = graph.adjacencyList[u];
        console.log('queue1: ', queue);

        for(var i = 0; i < adjacencyList.length; ++i) {
            var v = adjacencyList[i];                   // vertex
            console.log('v vertex: ', v);
            if (visited[v]) {
                continue;
            }                   // mark node as visited
            visited[v] = true;

            if (v === target) {         // Check if the path is complete.
                var path = [ v ];       // If so, backtrack through the path
                while (u !== source) {
                    path.push(u);       // add prev nodes until U is not Source node
                    u = predecessor[u];
                }

                path.push(u);           // add prev path node
                path.reverse();
                console.log('Max Path Length: ', path.length - 1);
                console.log((path.join(' -> ')));
                return;
            }
            
            predecessor[v] = u; // to remember prev nodes of current vertex
            queue.push(v);
            console.log('queue2: ', queue);
        }
    }
}

const graph = new Graph();

for(let j = 0; j < edges.length; j++) {
    graph.addVertex(edges[j])
}

for(let i = 0; i < edges.length; i += 2) {
    graph.addEdge(edges[i], edges[i+1])
}

console.log(graph);
console.log('BFS result: ');
const result = graph.bfs(startNode);
console.log(result);

const startForSearch = result.shift()
const endForSearch = result.pop()
console.log(startForSearch);
console.log(endForSearch);

console.log(graph.shortestPath(graph, startForSearch, endForSearch));