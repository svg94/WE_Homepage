function topologicalSortHelper(node, explored, s){
    explored.add(node);
    // Marks this node as visited and goes on to the nodes
    // that are dependent on this node, the edge is node ----> n
    this.edges[node].forEach(n => {
        if (!explored.has(n)) {
            this.topologicalSortHelper(n, explored, s);
        }
    });
    // All dependencies are resolved for this node, we can now add
    // This to the stack.
    s.push(node);
}

function topologicalSort(){
    // Create a Stack to keep track of all elements in sorted order
    let s = new Stack(this.nodes.length);
    let explored = new Set();

    // For every unvisited node in our graph, call the helper.
    this.nodes.forEach(node => {
        if (!explored.has(node)) {
            this.topologicalSortHelper(node, explored, s);
        }
    });

    while (!s.isEmpty()) {
        console.log(s.pop());
    }
}