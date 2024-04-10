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

const countLeaves = (root) => {
    if(root === null){
        return 0;
    }
    if(root.left === null && root.right === null){
        return 1;
    }

    let leftCount = countLeaves(root.left);
    let rightCount = countLeaves(root.right);

    return leftCount + rightCount;
}

let root = new Node(5);
insert(root, new Node(7));
insert(root, new Node(1));
insert(root, new Node(8));
insert(root, new Node(15));



// printValues(root);

let leafCountResult = countLeaves(root);

console.log("leafCountResult >> ", leafCountResult)