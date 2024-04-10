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
                insert(root.left, node)
            }
        }
    }
}

const printValues = (node) => {
    if(node !== null){
        console.log("values >> ", node.value);
        printValues(node.left);
        printValues(node.right);
    }
}

const solve = (root, lst) => {
    if(root === null){
        return;
    }
    lst.push(root.value);
    solve(root.left, lst);
    solve(root.right, lst)
}

const preOrderTraversal = (root) => {
    let lst = [];
    solve(root, lst);
    console.log("preOrderTraversal value >>> ", lst)
}

// input = 1 2 5 3 6 4
// expected output = 1 2 5 3 4 6 

// input = 1 14 3 7 4 5 15 6 13 10 11 2 12 8 9
// expected output = 1 14 3 2 7 4 5 6 13 10 8 9 11 12 15 

let root = new Node(1);
insert(root, new Node(2));
insert(root, new Node(5));
insert(root, new Node(3));
insert(root, new Node(6));
insert(root, new Node(4));

// let root = new Node(1);
// insert(root, new Node(14));
// insert(root, new Node(3));
// insert(root, new Node(2));
// insert(root, new Node(7));
// insert(root, new Node(4));
// insert(root, new Node(5));
// insert(root, new Node(6));
// insert(root, new Node(13));
// insert(root, new Node(10));
// insert(root, new Node(8));
// insert(root, new Node(9));
// insert(root, new Node(11));
// insert(root, new Node(12));
// insert(root, new Node(15));

// printValues(root);

preOrderTraversal(root)