class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const insert = (root, node) => {
    if(root === null){
        root = node;
    }
    else{
        if(root.value < node.value){
            if(root.right === null){
                root.right = node;
            }
            else{
                insert(root.right, node);
            }
        }
        else{
            if(root.left === null){
                root.left = node;
            }
            else{
                insert(root.left, node);
            }
        }
    }
}

const printValues = (node) => {
    if(node !== null){
        console.log("Node.value >>> ", node.value);
        printValues(node.left);
        printValues(node.right);
    }
}

const countAllLeaves = (root) => {
    if(root === null){
        return 0;
    }

    let leftCount = countAllLeaves(root.left);
    let rightCount = countAllLeaves(root.right);

    return leftCount + rightCount + 1;
}

// Input: root = [1,2,3,4,5,6]
// Output: 6

// Input: root = []
// Output: 0

let root = new Node(1);
insert(root, new Node(2));
insert(root, new Node(3));
insert(root, new Node(4));
insert(root, new Node(5));
insert(root, new Node(6));

// Input: root = [1]
// Output: 1

// let root = new Node(1);

// printValues(root);

let totalCountResult = countAllLeaves(root);

console.log("CountcountAllLeaves Result >> ", totalCountResult)