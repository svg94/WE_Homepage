var dependencies = [["schlafen", "studieren"], ["essen", "studieren"], ["studieren", "prüfen"]];
var nodeStrings = ["schlafen", "studieren", "essen", "prüfen"];

function arrayAlreadyHasArray(arr, subarr) { //To check if Array is inside 2d array.
    for (var i = 0; i < arr.length; i++) {
        let checker = false;
        for (var j = 0; j < arr[i].length; j++) {
            if (arr[i][j] === subarr[j]) {
                checker = true;
            } else {
                checker = false;
                break;
            }
        }
        if (checker) {
            return true;
        }
    }
    return false;
}

function Node(name, edgeNodes) {
    var nodeObject = {
        name: name,
        edges: [],
        vorgaenger: 0
    }
    nodeObject.addEdge = function (edge) {
        nodeObject.edges.push(edge);
        if (nodeObject.name === edge[1]) {
            nodeObject.vorgaenger += 1;
        }
    }
    nodeObject.rmvEdge = function (pEdge) {
        if (arrayAlreadyHasArray(nodeObject.edges, pEdge)) {
            nodeObject.edges.filter(edge => edge !== pEdge);
            nodeObject.vorgaenger -= 1;
        }
    }
    if (edgeNodes) {
        edgeNodes.forEach(edgeNode => {
            nodeObject.addEdge(edgeNode);
        })
    }
    return nodeObject;
}

function Graph(nodesAsStrings, dependencies) {    //Helper function to create the graph
    var graph = {
        nodes: []
    }
    nodesAsStrings.forEach(stringNode => {   //Go through nodes
        var currentNodesDeps = [];
        dependencies.forEach(edge => {       //Collects all edges of the current node
            if (edge.includes(stringNode)) {
                currentNodesDeps.push(edge);
            }
        });
        var n = new Node(stringNode, currentNodesDeps);
        graph.nodes.push(n);                       //Adds the current node to the graphs nodes
    });
    return graph;
}

function topsort(nodesAsStrings, dependencies) {
    var graph = new Graph(nodesAsStrings, dependencies);
    var visited = [];
    var q = []  //Vorgaenger = 0;

    var i;
    for (i = 0; i < graph.nodes.length; i++) {              //Look for Q (vorgänger =0)
        if (graph.nodes[i].vorgaenger === 0) {
            q.push(graph.nodes[i]);
            graph.nodes.splice(i, 1);
            i -= 1;
        }
    }
    while (q.length > 0) {
        visited.push(q.pop());
        var j;
        for (j = 0; j < graph.nodes.length; j++) {
            graph.nodes[j].rmvEdge([visited[visited.length - 1].name, graph.nodes[j].name]);
            if (graph.nodes[j].vorgaenger === 0) {
                q.push(graph.nodes[j]);
                graph.nodes.splice(j, 1);
//j-=1;
            }
        }
    }
    return visited;
}

var result = topsort(nodeStrings, dependencies);
console.log("Topsort: ", result);
