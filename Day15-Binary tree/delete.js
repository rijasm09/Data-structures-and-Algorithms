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

    // min value in the tree
    min(root) {
        if (!root.left) {
            return root.value
        } else {
            return this.min(root.left)
        }
    }
    max(root) {
        if (!root.right) {
            console.log("highest : ", root.value);
        } else {
            return this.max(root.right)
        }
    }


    delete(value) {
        this.root = this.deleteNode(this.root, value)
    }

    deleteNode(root, value) {
        // to check if the tree is empty
        if (root === null) {
            return root;
        }
        if (value < root.value) {
            root.left = this.deleteNode(root.left, value)
        } else if (value > root.value) {
            root.right = this.deleteNode(root.right, value)
        } else {
            // If the value to be deleted is equal to the root node value, 
            // then there are three sub-cases:

            // If the root node has no children, 
            // then it is simply deleted by returning null.
             if (!root.right && !root.left) {
                return null;
             }

            //  If the root node has only one child, then that child 
            //  takes the place of the deleted node by being returned.
             if (!root.left) {
                return root.right
             } else if (!root.right) {
                return root.left
             }

            //  If the root node has two children, then the value of the 
            //  node with the minimum value in the right subtree 
            //  (found using the min function) is assigned to the root node,
            //   and the deleteNode method is called recursively on the right 
            //   subtree to delete the node with the minimum value. 
            //   The updated right child of the current root is then returned.
             root.value = this.min(root.right)
             root.right = this.deleteNode(root.right,root.value)
        }
        // to ensure changes in the root node are reflected 
        return root;
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
// console.log("breadth first search");
// tree.levelOrder()
// tree.min(tree.root)
// tree.max(tree.root)
