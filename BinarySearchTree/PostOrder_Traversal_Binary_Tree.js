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
        console.log("node.value >>> ", node.value);
        printValues(node.left);
        printValues(node.right);
    }
}

const solve = (root, lst) => {
    if(root === null){
        return;
    }

    solve(root.left, lst);
    solve(root.right, lst);
    lst.push(root.value);
}

const postOrderTraversal = (root) => {
    let lst = [];
    solve(root, lst);
    console.log("POST-OrderTraversal value >>> ", lst)
}

// input - 1 2 5 3 6 4
// expected output - 4 3 6 5 2 1

// input - 1 14 3 7 4 5 15 6 13 10 11 2 12 8 9
// expected output - 2 6 5 4 9 8 12 11 10 13 7 3 15 14 1 

let root = new Node(1);
insert(root, new Node(14));
insert(root, new Node(3));
insert(root, new Node(7));
insert(root, new Node(4));
insert(root, new Node(5));
insert(root, new Node(15));
insert(root, new Node(6));
insert(root, new Node(13));
insert(root, new Node(10));
insert(root, new Node(11));
insert(root, new Node(2));
insert(root, new Node(12));
insert(root, new Node(8));
insert(root, new Node(9));

// printValues(root)

postOrderTraversal(root);