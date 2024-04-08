class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        let newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
        }
        else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            }
            else {
                this.insertNode(node.left, newNode);
            }
        }
        else {
            if (node.right === null) {
                node.right = newNode;
            }
            else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    // In-order traversal to print the values of the BST
    printValues(node = this.root) {
        if (node !== null) {
            this.printValues(node.left);
            console.log(node.value);
            this.printValues(node.right);
        }
    }

}

let BT = new BinaryTree();
BT.insert(1)
BT.insert(2)
BT.insert(3)

BT.printValues();