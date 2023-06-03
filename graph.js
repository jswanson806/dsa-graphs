class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  // this function accepts a Node instance and adds it to the nodes property on the graph
  addVertex(vertex) {
    this.nodes.add(vertex);
  }

  // this function accepts an array of Node instances and adds them to the nodes property on the graph
  addVertices(vertexArray) {
    for(let vertex of vertexArray){
      this.nodes.add(vertex)
    }
  }

  // this function accepts two vertices and updates their adjacent values to include the other vertex
  addEdge(v1, v2) {
    v1.adjacent.add(v2);
    v2.adjacent.add(v1);
  }

  // this function accepts two vertices and updates their adjacent values to remove the other vertex
  removeEdge(v1, v2) {
    v1.adjacent.delete(v2);
    v2.adjacent.delete(v1);
  }

  // this function accepts a vertex and removes it from the nodes property, it also updates any adjacency lists that include that vertex
  removeVertex(vertex) {
    this.nodes.delete(vertex);
    for(let neighbor of vertex.adjacent){
      if(neighbor.adjacent.has(vertex)){
        neighbor.adjacent.delete(vertex);
      }
    }
  }

  // this function returns an array of Node values using DFS
  depthFirstSearch(start) {
    const toVisitStack = [start];
    const seen = new Set(toVisitStack)
    const values = [];
    while(toVisitStack.length){
      let currentNode = toVisitStack.pop()
      values.push(currentNode.value);
      console.log(values)
      for(let neighbor of currentNode.adjacent){
        if(!seen.has(neighbor)){
          seen.add(neighbor);
          toVisitStack.push(neighbor)
        }
      }
    }
    return values;
  }

  // this function returns an array of Node values using BFS
  breadthFirstSearch(start) {
    const toVisitQueue = [start];
    const seen = new Set(toVisitQueue)
    const values = [];
    while(toVisitQueue.length){
      let currentNode = toVisitQueue.shift()
      values.push(currentNode.value);
      console.log(values)
      for(let neighbor of currentNode.adjacent){
        if(!seen.has(neighbor)){
          seen.add(neighbor);
          toVisitQueue.push(neighbor)
        }
      }
    }
    return values;
  }
}

module.exports = {Graph, Node}