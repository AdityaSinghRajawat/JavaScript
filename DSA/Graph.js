class Graph {
    constructor() {
        this.nodes = [];
        this.adjacencyList = {};
    }

    addNode(node) {
        if (!this.adjacencyList[node]) {
            this.nodes.push(node);
            this.adjacencyList[node] = [];
        }
    }

    addEdge(node1, node2) {

        if (!this.adjacencyList[node1]) {
            this.addNode(node1);
        }
        if (!this.adjacencyList[node2]) {
            this.addNode(node2);
        }

        this.adjacencyList[node1].push(node2);
        this.adjacencyList[node2].push(node1);
    }

    showConnections() {
        const allNodes = this.nodes;
        for (let node of allNodes) {
            let nodeConnections = this.adjacencyList[node];
            let connections = "";
            let vertex;
            for (vertex of nodeConnections) {
                connections += vertex + " ";
            }
            console.log(node + "-->" + connections);
        }
    }

    removeEdge(node1, node2) {

        this.adjacencyList[node1] = this.adjacencyList[node1].filter((item) => item != node2);
        this.adjacencyList[node2] = this.adjacencyList[node2].filter((item) => item != node1);

    }

    removeNode(node) {

        if (!this.adjacencyList[node]) {
            return
        }

        for (let item of this.adjacencyList[node]) {
            this.removeEdge(node, item);
        }

        delete this.adjacencyList[node];
        this.nodes = this.nodes.filter((item) => item != node);
    }
}

const graph = new Graph();

graph.addNode('A');
graph.addNode('B');
graph.addNode('C');
graph.addNode('D');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'D');

console.log(graph);
// graph.removeEdge('A', 'B');
graph.removeNode('D');
// graph.showConnections();

console.log(graph);
