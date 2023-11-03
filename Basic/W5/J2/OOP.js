class Graph {
  #adjMatrix = {};

  constructor(directed = false) {
    this.directed = directed;
  }

  addNode(nodeName) {
    if (this.#adjMatrix.hasOwnProperty(nodeName)) {
      throw new Error(`node ${nodeName} daram!`);
    } else {
      this.#adjMatrix[nodeName] = [];
    }
  }

  addEdge(node1, node2) {
    if (
      !this.#adjMatrix.hasOwnProperty(node1) ||
      !this.#adjMatrix.hasOwnProperty(node2)
    ) {
      throw new Error("yeki az in nodha ro nadaram!");
    } else if (this.#adjMatrix[node1].includes(node2)) {
      throw new Error("shlagham in yal ro daram!");
    } else {
      this.#adjMatrix[node1].push(node2);
      if (!this.directed) {
        this.#adjMatrix[node2].push(node1);
      }
    }
  }

  showGraph() {
    console.log(this.#adjMatrix);
  }

  isConnected() {}

  findShortestPath(node1, node2) {}
}

class Product {
  static allProducts = [];
  id;

  static generateId() {
    let generatedId = parseInt(Math.random() * 1e8);
    while (Product.allProducts.includes(generatedId)) {
      generatedId = parseInt(Math.random() * 1e8);
    }
    return generatedId;
  }

  constructor(name, price) {
    this.id = Product.generateId();
    Product.allProducts.push(this.id);
    this.name = name;
    this.price = price;
    this.comments = [];
  }

  addComment(comment) {
    this.comment.push(comment);
  }
}
// const g1 = new Graph((directed = true));
// g1.addNode("a");
// g1.addNode("b");
// g1.addNode("c");
// g1.addEdge("a", "b");
// g1.showGraph();

module.exports = {
  Product,
};
