// create node
class Node {
  constructor(value) {
    this.value = value;
    this.height = 1;
    this.left = null;
    this.right = null;
  }
}

// AVL tree
class AVLTree {
  constructor() {
    this.root = null;
  }

  // get height of the node
  height = (node) => {
    if (node === null) {
      return 0;
    }

    return node.height;
  };

  // right rotate
  rightRotate = (y) => {
    let x = y.left;
    let xRight = x.right;
    x.right = y;
    y.left = xRight;
    y.height = Math.max(this.height(y.left), this.height(y.right)) + 1; // update node height
    x.height = Math.max(this.height(x.left), this.height(x.right)) + 1; // for balance factor
    return x;
  };

  //left rotate
  leftRotate = (x) => {
    let y = x.right;
    let yLeft = y.left;
    y.left = x;
    x.right = yLeft;
    x.height = Math.max(this.height(x.left), this.height(x.right)) + 1;
    y.height = Math.max(this.height(y.left), this.height(y.right)) + 1;
    return y;
  };

  getBalanceFactor = (node) => {
    if (node === null) {
      return 0;
    }

    return this.height(node.left) - this.height(node.right);
  };

  insertHelper = (node, value) => {
    // find position to insert
    if (node == null) {
      // if no root
      return new Node(value);
    }

    if (value < node.value) {
      node.left = this.insertHelper(node.left, value);
    } else if (value > node.value) {
      node.right = this.insertHelper(node.right, value);
    } else {
      return node;
    }

    // update balance factor and balance the tree
    node.height = 1 + Math.max(this.height(node.left), this.height(node.right));

    let balanceFactor = this.getBalanceFactor(node);

    if (balanceFactor > 1) {
      if (value < node.left.value) {
        return this.rightRotate(node);
      } else if (value > node.left.value) {
        node.left = this.leftRotate(node.left);
        return this.rightRotate(node);
      }
    }

    if (balanceFactor < -1) {
      if (value > node.right.value) {
        return this.leftRotate(node);
      } else if (value < node.right.value) {
        node.right = this.rightRotate(node.right);
        return this.leftRotate(node);
      }
    }

    return node;
  };

  insertNode = (value) => {
    this.root = this.insertHelper(this.root, value);
  };

  minValue = (node) => {
    let current = node;
    while(current.left !== null) {
      current = current.left;
    }

    return current;
  }

  deleteHelper = (root, value) => {
    if(root === null) {
      // if no root
      return root;
    }

    if(value < root.value) {
      root.left = this.deleteHelper(root.left, value);
    } else if (value > root.value) {
      root.right = this.deleteHelper(root.right, value)
    } else {
      if(root.left === null || root.right === null) {
        let tmp = null;
        if(tmp == root.left) {
          tmp = root.right;
        } else {
          tmp = root.left;
        }

        if(tmp == null) {
          tmp = root;
          root = null;
        } else {
          root = tmp;
        }
      } else {
        let tmp = this.minValue(root.right);
        root.value = tmp.value;
        root.right = this.deleteHelper(root.right, tmp.value)
      }
    }

    // if no root after delete
    if(root == null) {
      return root;
    }

    root.height = Math.max(this.height(root.left), this.height(root.right)) + 1;
    
    let balanceFactor = this.getBalanceFactor(root);
    if(balanceFactor > 1) {
      if(this.getBalanceFactor(root.left) >= 0) {
        return this.rightRotate(root);
      } else {
        root.left = this.leftRotate(root.left);
        return this.rightRotate(root);
      }
    }

    if(balanceFactor < -1) {
      if(this.getBalanceFactor(root.right) <= 0) {
        return this.leftRotate(root);
      } else {
        root.right = this.rightRotate(root.right);
        return this.leftRotate(root);
      }
    }
    
    return root
  }

  deleteNode = (value) => {
    this.root = this.deleteHelper(this.root, value);
  }

  // print tree
  printHelper = (node) => {
    if (node) {
      console.log(node);
      this.printHelper(node.left);
      this.printHelper(node.right);
    }
  };

  print = () => {
    this.printHelper(this.root);
  };
}

let tree = new AVLTree();

tree.insertNode(33);
tree.insertNode(13);
tree.insertNode(53);
tree.insertNode(9);
tree.insertNode(21);
tree.insertNode(61);
tree.insertNode(8);
tree.insertNode(11);
tree.print();

console.log('\nafter delete');
tree.deleteNode(13);
tree.print();