const treeify = require('treeify')

class Node {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

class binarySearchTree {
    constructor() {
        this.root = null;
    }
    isEmpty() {
        return this.root === null
    }
    insert(value) {
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode)
        }
    }
    insertNode(root, newNode) {
        if (newNode.value < root.value) {
            if (!root.left) {
                root.left = newNode;
            } else {
                this.insertNode(root.left, newNode)
            }
        } else {
            if (!root.right) {
                root.right = newNode;
            } else {
                this.insertNode(root.right, newNode)
            }
        }
    }
    search(root, value) {
        if (!root) {
            return false;
        } else {
            if (root.value === value) {
                console.log("number exist : ", value);
                return;
            } else if (value < root.value) {
                return this.search(root.left, value)
            } else {
                return this.search(root.right, value)
            }
        }
    }
    preOrder(root) {
        if (root) {
            console.log(root.value);
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }
    inOrder(root) {
        if (root) {
            this.inOrder(root.left)
            console.log(root.value);
            this.inOrder(root.right)
        }
    }
    postOrder(root) {
        if (root) {
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value);
        }
    }

    // BFS
    levelOrder() {
      const queue = []
      queue.push(this.root)
      while (queue.length) {
        let curr = queue.shift()
        console.log(curr.value);
        if (curr.left) {
            queue.push(curr.left)
        }
        if (curr.right) {
            queue.push(curr.right)
        }
      }
    }
}

const tree = new binarySearchTree()
// console.log("Tree is empty?", tree.isEmpty);
tree.insert(10);
tree.insert(5);
tree.insert(3);
tree.insert(7);
tree.insert(15);
tree.search(tree.root, 3)
console.log(treeify.asTree(tree, true));
// console.log("preOrder");
// tree.preOrder(tree.root)
// console.log("inOrder");
// tree.inOrder(tree.root)
// console.log("postOrder");
// tree.postOrder(tree.root)
console.log("breadth first search");
tree.levelOrder()
